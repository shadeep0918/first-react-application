import React from 'react';
import { Link } from 'react-router-dom'; // Import Link

export default function Header() {
  return (
    <header className="header">
      <div className="logo">My Website</div>
      <nav>
        <ul className="nav-links">
          {/* Use Link to instead of a href */}
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

