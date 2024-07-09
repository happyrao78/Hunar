import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/image.png';
import { auth, provider } from './FireBaseConfig';
import { signInWithPopup, signOut } from 'firebase/auth';
// import useTheme from '../Context/Theme';
import ThemeBtn from './ThemeButton';
// Adjust the path to your firebaseConfig.js

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      console.log('User signed in: ', user);
    } catch (error) {
      console.error('Error signing in: ', error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error('Error signing out: ', error);
    }
  };

  return (
    <header className="shadow sticky z-50 top-0 bg-gray-400 dark:bg-blue-950 dark:transition ease-in-out duration-500">
      <nav className="border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <NavLink to="/" className="flex items-center">
            <img
              className="rounded-3xl w-12 h-12 sm:w-10 sm:h-10 md:w-15 md:h-15 lg:w-20 lg:h-20"
              src={Logo}
              alt="Logo"
            />
          </NavLink>
          <div className="flex items-center lg:order-2">
            {user ? (
              <>
                <span className="text-gray-800 dark:text-white mr-4">Hello, {user.displayName}</span>
                <button
                  onClick={handleLogout}
                  className="text-gray-800 dark:text-white hover:bg-gray-50  dark:hover:bg-blue-400 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm md:text-lg lg:text-xl px-2 md:px-4 py-1.5 md:py-2 lg:py-2.5 mr-1 md:mr-2 focus:outline-none dark:transition ease-in-out duration-500"
                >
                  Log out
                </button>
              </>
            ) : (
              <>
              <div className='p-4 '>
                <ThemeBtn />
              </div>
                <button
                  onClick={handleLogin}
                  className="text-gray-800 dark:text-white dark:hover:bg-blue-400  hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-xl md:text-lg lg:text-xl px-2 md:px-4 py-1.5 md:py-2 lg:py-2.5 mr-1 md:mr-2 focus:outline-none dark:hover:transition ease-in-out duration-500"
                >
                  Log in
                </button>
                
                <Link
                  to="#"
                  className="text-white dark:bg-blue-400 dark:hover:bg-blue-500 dark:transition ease-in-out duration-500 bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm md:text-lg lg:text-xl px-2 md:px-4 py-1.5 md:py-2 lg:py-2.5 mr-1 md:mr-2 focus:outline-none"
                >
                  Get started
                </Link>
              </>
            )}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-gray-800 ml-2 dark:text-white dark:transition ease-in-out duration-500"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
          <div
            className={`${
              isMenuOpen ? 'block' : 'hidden'
            } justify-between items-center w-full lg:flex lg:w-auto lg:order-1`}
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row text-sm md:text-lg lg:text-xl lg:space-x-8 lg:mt-0">
           
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? 'text-orange-700 dark:text-green-500' : 'text-gray-700 dark:text-white'
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  News
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? 'text-orange-700 dark:text-green-500' : 'text-gray-700 dark:text-white'
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? 'text-orange-700 dark:text-green-500' : 'text-gray-700 dark:text-white'
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
