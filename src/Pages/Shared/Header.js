import React, { useContext, useState } from "react";
import { FaUserCircle, FaAlignJustify, FaAsterisk } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import img from "../../Assets/programmer.png";
import { AuthContext } from "../../context/AuthProvider";
import Toogle from "../Other/Toogle";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { user, logout } = useContext(AuthContext);
  const handleSignOut = () => {
    logout()
      .then(() => toast.info("Succesfully Sign Out!"))
      .catch((error) => toast.error(error.message));
  };

  return (
    <div className="bg-cyan-900">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <Link
            to="/"
            aria-label="Fancy Coder"
            title="Fancy Coder"
            className="inline-flex items-center"
          >
            <img className="h-10 w-10" src={img} alt="" />
            <span className="ml-2 text-3xl font-bold tracking-wide text-blue-500 uppercase">
              Fancy<span className="text-orange-500">Coder</span>
            </span>
          </Link>
          <ul className="items-center hidden space-x-8 lg:flex">
            <li>
              <Link
                to="/home"
                aria-label="Home"
                title="Home"
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-orange-400"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/courses"
                aria-label="Courses"
                title="Courses"
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-orange-400"
              >
                Courses
              </Link>
            </li>
            <li>
              <Link
                to="/blogs"
                aria-label="Blog"
                title="Blog"
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-orange-400"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/faq"
                aria-label="faq"
                title="faq"
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-orange-400"
              >
                FAQ
              </Link>
            </li>
            {user?.email ? (
              <>
                <li>
                  <Link to="/profile">
                    {user?.photoURL ? (
                      <img
                        className="h-12 w-12 rounded-full"
                        src={user?.photoURL}
                        aria-label={user?.displayName}
                        title={user?.displayName}
                        alt=""
                      />
                    ) : (
                      <FaUserCircle
                        aria-label={user?.displayName}
                        title={user?.displayName}
                      ></FaUserCircle>
                    )}
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleSignOut}
                    aria-label="Sign in"
                    title="Sign in"
                    className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-orange-400"
                  >
                    Sign Out
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    to="/signup"
                    aria-label="Sign Up"
                    title="Sign Up"
                    className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-orange-400"
                  >
                    Sign Up
                  </Link>
                </li>
                <li>
                  <Link
                    to="/signin"
                    aria-label="Sign in"
                    title="Sign in"
                    className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-orange-400"
                  >
                    Sign In
                  </Link>
                </li>
              </>
            )}
            <li>
              <Toogle></Toogle>
            </li>
          </ul>
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <span className="text-white">
                <FaAlignJustify />
              </span>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link
                        to="/"
                        aria-label="Fancy Coder"
                        title="Fancy Coder"
                        className="inline-flex items-center"
                      >
                        <img className="h-10 w-10" src={img} alt="" />
                        <span className="ml-2 text-xl font-bold tracking-wide text-blue-500 uppercase">
                          Fancy<span className="text-orange-500">Coder</span>
                        </span>
                      </Link>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <FaAsterisk/>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <Link
                          to="/home"
                          aria-label="Home"
                          title="Home"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/courses"
                          aria-label="Courses"
                          title="Courses"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Courses
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/blogs"
                          aria-label="Blog"
                          title="Blog"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Blog
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/faq"
                          aria-label="FAQ"
                          title="FAQ"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          FAQ
                        </Link>
                      </li>
                      {user?.email ? (
                        <>
                          <li>
                            <Link to="/profile">
                              {user?.photoURL ? (
                                <img
                                  className="h-12 w-12 rounded-full"
                                  src={user?.photoURL}
                                  aria-label={user?.displayName}
                                  title={user?.displayName}
                                  alt=""
                                />
                              ) : (
                                <FaUserCircle
                                  aria-label={user?.displayName}
                                  title={user?.displayName}
                                ></FaUserCircle>
                              )}
                            </Link>
                          </li>
                          <li>
                            <button
                              onClick={handleSignOut}
                              aria-label="Sign In"
                              title="Sign In"
                              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                              Sign Out
                            </button>
                          </li>
                        </>
                      ) : (
                        <>
                          <li>
                            <Link
                              to="/signup"
                              aria-label="Sign Up"
                              title="Sign Up"
                              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                              Sign Up
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/signin"
                              aria-label="Sign In"
                              title="Sign In"
                              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                              Sign In
                            </Link>
                          </li>
                        </>
                      )}
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
