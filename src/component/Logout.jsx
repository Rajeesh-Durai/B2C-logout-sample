import React from 'react'
import { AuthenticatedTemplate, useMsal } from '@azure/msal-react';  
const Logout = () => {
    const { instance } = useMsal();
  const Logout = async () => {
        try {
            await instance.logoutPopup();
        } catch (error) {
            console.error(error);
        }
    }
  return (
    <AuthenticatedTemplate>
<div class="alert alert-success" role="alert">
                    You are authenticated! 😊
<button type="button" class="btn btn-dark btn-sm float-end" onClick={() => Logout()}>Logout</button>
</div>  
</AuthenticatedTemplate>
  )
}

export default Logout