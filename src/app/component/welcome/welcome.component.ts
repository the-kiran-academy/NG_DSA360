import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(private customerService: CustomerService, private toastr: ToastrService) { }
  contact = {
    name: '',
    email: '',
    mobile_number: '',
    message: ''
  }

  currentYear: number = new Date().getFullYear();
  ngOnInit(): void {
    localStorage.clear();
  }

  faqs = [
    {
      question: 'Who can become a Personal Loan DSA Partner?',
      answer: 'Any individual who is an Indian citizen, 18 years or above with a minimum education qualification of 12th grade is welcome to join us. Apart from that, you will be required to have good networking skills to acquire new leads.',
      isOpen: true
    },
    {
      question: 'Who can become a Loan Partner?',
      answer: '  Any individual who is an Indian citizen, 18 years or above with a minimum education qualification of 12th grade is welcome to join us. Apart from that, you will be required to have good networking skills to acquire new leads.',
      isOpen: false
    },
    {
      question: 'What will be my responsibilities as a Loan DSA?',
      answer: 'You will be required to refer customers who require different types of loans, to our portal.',
      isOpen: false
    }
  ];
  toggleFaq(selectedFaq: any) {
    this.faqs.forEach(faq => {
      faq.isOpen = faq === selectedFaq ? !faq.isOpen : false;
    });
  }

  contactUs() {
    console.log(this.contact);

    this.customerService.contactUs(this.contact).subscribe((response) => {
      console.log("ress",response);

      this.toastr.success("Your message has been sent successfully");
      // Reset the form after successful submission

      this.contact = {
        name: '',
        email: '',
        mobile_number: '',
        message: ''
      };
    });

  }

}
