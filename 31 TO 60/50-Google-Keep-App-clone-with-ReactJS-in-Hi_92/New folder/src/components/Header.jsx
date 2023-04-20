import React from 'react'
import Logo from "../Images/aj.png";


const Header = () => {
  return (
    <>
        <div className='header'>
            <img src={Logo} alt='logo' width="92" />
            <h1>keep</h1>
        </div>

    </>
  )
}

export default Header