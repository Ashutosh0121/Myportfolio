import React, { useEffect, useState } from "react";
export default function Home() {
  return (
    <>
      <section>
        <div className="content grid grid_two">
          <div className="left">
            <p>Hello</p>
            <h1>I'am Ashutosh Chuahan</h1>
            <h2 id="blue">Frontend Web-Developer</h2>
            <p>From Mumbai</p>
          </div>
          <div className="right">
            <img src="/image/1.png" alt="" />
          </div>
        </div>
      </section>

      <section>
        <h1 className="grid" >About me</h1>
        <div className="content grid grid_two">
          <div className="right">
            <img src="/image/1.png" alt="" />
          </div>
          <div className="left">
            <p>Hello</p>
            <h1>I'am Ashutosh Chuahan</h1>
            <h2 id="blue">Frontend Web-Developer</h2>
            <p>From Mumbai</p>
          </div>
        </div>
      </section>
    </>
  );
}
