import React from 'react'
// import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom"

const Menu = () => {
  return (
    <>
        <NavLink exact activeClassName="active_class" to='/'> About us </NavLink>
        <NavLink exact activeClassName="active_class" to='/contact'> Contact us </NavLink>

        {/* <Link to='/'> About us </Link>
        <Link to='/contact'> Contact us </Link> */}
        

        {/* <a href='/'> About </a>
        <br/>
        <a href='/contact'> Contact  </a> */}
    </>
  )
}

export default Menu