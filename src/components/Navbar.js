import React from 'react';
import { Link } from 'gatsby';

const Navbar = () => {
  return (
    <nav style={{ padding: '1rem', background: '#f4f4f4', borderBottom: '1px solid #ddd' }}>
      <ul style={{ listStyle: 'none', display: 'flex', gap: '1rem', margin: 0 }}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
