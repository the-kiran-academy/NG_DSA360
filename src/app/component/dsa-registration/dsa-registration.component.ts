import { DsaApplicationService } from './../../services/dsa-application.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dsa-registration',
  templateUrl: './dsa-registration.component.html',
  styleUrls: ['./dsa-registration.component.scss'],
})
export class DsaRegisterationComponent {
  dsaApplication!: FormGroup;

  currentYear: number;

  constructor(
    private fb: FormBuilder,
    private dsaApplicationService: DsaApplicationService,
    private toaster: ToastrService,
    private router: Router
  ) {
    this.currentYear = new Date().getFullYear();

    this.dsaApplication = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      middleName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      fatherName: ['', [Validators.required, Validators.minLength(3)]],
      gender: ['', Validators.required],
      dateOfBirth: [
      '',
      [
        Validators.required,
        (control: { value: string | number | Date }) => {
        const dateOfBirth = new Date(control.value);
        const today = new Date();
        const age = today.getFullYear() - dateOfBirth.getFullYear();
        const isFutureDate = dateOfBirth > today;
        const isUnderage = (() => {
          const dob = new Date(control.value);
          const minAgeDate = new Date(dob);
          minAgeDate.setFullYear(dob.getFullYear() + 21);
          return today < minAgeDate;
        })();

        return isFutureDate || isUnderage
          ? { invalidDateOfBirth: true }
          : null;
        },
      ],
      ],
      nationality: ['', Validators.required],
      contactNumber: [
      '',
      [Validators.required, Validators.pattern('^[1-9][0-9]{9}$')],
      ],
      emailAddress: ['', [Validators.required, Validators.email]],
      streetAddress: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      postalCode: [
      '',
      [Validators.required, Validators.pattern('^[0-9]{6}$')],
      ],
      country: ['', Validators.required],
      preferredLanguage: ['', Validators.required],
      educationalQualifications: ['', Validators.required],
      experience: ['', Validators.required],
      isAssociatedWithOtherDSA: ['', Validators.required],
      associatedInstitutionName: ['', Validators.required],
      referralSource: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  isControlInvalid(controlName: string): boolean {
    const control = this.dsaApplication.get(controlName);
    return control
      ? control.invalid && (control.touched || control.dirty)
      : false;
  }

  registerAsDsa() {
    if (this.dsaApplication.valid) {
      console.log(this.dsaApplication.value);

      this.dsaApplicationService
        .dsaApplication(this.dsaApplication.value)
        .subscribe((response) => {
          const msg = `Application submitted for Id ${response.dsaApplicationId}`;

          this.toaster.success(msg);
          this.router.navigate(['/welcome']);
        });
    } else {
      this.dsaApplication.markAllAsTouched();
    }
  }
}
