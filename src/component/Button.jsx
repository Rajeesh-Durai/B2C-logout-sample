import React from 'react'
import { useMsal } from '@azure/msal-react'; 

const Button = () => {
    const { instance } = useMsal();
    const Logout = async () => {
          try {
              await instance.logoutPopup();
          } catch (error) {
              console.error(error);
          }
      }
  return (

    <div >
                        You are authenticated! 😊
    <button onClick={() => Logout()}>Logout</button>
    </div>  
  )
}

export default Button