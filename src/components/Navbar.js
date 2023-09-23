import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div>
    <h1>BookStore</h1>
    <ul>
      <li><Link to="/books">Book</Link></li>
      <li><Link to="/books">categories</Link></li>
    </ul>
  </div>
);

export default Navbar;
