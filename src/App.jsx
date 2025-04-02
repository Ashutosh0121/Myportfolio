import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./nav/Home";
import About from "./nav/About";
import Project from "./nav/Project";
import Nav from "./Nav"; // Added Nav component
import Resume from "./nav/Resume";

export default function App() {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/resume"  element={<Resume />}/>
      </Routes>

      <footer>
        <div className="grid grid-four ">
          {/* <h1>Contact</h1> */}
          <div className="div1">
          <h1>Get in Touch</h1> 
          <p>Email: chauhanashutosh287@gmail.com </p> 
          <p>phone : 8669584853</p>
          <ul className="nav">
            <li><a href="#"> a</a></li>
            <li><a href="#"> a</a></li>
            <li><a href="#"> a</a></li>
          </ul>
          </div>
          <div className="div2"></div>
          <div className="div3"></div>


        </div>

      </footer>
      

    </div>

    
  );
}
