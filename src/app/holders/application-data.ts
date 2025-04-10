export interface AllDsaApplications {
  image: '',
  firstName: '',
  lastName: '',
  emailAddress: '',
  dsaApplicationId: '',
  approvalStatus:'',
  emailVerified:boolean,
  contactNumber: '',
  address: '',
  preferredLanguage: '',
  educationalQualifications:''
}


export interface DsaApplication {
  dsaApplicationId: '';
  firstName: '';
  middleName: '';
  lastName: '';
  gender: '';
  dateOfBirth: '';
  nationality: '';
  contactNumber: '';
  emailAddress: '';
  streetAddress: '';
  city: '';
  state: '';
  postalCode: '';
  country: '';
  preferredLanguage: '';
  educationalQualifications: '';
  experience: '';
  isAssociatedWithOtherDSA: boolean;
  associatedInstitutionName: '';
  referralSource: '';
  approvalStatus: '';
  emailVerified:boolean;
}
export interface Role {
  id: string;
  name: string;
}

export interface Region {
  id: string;
  regionName: string;
}

export interface UserProfile {
  answer: string;
  dsaApplicationId: string;
  password: string;
  question: string;
  regions: string[];
  roles: string[];
  statusReason: string;
  username: string;
}

export interface DsaKyc {
  dsaKycId: string;
  dsaApplicationId: {
    dsaApplicationId: string;
  };
  bankName: string;
  accountNumber: string;
  ifscCode: string;
  passport: string;
  drivingLicence: string;
  aadharCard: string;
  panCard: string;
  photograph: string;
  addressProof: string;
  bankPassbook: string;
  approvalStatus: string;
  attempt: number;
}

export interface LoanCondition {
  id:string;
  bankName: string;
  loanType: string;
  interestRate: number;
  minCreditScore: number;
  processingFee: number;
}






