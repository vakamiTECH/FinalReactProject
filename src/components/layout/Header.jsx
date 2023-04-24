import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  function logout() {}

  return (
    <header className="bg-primary">
      <div className="container mx-auto flex items-center justify-between py-4 text-primary font-big-shoulders-stencil-display text-3xl">
        <div className="w-2/4 space-x-4">
          <Link to={'/'} className="font-bold">
            Logo
          </Link>
          <NavLink
            className="navItem font-bold hover:text-secondary hover:transition duration-500 ease-in-out"
            to={'/'}
          >
            Home
          </NavLink>
        </div>
        <div className="text-center">
          <h1 className="font-bold text-5xl text-primary">
            UNFINISHED#CARS#MARKET
          </h1>
        </div>
        <div className="w-2/4 flex justify-end">
          <nav className="space-x-4">
            {!isLoggedIn && (
              <NavLink
                className="navItem font-bold  hover:text-secondary hover:transition duration-500 ease-in-out"
                to={'/shops'}
              >
                Projects for sale
              </NavLink>
            )}
            {!isLoggedIn && (
              <NavLink
                className="navItem font-bold  hover:text-secondary hover:transition duration-500 ease-in-out"
                to={'/shops/add'}
              >
                Sell here
              </NavLink>
            )}
            {!isLoggedIn && (
              <NavLink
                className="navItem font-bold  hover:text-secondary hover:transition duration-500 ease-in-out"
                to={'/login'}
              >
                <button>Logout</button>
              </NavLink>
            )}
            {isLoggedIn && (
              <NavLink
                className="navItem font-bold  hover:text-secondary hover:transition duration-500 ease-in-out"
                to={'/login'}
              >
                Login
              </NavLink>
            )}
            {isLoggedIn && (
              <NavLink
                className="navItem font-bold  hover:text-secondary hover:transition duration-500 ease-in-out"
                to={'/register'}
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
