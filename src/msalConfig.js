// msalConfig.js
export const msalConfig = {
    auth: {
      clientId: '79e59671-0915-4523-a6f8-34035f4c5aa1',
      authority: 'https://your-b2c-tenant.b2clogin.com/your-b2c-tenant.onmicrosoft.com/B2C_1_SuSi',
      redirectUri: 'https://AssessmentDemo.b2clogin.com/AssessmentDemo.onmicrosoft.com/B2C_1_SuSi/oauth2/v2.0/logout', // Your redirect URI
    },
    cache: {
      cacheLocation: 'sessionStorage',
      storeAuthStateInCookie: false,
    },
  };
  