import React, { useState } from "react";
import { createContext } from "react";
import "./index.css";
import Projects from "../Portfolio/project";
import Portfolio from "../Portfolio";
import { ButtonClicked } from "../Portfolio";

export const FormData = createContext({});
export default function LoginForm() {
  const [data, setData] = useState({
    name: "",
    link: "",
    desc: "",
  });

  const [addbtnClicked, setAddBtnClicked] = useState(false);

  const handleChange = (e) => {
    console.log(e.target.name, "<-name");
    console.log(data, "data");
    if (e.target.value) {
      setData({
        ...data,
        [e.target.name]: e.target.value,
      });
      console.log(data, "26666");
    }
  };
  const handleSubmit = (event) => {
    console.log(data, "dataaa");
    setAddBtnClicked(true);
    event.preventDefault();
  };

  const renderForm = (
    <>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label>Project Name </label>
            <input
              type="text"
              name="name"
              placeholder="Enter Project Name"
              required
              onChange={handleChange}
            />
          </div>
          <div className="input-container">
            <label>Project Link </label>
            <input
              type="text"
              name="link"
              placeholder="Enter URL"
              required
              onChange={handleChange}
            />
          </div>
          <div className="input-container">
            <label>Description </label>
            <textarea
              rows="10"
              cols="50"
              name="desc"
              placeholder="Enter Description"
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="button-container">
            <button>Add</button>
          </div>
        </form>
      </div>
    </>
  );
  console.log(
    sessionStorage.getItem("btnClicked"),
    "<-getting from sessionStorage"
  );
  return (
    <>
      <div className="app">
        <div className="login-form">
          <div className="title">Add Project</div>
          {renderForm}
        </div>
      </div>
      {sessionStorage.getItem("btnClicked") && (
        <FormData.Provider value={data}>
          <Projects />
        </FormData.Provider>
      )}
    </>
  );
}
