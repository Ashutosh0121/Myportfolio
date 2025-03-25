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
    </div>
  );
}
