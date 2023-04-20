import React from 'react'
import { useParams, useLocation, useNavigate } from 'react-router-dom'

const User = () => {
    const {name, lname} = useParams();
    const location = useLocation();
    // console.log(location);
    const navigate = useNavigate();
    console.log(navigate);


  return (
    <>
        <h1>Hello this is {name} {lname}</h1>
        <p>This is Location {location.pathname}</p>
        {location.pathname === `/user/abhishek/kumar` ? (
            <button onClick={()=>navigate(-1)}>click me </button>
        ) : null }
       
        
    </>
  )
}

export default User;