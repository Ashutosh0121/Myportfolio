import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import APP from "./App";
import "./main.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter >
    <APP />
  </BrowserRouter>
);
