import React from "react";
import { NavLink } from "react-router-dom";
import "./nav.css"
export default function Nav() {
  return (
    <div className="nav">
      <ul>
        <li>
          <NavLink to="/"> HOMEe</NavLink>
        </li>
        <li>
          <NavLink to="/About"> ABOUT</NavLink>
        </li>
        {/* <li><NavLink to=""> </NavLink></li>
        <li><NavLink to=""> </NavLink></li> */}
      </ul>
    </div>
  );
}
