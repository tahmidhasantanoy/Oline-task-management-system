/* eslint-disable react/prop-types */
import "./ActiveLink.css";

import { NavLink } from "react-router-dom";

const ActiveLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive, isPending }) =>
      isPending ? "pending" :isActive ? "active"  : ""
      }
    >
      {children}
    </NavLink>
  );
};

export default ActiveLink;
