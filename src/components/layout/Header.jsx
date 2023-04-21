import React from 'react';
import { NavLink, Link } from 'react-router-dom';

function Header() {
  const isLoggenIn = false;
  return (
    <header>
      <div className="container">
        <Link to={'/'} className="logo">
          Logo
        </Link>
        <nav>
          <NavLink to={'/'}>Home</NavLink>
          {isLoggenIn && <NavLink to={'/shops'}>Projects for sale</NavLink>}
          {isLoggenIn && <NavLink to={'/shops/add/'}>Sell here</NavLink>}
          {!isLoggenIn && <NavLink to={'/login'}>Login</NavLink>}
          {!isLoggenIn && <NavLink to={'/register'}>Register</NavLink>}
        </nav>
      </div>
    </header>
  );
}

export default Header;
