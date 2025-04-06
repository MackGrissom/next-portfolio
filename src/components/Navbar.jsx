import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/articles">Articles</Link>
      <a href="/articles">Articles</a>
    </nav>
  );
};

export default Navbar; 