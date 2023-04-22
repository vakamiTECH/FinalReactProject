import React from 'react';
import { NavLink, Link } from 'react-router-dom';

function Header() {
  const isLoggenIn = false;
  return (
    <header className="bg-gray-100">
      <div className="container mx-auto flex items-center justify-between py-4 text-primary font-big-shoulders-stencil-display text-4xl">
        <div className="w-1/4 space-x-4">
          <Link to={'/'} className="font-bold">
            Logo
          </Link>
          <NavLink to={'/'} className="font-bold hover:text-secondary">
            Home
          </NavLink>
        </div>
        <div className="w-3/4 flex justify-end">
          <nav className="space-x-4">
            {isLoggenIn && (
              <NavLink
                to={'/shops'}
                className="font-bold  hover:text-secondary"
              >
                Projects for sale
              </NavLink>
            )}
            {isLoggenIn && (
              <NavLink
                to={'/shops/add/'}
                className="font-bold  hover:text-secondary"
              >
                Sell here
              </NavLink>
            )}
            {!isLoggenIn && (
              <NavLink
                to={'/login'}
                className="font-bold  hover:text-secondary"
              >
                Login
              </NavLink>
            )}
            {!isLoggenIn && (
              <NavLink
                to={'/register'}
                className="font-bold  hover:text-secondary"
              >
                Register
              </NavLink>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
