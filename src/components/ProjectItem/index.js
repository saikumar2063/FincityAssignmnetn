import React from "react";
import { useContext } from "react";
import { FormData } from "../LoginForm/index";
export default function ProjectItem() {
  const formDetails = useContext(FormData);
  console.log("formDetails", formDetails);
  const { name, desc, link } = formDetails;
  return (
    <div>
      <h1>Project name : {name}</h1>
      <p> {desc}</p>
      <button>View projects</button>
      <img src="https://img.freepik.com/premium-photo/woman-doing-yoga-beach-with-mountain-background_865967-25537.jpg" />
    </div>
  );
}
