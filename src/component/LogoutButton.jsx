import React from 'react';
import { useMsal } from '@azure/msal-react';
import { PublicClientApplication } from '@azure/msal-browser';
import { msalConfig } from '../msalConfig';

const LogoutButton = () => {
  const { instance } = useMsal();
  const msalInstance = new PublicClientApplication(msalConfig);

  const handleLogout = async () => {
    try {
      await instance.logoutPopup(); // Use logoutPopup to show a popup during logout
    } catch (error) {
      console.error('Logout failed:', error);
    } finally {
      // Redirect to your post-logout page after the session is cleared
      window.location.href = "https://AssessmentDemo.b2clogin.com/AssessmentDemo.onmicrosoft.com/oauth2/v2.0/authorize?p=B2C_1_SuSi&client_id=79e59671-0915-4523-a6f8-34035f4c5aa1&nonce=defaultNonce&redirect_uri=https%3A%2F%2Flocalhost%3A3000%2F&scope=openid&response_type=id_token&prompt=login";
    }
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default LogoutButton;
