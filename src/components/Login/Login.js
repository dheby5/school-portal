import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

function Login() {
  const [value, setValue] = useState({
    password: "",
    email: "",
  });
  let currentUsers = JSON.parse(localStorage.getItem("students"));

  const naviagate = useNavigate();

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handSubmitForm = (e) => {
    e.preventDefault();

    let user = currentUsers.find(
      (details) =>
        details.email === value.email && details.password === value.password
    );

    if (!user) {
      setError("Invalid login credential");
    } else {
      localStorage.setItem("currentUser", JSON.stringify(user));
      naviagate("/");
    }
  };
  return (
    <div className={styles.root}>
      <h3>Login into the School Platform</h3>
      <p>{error}</p>
      <form className={styles.form} onSubmit={handSubmitForm}>
        <input
          className={styles.input}
          type="email"
          name="email"
          value={value.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          className={styles.input}
          type="password"
          name="password"
          value={value.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <button className={styles.button} type="submit">
          Login
        </button>
      </form>
      <Link to="/create-school" className={styles.createSchool}>
        CreateSchool
      </Link>
    </div>
  );
}

export default Login;
