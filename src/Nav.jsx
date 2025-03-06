import React from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";

export default function Nav() {
  return (
    <div className="nav">
      <ul>
        <li><NavLink to="/">HOME</NavLink></li>
        <li><NavLink to="/about">ABOUT</NavLink></li>
        <li><NavLink to="/project">PROJECT</NavLink></li>
      </ul>
    </div>
  );
}
