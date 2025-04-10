export const AppUrls = {
  loginUrl: 'http://localhost:8091/auth/login-user',

  //admin
  allRolesUrl: 'http://localhost:8091/admin/get-all-roles',
  addRoleUrl: 'http://localhost:8091/admin/add-role',
  allRegionsUrl: 'http://localhost:8091/admin/get-all-regions',
  addRegionUrl: 'http://localhost:8091/admin/add-region',

  createUserProfile: 'http://localhost:8091/admin/create-user-profile',

  //dsa application

  dsaApplication:'http://localhost:8091/public/dsa-application',

  allDsaApplicationUrl:
    'http://localhost:8091/sub-admin/get-all-dsa-application',

  allDsaApplicationIdsUrl: 'http://localhost:8091/admin/get-all-dsa-ids',

  getDsaApplication: 'http://localhost:8091/sub-admin/get-dsa-application-by-id',

  emailVerification:
    'http://localhost:8091/sub-admin/email-verification-request',

  //system user
  myProfileApiUrl: 'http://localhost:8091/system-user/get-user-by-username',

  allUserUrl: 'http://localhost:8091/system-user/get-all-user',

  getSystemUserUrl: 'http://localhost:8091/system-user/get-user-by-username',

  //kyc
  allDsaKyc: 'http://localhost:8091/sub-admin/get-all-kycs',

  getKycByDsaId: 'http://localhost:8091/sub-admin/get-kyc-by-dsaId',

  approvalNotification:
    'http://localhost:8091/sub-admin/notify-approval-status',

  dsaKyc: 'http://localhost:8091/public/syatem-user-kyc',

  //loan
  createLoanCondition: 'http://localhost:8091/admin/loan-condition/add',
};
