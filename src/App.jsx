import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from "./nav/Home"
import About from './nav/About'
import Nav from "./Nav"
export default function App() {
  return (
    <div>
      
      <Nav/>
     <Routes>
        <Route path="/" Element={<Home/>} />
        <Route path='/About' Element={<About/>}/>
     </Routes>
{/* <Nav/> */}
    </div>
  )
}
