import React, { useEffect, useState } from "react";
import "./about.css";
export default function About() {
  return (
    <>
      <main>
        <div className="video-container ">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="background-video"
            thumbnail="public\image.png"
            speed="2"
          >
            <source src="public\image\video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="text-content ">
            <h1>Welcome to My Site</h1>
            <p>Enjoy the immersive experience</p>
            <button className="fade">Hello</button>
          </div>

          <div className="pop_up   grid">
            <div className="text">
              <p>hello wellcome</p>
              <p>hope you enjoy </p>
              <button className="fade">Button </button>
            </div>
          </div>
        </div>
      </main>

      <aside>
        <div className="second-box grid">

        <div className="animation-grid-two grid">
         <div className="text-animation grid"> <p >Advance technology and individual pproach of Implementation</p></div>
          <div className="second-pop">
            <div className="nav">
          
              <p> abc</p> <p>hellow</p>
            </div>
            <div className="content">
           
              <h1>Hello</h1>
              
            </div>
            <button className="fade">Download</button>
          </div>


          
          <div className="second-pop"> 
            
            </div> 
            </div>
        </div>
     
      </aside>

      <aside>
        <div className="flower">
          <div className="pop_upp grid">
            <div className="nav"> abc vcxvcvsdxyx</div>
          </div>
        </div>
      </aside>
    </>
  );
}
