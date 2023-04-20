import React, { useState } from "react";
import { FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare } from "react-icons/fa";
import "./navbar.css"; 
import { GiHamburgerMenu } from "react-icons/gi"


const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
    return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <h2>
            <span>A</span>bhi
            <span>T</span>echnical
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div className= {showMediaIcons ? "menu-link mobile-menu-link" : "menu-link" }>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Services</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
            
          </ul>
        </div>

        {/* 3rd social media links */}
         <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a
                href="/"
                target="abhi">
                <FaFacebookSquare className="facebook" />
              </a>
            </li>
            <li>
              <a
                href="/"
                target="abhi">
                <FaInstagramSquare className="instagram" />
              </a>
            </li>
            <li>
              <a
                href="/"
                target="abhi">
                <FaYoutubeSquare className="youtube" />
              </a>
            </li>
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#!" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div> 
      </nav>

      {/* hero section  */}
      <section className="hero-section">
        <p>Welcome to </p>
        <h1>Mern Stack</h1>
      </section>
    </>
  );
};

export default Navbar;
