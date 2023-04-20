import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className='menu_style'>
        <NavLink  to="/"> AboutUs </NavLink>
        <NavLink  to="/services"> Services </NavLink>
        <NavLink  to="/user/welcome/here"> User </NavLink>
        <NavLink  to="/contact"> Contact </NavLink>
        
      </div>
    </>
  )
}

export default Home