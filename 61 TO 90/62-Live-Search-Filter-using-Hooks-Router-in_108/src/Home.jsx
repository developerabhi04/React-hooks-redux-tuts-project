import React from 'react';
import { NavLink } from "react-router-dom"

const Home = () => {

  return (
    <>
      <div className='menu_style'>
            <NavLink to="/">About</NavLink>
            <NavLink to="/service">Services</NavLink>
            <NavLink to="/service">Services</NavLink>
            <NavLink to="/search">Search</NavLink>
            <NavLink to="/user/abhishek/kumar">User</NavLink>
      </div>  
    </>
  )
}

export default Home