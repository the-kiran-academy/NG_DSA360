import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Customer, Documents, LoanApplication } from 'src/app/holders/customer.model';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-agent-customers',
  templateUrl: './agent-customers.component.html',
  styleUrls: ['./agent-customers.component.scss']
})
export class AgentCustomersComponent implements OnInit {

  documentForm!: FormGroup;
  selectedFile!: File;
  selectedCustomerIdForDoc: string = '';
  documentTypes = [
    'Proof of Identity',
    'Proof of Address',
    'Income Proof',
    'Bank Statement',
    'Loan Application Form',
    'Other'
  ];

  loanApplication: LoanApplication = {
    id: '',
    customerId: '', // This will be filled once the modal opens
    loanAmount: 0,
    loanTenure: 0,
    loanPurpose: '',
    status: 'Pending', // Default status
    interestRate: 0,
    emi: 0,
    applicationDate: new Date().toISOString(),
    paymentFrequency: '',
    incomeDetails: '',
    employmentStatus: '',
    loanPurposeDescription: '',
    creditScore: 0,
    rejectionReason: '',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  customers: Customer[] = [];

  constructor(private service: CustomerService, private fb: FormBuilder, private toastr: ToastrService) {
    this.documentForm = this.fb.group({
      documentType: ['', Validators.required],
      comment: ['', Validators.required],
      file: [null, Validators.required]
    });
  }

  ngOnInit(): void {
    this.getAgentCustomers();
  }

  selectedDocuments: Documents[] = [];
  selectedCustomerId: String = '';
  openDocumentModal(documents: Documents[], customerId: string) {
    this.selectedDocuments = documents;
    this.selectedCustomerId = customerId;

  }
  getAgentCustomers() {

    this.service.getAgentCustomers().subscribe((data: Customer[]) => {
      this.customers = data;

      console.log(this.customers);
    });
  }

  selectedLoan: LoanApplication | null = null;

  openLoanModal(loan: LoanApplication): void {
    this.selectedLoan = loan;
  }

  openLoanApplicationModal(customerId: string): void {
    this.loanApplication.customerId = customerId;
  }

  submitLoanApplication() {
    console.log(this.loanApplication);
    this.service.submitLoanApplication(this.loanApplication).subscribe((response)=>{

      this.toastr.success("Application Submited :"+response)
    });

  }

  // doc upload
  openUploadDocModal(customerId: string) {
    this.selectedCustomerIdForDoc = customerId;
  }
  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
    }
  }
  closeUploadDocModal(): void {
    this.selectedCustomerIdForDoc = '';
    this.documentForm.reset();
  }
  submitDocument() {
    const formValues = this.documentForm.value;
    const formData = new FormData();
    formData.append('documentTypeStr', formValues.documentType);
    formData.append('comment', formValues.comment);
    formData.append('file',this.selectedFile);

    this.service.uploadDocument(formData,this.selectedCustomerIdForDoc).subscribe({
      next: (response) => {
        this.toastr.success('Document uploaded successfully', 'Success');
        this.closeUploadDocModal();
        // Optionally show a toast or refresh the document list
      },
      error: (err) => {
        this.toastr.error('Error uploading document', 'Error');
        // Optionally show an error toast
      }
    });
  }

}
