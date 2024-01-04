import React, { useState } from "react";
import { createContext } from "react";
import "./index.css";
import Projects from "./project.js";
export const ButtonClicked = createContext(null);
export default function Portfolio() {
  const [projectBtnClicked, setProjectBtnClicked] = useState(false);
  const showProjects = () => {
    // setProjectBtnClicked(true);
    console.log("100000");
    sessionStorage.setItem("btnClicked", true);
  };
  return (
    <div className="portfolio-container">
      <h3 className="portfolio-h3">Fullstack Developer</h3>
      <h1 className="portfolio-h3">Hello ,my name is Sai Kumar</h1>
      <p className="portfolio-h3">
        I am Sai kumar a Fullstack Developer aspirant from CCBP. I developed
        several projects using technologies like HTML,CSS,Javascript,React.
      </p>
      <button onClick={showProjects}>Projects</button>
    </div>
  );
}
