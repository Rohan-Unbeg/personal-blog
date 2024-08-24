import React from 'react';
import './Navbar.css'
function NavBar() {
  return (
    <nav className="navbar">
      <div className="logo">
        Rohan
      </div>
      <div className="nav-items">

      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/blog">Blog</a>
      <a href="/contact">Contact</a>
      </div>
    </nav>
  );
}

export default NavBar;
