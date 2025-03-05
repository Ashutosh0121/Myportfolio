import React from "react";
import ReactDom, { createRoot } from "react-dom/client";
import App from "./App";
import { HashRouter } from "react-router-dom";
import Nav from "./Nav";

createRoot(document.getElementById("root")).render(
  <HashRouter>
    <App />
  </HashRouter>
);
