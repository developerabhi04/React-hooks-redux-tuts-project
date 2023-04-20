import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const User = () => {
  const {fname,lname} = useParams();
  const location = useLocation();
  console.log(location.pathname);

  return( 
      <>
        <h1>hi, this is User {fname} {lname} page </h1><br/>
        <p>My current location is {location.pathname}</p>
        {location.pathname === `/user/welcome/here` ? (
          <button> Click Me </button>
        ) : null }
      </>
    )

  
  
  
    
}

export default User