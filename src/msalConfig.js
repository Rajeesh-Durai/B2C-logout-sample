// msalConfig.js
export const msalConfig = {
    auth: {
      clientId: '79e59671-0915-4523-a6f8-34035f4c5aa1',
      authority: 'https://AssessmentDemo.b2clogin.com/AssessmentDemo.onmicrosoft.com/B2C_1_SuSi',
      redirectUri: 'https://localhost:3000/', // Your redirect URI
      postLogoutRedirectUri: 'https://localhost:3000/'
    },
    cache: {
      cacheLocation: 'sessionStorage',
      storeAuthStateInCookie: false,
    },
  };
  
