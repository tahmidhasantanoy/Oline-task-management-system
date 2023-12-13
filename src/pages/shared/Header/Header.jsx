import { useContext } from "react";
import ActiveLink from "../../../ActiveLink/ActiveLink";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Link } from "react-router-dom";

const Header = () => {
  const { user, logoutUser } = useContext(AuthContext);

  const handleLogout = () => {
    logoutUser();
  };

  
  const menus = (
    <>
      <li>
        <ActiveLink to="/dashboard">Dashboard</ActiveLink>
      </li>
      <li>
        <ActiveLink to="/add-task">Add task</ActiveLink>
      </li>
      <li>
        <ActiveLink to="/x">X</ActiveLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 px-8">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menus}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          <img
            className="w-12"
            src="../../../../public/icons/title.png"
            alt=""
          />
        </a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menus}</ul>
      </div>

      <div className="navbar-end ">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
        <div className="flex-none gap-2 ml-1">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              {user ? (
                <Link onClick={() => handleLogout()}>Logout</Link>
              ) : (
                <Link to={"/login"}>Login</Link>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
