import { Link, useLocation } from "react-router-dom";

import useAuth from "../hooks/useAuth.js";
import { routes, url } from "../utils/routes.js";

const NavbarItem = ({ path, title, onClick }) => {
  const { pathname } = useLocation();

  return (
    <li>
      <Link
        to={path}
        className={
          "block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 max-md:hover:bg-zinc-800 max-md:hover:text-white " +
          (pathname === path
            ? "bg-blue-800 text-blue-500 max-md:text-white max-md:hover:bg-blue-800 font-bold"
            : "text-white hover:text-purple-500")
        }
        onClick={onClick}
        aria-current="page"
      >
        {title}
      </Link>
    </li>
  );
};

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();

  const routesList = [
    {
      title: "Home",
      path: url(routes.home),
    },
    {
      title: "My tasks",
      path: url(routes.tasks.index),
    },
    {
      title: "New task",
      path: url(routes.tasks.create),
    },
    {
      title: "Logout",
      path: "#",
      onClick: () => logout(),
    },
  ];

  return (
    <nav className="bg-white border-gray-200 dark:bg-zinc-800 select-none">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-5">
        <Link
          to={isAuthenticated ? url(routes.home) : url(routes.login)}
          className="flex items-center"
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Tasks app
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-zinc-900 md:dark:bg-zinc-800 dark:border-gray-700">
            {isAuthenticated ? (
              routesList.map((route, index) => (
                <NavbarItem
                  key={index}
                  path={route.path}
                  title={route.title}
                  onClick={route.onClick}
                />
              ))
            ) : (
              <>
                <NavbarItem path={url(routes.login)} title="Login" />
                <NavbarItem path={url(routes.register)} title="Register" />
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
