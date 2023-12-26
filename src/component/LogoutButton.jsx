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
    } 
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default LogoutButton;
