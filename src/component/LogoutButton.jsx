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
      window.location.href = "https://AssessmentDemo.b2clogin.com/AssessmentDemo.onmicrosoft.com/B2C_1_SuSi/oauth2/v2.0/logout?p=B2C_1_SuSi";
    }
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default LogoutButton;
