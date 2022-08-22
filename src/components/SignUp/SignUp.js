import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./SignUp.module.css";

function SignUp() {
  const [error, setError] = useState("");
  const [value, setValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const navigate = useNavigate();

  const handSubmitForm = (e) => {
    e.preventDefault();
    let studentDetails =
      JSON.parse(localStorage.getItem("students")) || null || [];

    const checkStudent = studentDetails.find(
      (stu) =>
        stu.firstName === value.firstName &&
        stu.lastName === value.lastName &&
        stu.password === value.password &&
        stu.email === value.email
    );
    const alumni = studentDetails.map((x) => x);
    localStorage.setItem("students", JSON.stringify(alumni));
    if (checkStudent) {
      setError("sorry you have account already");
      return;
    } else {
      const data = { ...value, id: Math.random() };
      studentDetails.push(data);
      localStorage.setItem("students", JSON.stringify(studentDetails));
      localStorage.setItem("currentUser", JSON.stringify(data));
      navigate("/");
    }
  };
  return (
    <div className={styles.root}>
      <h3>SignUp inside the School Platform</h3>
      <form onSubmit={handSubmitForm}>
        {error && <p>{error}</p>}
        <input
          required
          className={styles.inpute}
          type="text"
          name="firstName"
          value={value.firstName}
          onChange={handleChange}
          placeholder="First Name"
        />

        <input
          required
          className={styles.inpute}
          type="text"
          name="lastName"
          value={value.lastName}
          onChange={handleChange}
          placeholder="Last Name"
        />

        <input
          required
          className={styles.inpute}
          type="email"
          name="email"
          value={value.email}
          onChange={handleChange}
          placeholder="Email"
        />

        <input
          required
          className={styles.inpute}
          type="password"
          name="password"
          value={value.password}
          onChange={handleChange}
          placeholder="password"
        />

        <button className={styles.button} type="submit">
          SignUp
        </button>
      </form>
      <Link to="/login" className={styles.login}>
        Login
      </Link>
    </div>
  );
}

export default SignUp;
