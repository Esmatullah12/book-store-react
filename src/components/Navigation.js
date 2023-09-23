import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => (
  <div className="navbar">
    <h1 className="logo">BookStore</h1>
    <ul className="nav-menu">
      <li className="nav-item"><Link className="nav-link" to="/">Book</Link></li>
      <li className="nav-item"><Link className="nav-link" to="/books">categories</Link></li>
    </ul>
  </div>
);

export default Navigation;
