import React from 'react'
import ReactDom, { createRoot } from "react-dom/client"
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import Nav from "./Nav"


createRoot(document.getElementById("root")).render(
<BrowserRouter>
<App/>
</BrowserRouter>
)
