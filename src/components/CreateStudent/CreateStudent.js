import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CreateStudent.module.css";

function CreateStudent() {
  const [error, setError] = useState("");
  const [studentDetails, setStudentDetails] = useState({
    // name: "",
    school: "",
    matric: "",
    department: "",
    level: "",
  });
  // console.log(value);
  let listOfDepartment = JSON.parse(localStorage.getItem("department"));

  let listOfStudents = JSON.parse(localStorage.getItem("students"));

  let listOfCurrentUsers = JSON.parse(localStorage.getItem("currentUser"));

  const navigate = useNavigate();

  const handleChange = (e) => {
    setStudentDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const id = listOfCurrentUsers.id;

  let checkSchool = listOfStudents.find((sch) => sch.id === id);

  const handSubmitForm = (e) => {
    e.preventDefault();

    let studentIndex = listOfStudents.findIndex((sch) => sch.id === id);

    listOfStudents[studentIndex] = { ...studentDetails, ...checkSchool };

    localStorage.setItem("students", JSON.stringify(listOfStudents));

    navigate("/school-list");
  };

  return (
    <div className={styles.root}>
      <h2>Student Portal</h2>
      <form onSubmit={handSubmitForm}>
        {error && <p>{error}</p>}

        <input
          required
          className={styles.inpute}
          type="text"
          name="school"
          value={studentDetails.school}
          onChange={handleChange}
          placeholder="Name of Your School"
        />
        <input
          required
          className={styles.inpute}
          type="text"
          name="matric"
          value={studentDetails.matric}
          onChange={handleChange}
          placeholder="Matric"
        />
        <select
          className={styles.option}
          name="department"
          onChange={handleChange}
        >
          {listOfDepartment.map((department) => (
            <option studentDetails={department.name} key={department.id}>
              {department.name}
            </option>
          ))}
        </select>
        <input
          required
          className={styles.inpute}
          type="number"
          name="level"
          value={studentDetails.level}
          onChange={handleChange}
          placeholder="Level"
        />
        <button className={styles.buttons} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreateStudent;
