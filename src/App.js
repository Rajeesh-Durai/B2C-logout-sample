import React from 'react';
import { MsalProvider } from '@azure/msal-react';
import { msalConfig } from './msalConfig'; // Your MSAL configuration
import LogoutButton from './component/LogoutButton';
import { PublicClientApplication } from '@azure/msal-browser';

const App = () => {
  const msalInstance = new PublicClientApplication(msalConfig);
  return (
    <MsalProvider instance={msalInstance}>
      <div>
        <LogoutButton />
      </div>
    </MsalProvider>
  );
};

export default App;
