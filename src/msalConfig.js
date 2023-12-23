// msalConfig.js
export const msalConfig = {
    auth: {
      clientId: '79e59671-0915-4523-a6f8-34035f4c5aa1',
      authority: 'https://your-b2c-tenant.b2clogin.com/your-b2c-tenant.onmicrosoft.com/B2C_1_SuSi',
      redirectUri: 'https://b2-c-logout-sample-8psr.vercel.app/', // Your redirect URI
    },
    cache: {
      cacheLocation: 'sessionStorage',
      storeAuthStateInCookie: false,
    },
  };
  