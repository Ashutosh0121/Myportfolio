import React from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";

export default function Nav() {
  return (
  <header>
    <div className="content">
      
      <ul>
        <li><NavLink to="/">HOME</NavLink></li>
        <li><NavLink to="/about">ABOUT</NavLink></li>
        <li><NavLink to="/resume">RESUME </NavLink></li>
        <li><NavLink to="/project">PROJECT</NavLink></li>
      </ul>
    </div>
  </header>
    
  );
}
