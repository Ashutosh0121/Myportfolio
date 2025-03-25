import React from "react";
import "./resume.css";
import img from "./image.png";
export default function Resume() {
  return (
    <section>
      <div className="content">

      <div className="skils">
        <div>
          HTML:
          <div className="box">
            <div id="html"> </div>
          </div>
        </div>
      </div>
      <div className="area">
        <img src={img} alt="" />
      </div>
      </div>
    </section>
  );
}
