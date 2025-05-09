export interface Documents {
  id: string;
  documentName: string;
  comment: string;
  documentType: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

export interface LoanApplication {
  id:string;
  customerId: string;
  loanAmount: number;
  loanTenure: number;
  loanPurpose: string;
  status: string;
  interestRate: number;
  emi: number;
  applicationDate: string;
  paymentFrequency: string;
  incomeDetails: string;
  employmentStatus: string;
  loanPurposeDescription: string;
  creditScore: number;
  rejectionReason: string;
  createdAt: string;
  updatedAt: string;
}

export interface DsaAgent {
  dsaApplicationId: string;
  firstName: string;
  middleName: string;
  lastName: string;
  gender: string;
  dateOfBirth: string;
  nationality: string;
  contactNumber: string;
  emailAddress: string;
  streetAddress: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  preferredLanguage: string;
  educationalQualifications: string;
  experience: string;
  isAssociatedWithOtherDSA: string;
  associatedInstitutionName: string;
  referralSource: string;
  emailVerified: boolean;
  emailVerificationToken: string;
  approvalStatus: string;
  createdAt: string;
  updatedAt: string;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
  permanentAddress: string;
  currentAddress: string | null;
  createdAt: string;
  updatedAt: string;
  dsaAgentId: DsaAgent;
  loanApplications: LoanApplication[];
  documents: Documents[];
}

export enum DocumentType {
  PROOF_OF_IDENTITY = 'Proof of Identity',
  PROOF_OF_ADDRESS = 'Proof of Address',
  INCOME_PROOF = 'Income Proof',
  BANK_STATEMENT = 'Bank Statement',
  LOAN_APPLICATION_FORM = 'Loan Application Form',
  OTHER = 'Other'
}
