import { Link, NavLink } from "react-router-dom";
import ActiveLink from "../../../ActiveLink/ActiveLink";
// import  "./Header.css"

const Header = () => {
  const menus = (
    <>
      <li>
        <ActiveLink to="/dashboard" >Dashboard</ActiveLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => {
            isActive ? "active" : "";
          }}
        >
          Add task
        </NavLink>
      </li>
      <li>
        <Link>Item 3</Link>
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
              <li>
                <a className="justify-between">Profile</a>
              </li>

              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
