// msalConfig.js
export const msalConfig = {
    auth: {
      clientId: '79e59671-0915-4523-a6f8-34035f4c5aa1',
      authority: 'https://AssessmentDemo.b2clogin.com/AssessmentDemo.onmicrosoft.com/B2C_1_SuSi',
     // redirectUri: 'https://localhost:3000/', // Your redirect URI
      postLogoutRedirectUri: 'https://AssessmentDemo.b2clogin.com/AssessmentDemo.onmicrosoft.com/oauth2/v2.0/authorize?p=B2C_1_SuSi&client_id=79e59671-0915-4523-a6f8-34035f4c5aa1&nonce=defaultNonce&redirect_uri=https%3A%2F%2Flocalhost%3A3000%2F&scope=openid&response_type=id_token&prompt=login'
    },
    cache: {
      cacheLocation: 'sessionStorage',
      storeAuthStateInCookie: false,
    },
  };
  