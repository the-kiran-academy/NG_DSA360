import { Component } from '@angular/core';
import { LoanCondition } from 'src/app/holders/application-data';
import { LoanService } from '../../services/loan.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-manage-interest-rate',
  templateUrl: './manage-interest-rate.component.html',
  styleUrls: ['./manage-interest-rate.component.scss'],
})
export class ManageInterestRateComponent {
  loanCondition: LoanCondition = {
    id: '',
    bankName: '',
    loanType: '',
    interestRate: 0,
    minCreditScore: 0,
    processingFee: 0,
  };

  constructor(
    private loanService: LoanService,
    private toaster: ToastrService
  ) {}

  onSubmit() {
    this.loanService.createLoanCondition(this.loanCondition).subscribe((response)=>{
      if(response!=null){
        this.toaster.success(
          'Loan Condition Added for : ' + this.loanCondition.bankName
        );
      }
    });

  }
}
