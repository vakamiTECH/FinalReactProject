import React from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Logout from '../auth/Logout';

function Header() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const location = useLocation();

  return (
    <header className="bg-primary">
      <div className="container mx-auto flex items-center justify-between py-4 text-primary font-big-shoulders-stencil-display text-3xl">
        <div className="w-2/4 space-x-4">
          <Link to={'/'} className="font-bold">
            Logo
          </Link>
          <NavLink
            className={`navItem font-bold hover:text-secondary hover:transition duration-500 ease-in-out ${
              location.pathname === '/'
                ? 'bg-secondary pt-2 px-3 rounded-t-xl pb-4 text-secondary'
                : ''
            }`}
            to={'/'}
          >
            HOME
          </NavLink>
        </div>
        <div className="w-2/4 flex justify-end">
          <nav className="space-x-4">
            {isLoggedIn && (
              <NavLink
                className={`navItem font-bold hover:text-secondary hover:transition duration-500 ease-in-out ${
                  location.pathname === '/shops'
                    ? 'bg-secondary pt-2 px-3 rounded-t-xl pb-5  text-secondary'
                    : ''
                }`}
                to={'/shops'}
              >
                PROJECTS 4SALE
              </NavLink>
            )}
            {isLoggedIn && (
              <NavLink
                className={`navItem font-bold hover:text-secondary hover:transition duration-500 ease-in-out ${
                  location.pathname === '/shops/add'
                    ? 'bg-secondary pt-2 px-3 rounded-t-xl pb-5  text-secondary'
                    : ''
                }`}
                to={'/shops/add'}
              >
                SELL HERE
              </NavLink>
            )}
            {isLoggedIn && (
              <NavLink
                className="navItem font-bold hover:text-secondary hover:transition duration-500 ease-in-out"
                to={'/login'}
              >
                <Logout />
              </NavLink>
            )}
            {!isLoggedIn && (
              <NavLink
                className={`navItem font-bold hover:text-secondary hover:transition duration-500 ease-in-out ${
                  location.pathname === '/login'
                    ? 'bg-secondary pt-2 px-3 rounded-t-xl pb-5  text-secondary'
                    : ''
                }`}
                to={'/login'}
              >
                LOGIN
              </NavLink>
            )}
            {!isLoggedIn && (
              <NavLink
                className={`navItem font-bold hover:text-secondary hover:transition duration-500 ease-in-out ${
                  location.pathname === '/register'
                    ? 'bg-secondary pt-2 px-3 rounded-t-xl pb-5  text-secondary'
                    : ''
                }`}
                to={'/register'}
              >
                REGISTER
              </NavLink>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
