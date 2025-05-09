import { Component, OnInit } from '@angular/core';
import {
  ApexNonAxisChartSeries,
  ApexChart,
  ApexTitleSubtitle,
} from 'ng-apexcharts';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import * as Papa from 'papaparse';

@Component({
  selector: 'app-car-emi-calculator',
  templateUrl: './car-emi-calculator.component.html',
  styleUrls: ['./car-emi-calculator.component.scss'],
})
export class CarEmiCalculatorComponent implements OnInit {
  ngOnInit(): void {
    this.calculateEMI();
  }

  loanAmount: number = 500000; // Default loan amount
  downPayment: number = 0; // Default down payment
  loanTenure: number = 5; // Default loan tenure in years
  interestRate: number = 8.5; // Default interest rate in percentage
  processingFee: number = 10000; // Default processing fee

  emiResult: number | null = null;
  totalInterestPayable: number | null = null;
  totalPaymentsMade: number | null = null;

  breakdown: Array<any> = [];

  chartOptions: {
    chart: ApexChart;
    labels: string[];
    title: ApexTitleSubtitle;
  } = {
    chart: {
      type: 'donut' as 'donut',
      toolbar: {
        show: true,
        tools: {
          download: true,
        },
      },
    },
    labels: ['Principal', 'Interest'],
    title: {
      text: 'EMI Breakdown',
      align: 'center',
    },
  };

  chartSeries: ApexNonAxisChartSeries = [0, 0];

  updateChart() {
    this.chartSeries = [
      this.loanAmount - this.downPayment,
      this.totalInterestPayable ?? 0,
    ];
  }

  calculateEMI(): void {
    const principal = this.loanAmount - this.downPayment;
    const tenureInMonths = this.loanTenure * 12;
    const rateOfInterest = this.interestRate / 12 / 100;

    // EMI calculation
    const emi =
      (principal *
        rateOfInterest *
        Math.pow(1 + rateOfInterest, tenureInMonths)) /
      (Math.pow(1 + rateOfInterest, tenureInMonths) - 1);

    this.emiResult = emi;
    this.totalPaymentsMade = emi * tenureInMonths + this.processingFee;
    this.totalInterestPayable = this.totalPaymentsMade - principal;

    this.updateChart();

    // Generate breakdown
    this.breakdown = [];
    let balance = principal;
    for (let month = 1; month <= tenureInMonths; month++) {
      const monthlyInterest = balance * rateOfInterest;
      const principalPayment = emi - monthlyInterest;
      const outstandingBalance = balance - principalPayment;

      this.breakdown.push({
        month,
        beginningBalance: balance.toFixed(2),
        emi: emi.toFixed(2),
        principal: principalPayment.toFixed(2),
        interest: monthlyInterest.toFixed(2),
        outstandingBalance: outstandingBalance.toFixed(2),
      });

      balance = outstandingBalance;
    }
  }

  downloadPDF() {
    const doc = new jsPDF();

    // Define header and footer functions
    const header = () => {
      doc.setFontSize(12);
      doc.text('Car Loan EMI Breakdown', 10, 10);
      doc.setFontSize(10);
      doc.text('Generated on: ' + new Date().toLocaleDateString(), 10, 20);
    };

    const footer = (data: any) => {
      doc.setFontSize(10);
      doc.text(`Page ${data.pageNumber}`, 10, doc.internal.pageSize.height - 10);
    };

    // Add header and table
    (doc as any).autoTable({
      head: [
        [
          'Month',
          'Beginning Balance',
          'EMI',
          'Principal',
          'Monthly Interest',
          'Outstanding Balance',
        ],
      ],
      body: this.breakdown.map((item) => [
        item.month,
        item.beginningBalance,
        item.emi,
        item.principal,
        item.interest,
        item.outstandingBalance,
      ]),
      didDrawPage: (data: any) => {
        header(); // Draw header
        footer(data); // Draw footer on every page
      },
      margin: { top: 30, bottom: 30 }, // Adjust margins for header/footer
    });

    doc.save('car-loan-emi-breakdown.pdf');
  }

  downloadCSV() {
    const csvData = Papa.unparse({
      fields: [
        'Month',
        'Beginning Balance',
        'EMI',
        'Principal',
        'Monthly Interest',
        'Outstanding Balance',
      ],
      data: this.breakdown.map((item) => [
        item.month,
        item.beginningBalance,
        item.emi,
        item.principal,
        item.interest,
        item.outstandingBalance,
      ]),
    });

    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'car-loan-emi-breakdown.csv');
    link.click();
  }
}
