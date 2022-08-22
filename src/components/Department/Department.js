import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Department.module.css";

function Department() {
  const [error, setError] = useState("");
  const [values, setValues] = useState({
    name: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setError("");
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmitForm = (e) => {
    e.preventDefault();
    let schoolDepartment = localStorage.getItem("department");
    let mySchoolDepartment = JSON.parse(schoolDepartment) || [];
    let myExitedSchool = mySchoolDepartment.find(
      (department) => department.name === values.name
    );
    if (myExitedSchool) {
      setError(`${values["name"]} Already exit`);
      return;
    }
    const data = { ...values, id: Math.random() };
    mySchoolDepartment.push(data);
    navigate("/department-list");
    localStorage.setItem("department", JSON.stringify(mySchoolDepartment));
  };

  return (
    <div className={styles.root}>
      {error && <p>{error}</p>}
      <h3>Create Department</h3>
      <form onSubmit={handleSubmitForm}>
        <input
          required
          className={styles.inpute}
          type="text"
          name="name"
          onChange={handleChange}
          value={values.department}
          placeholder="Enter  Department"
        />
        <button className={styles.button} type="submit">
          submit
        </button>
      </form>
    </div>
  );
}

export default Department;
