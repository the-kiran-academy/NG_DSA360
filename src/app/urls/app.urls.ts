const baseUrl = 'http://localhost:8091';

export const AppUrls = {
  loginUrl: `${baseUrl}/auth/login-user`,

  // admin
  allRolesUrl: `${baseUrl}/admin/get-all-roles`,
  addRoleUrl: `${baseUrl}/admin/add-role`,
  allRegionsUrl: `${baseUrl}/admin/get-all-regions`,
  addRegionUrl: `${baseUrl}/admin/add-region`,
  createUserProfile: `${baseUrl}/admin/create-user-profile`,

  // dsa application
  dsaApplication: `${baseUrl}/public/dsa-application`,
  allDsaApplicationUrl: `${baseUrl}/sub-admin/get-all-dsa-application`,
  allDsaApplicationIdsUrl: `${baseUrl}/admin/get-all-dsa-ids`,
  getDsaApplication: `${baseUrl}/sub-admin/get-dsa-application-by-id`,
  emailVerification: `${baseUrl}/sub-admin/email-verification-request`,

  // system user
  myProfileApiUrl: `${baseUrl}/system-user/get-user-by-username`,
  allUserUrl: `${baseUrl}/system-user/get-all-user`,
  getSystemUserUrl: `${baseUrl}/system-user/get-user-by-username`,

  // kyc
  allDsaKyc: `${baseUrl}/sub-admin/get-all-kycs`,
  getKycByDsaId: `${baseUrl}/sub-admin/get-kyc-by-dsaId`,
  approvalNotification: `${baseUrl}/sub-admin/notify-approval-status`,
  dsaKyc: `${baseUrl}/public/syatem-user-kyc`,

  // loan
  createLoanCondition: `${baseUrl}/admin/loan-condition/add`,

  // contact us
  contactUs: `${baseUrl}/public/contact-us`,

  // metrics
  dsaUserMetrics: `${baseUrl}/admin/metrics/all`,

  agentCustomers: `${baseUrl}/agent/customers/dsa`,
  uploadDocument:  `${baseUrl}/agent/documents/upload`,
  applyForLoan:`${baseUrl}/agent/customer-loan-application`

};
