import React from 'react';
import { useMsal } from '@azure/msal-react';

const LogoutButton = () => {
  const { instance, accounts } = useMsal();

  const handleLogout = () => {
    console.log(accounts)
    console.log(instance)
    const logoutRequest = {
      account: accounts[0], // Assuming there is only one account
      postLogoutRedirectUri: process.env.REACT_APP_POST_LOGOUT_REDIRECT_URI, // Set this in your environment variables
    };

    instance.logoutPopup(logoutRequest).catch((error) => {
      console.error('Logout failed:', error);
    });
  };



  return (
    <div>
        <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default LogoutButton;
