// Navbar.js
import React from 'react';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <ul className="nav-links">
          <li><a href="#home"> &#60;Nitya GV /&gt; </a></li>
          <li><a href="#home">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#resume">Resume</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
