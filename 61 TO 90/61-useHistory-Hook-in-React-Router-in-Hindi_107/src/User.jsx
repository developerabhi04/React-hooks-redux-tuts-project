import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';




const User = () => {
  const {fname,lname} = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  // console.log(navigate);

  return( 
      <>
        <h1>hi, this is User {fname} {lname} page </h1><br/>
        <p>My current location is {location.pathname}</p>
        {location.pathname === `/user/welcome/here` ? (
          <button onClick={()=> navigate(-2)} > Click Me </button>
      //     <button onClick={() => navigate(-2)}>Go 2 pages back</button>
      // <button onClick={() => navigate(-1)}>Go back</button>
      // <button onClick={() => navigate(1)}>Go forward</button>
      // <button onClick={() => navigate(2)}>Go 2 pages forward</button>
        ) : null }
      </>
    )

  
  
  
    
}

export default User