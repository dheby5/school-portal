import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MyImage from "../assets/logo.png";
import "./App.css";
import Create from "./components/Create/Create";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";

function App() {
  // const stringifiedValue = localStorage.getItem("user");
  // const valueAsObjectAgain = JSON.parse(stringifiedValue);
  // console.log(valueAsObjectAgain);
  console.log(MyImage);
  return (
    <>
      <div className="nav">
        <h1>School Management Student Software</h1>
        <h2>User Story</h2>
      </div>
      {/* <img src={MyImage.src} alt="image" />. */}
      <Router>
        <Routes>
          <Route path="/Signup" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Create" element={<Create />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
