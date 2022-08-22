import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import AdmittedStudent from "./components/AdmittedStudent/AdmittedStudent";
import Courses from "./components/Courses/Courses";
import CreateSchool from "./components/CreateSchool/CreateSchool";
import CreateStudent from "./components/CreateStudent/CreateStudent";
import Department from "./components/Department/Department";
import DepartmentList from "./components/DepartmentList/DepartmentList";
import EditStudent from "./components/EditStudent/EditStudent";
import Home from "./components/Home/Home";
import List_of_courses from "./components/List_of_courses/List_of_courses";
import Login from "./components/Login/Login";
import MyDept from "./components/MyDept/MyDept";
import NavBar from "./components/NavBar/NavBar";
import SchoolList from "./components/SchoolList/SchoolList";
import SignUp from "./components/SignUp/SignUp";

function App() {
  return (
    <>
      <div>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/create-school" element={<CreateSchool />} />
            <Route path="/create-student" element={<CreateStudent />} />
            <Route path="/school-list" element={<SchoolList />} />
            <Route path="/department" element={<Department />} />
            <Route path="/department-list" element={<DepartmentList />} />
            <Route path="/edit-student/:studentId" element={<EditStudent />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/list-of-courses" element={<List_of_courses />} />
            <Route path="/my-dept/:deptId" element={<MyDept />} />
            <Route path="/studentProfile" element={<AdmittedStudent />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}
export default App;
