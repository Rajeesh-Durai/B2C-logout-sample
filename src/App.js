import React from 'react';
import { MsalProvider } from '@azure/msal-react';
import { msalConfig } from './msalConfig'; // Your MSAL configuration
import LogoutButton from './LogoutButton';

const App = () => {
  return (
    <MsalProvider instance={msalConfig}>
      <div>
        <LogoutButton />
      </div>
    </MsalProvider>
  );
};

export default App;
