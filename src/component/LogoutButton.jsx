import React, { useEffect } from 'react';
import { useMsal } from '@azure/msal-react';

const LogoutButton = () => {
  const { instance, accounts } = useMsal();

  const handleLogout = () => {
    const logoutRequest = {
      account: accounts[0], // Assuming there is only one account
      postLogoutRedirectUri: process.env.REACT_APP_POST_LOGOUT_REDIRECT_URI, // Set this in your environment variables
    };

    instance.logoutPopup(logoutRequest).catch((error) => {
      console.error('Logout failed:', error);
    });
  };

  useEffect(() => {
    // Check for authenticated user on component mount
    if (accounts.length > 0) {
      // User is authenticated
      // You might want to perform additional actions here if needed
    }
  }, [accounts]);

  return (
    <div>
      {accounts.length > 0 ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <p>User not logged in</p>
      )}
    </div>
  );
};

export default LogoutButton;
