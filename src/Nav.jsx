import React from "react";
import { NavLink } from "react-router-dom";


export default function Nav() {
  return (
    <>
  <header>
    <div className="content">
      <div className="nav">

      <img src="/image/image.png" alt="" />    
      <ul>
        <li><NavLink to="/">HOME</NavLink></li>
        <li><NavLink to="/about">ABOUT</NavLink></li>
        <li><NavLink to="/resume">RESUME </NavLink></li>
        <li><NavLink to="/project">PROJECT</NavLink></li>
      </ul>
      </div>
    </div>
  </header>

    </>
  );
}
