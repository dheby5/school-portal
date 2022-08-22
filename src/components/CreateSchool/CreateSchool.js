import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./CreateSchool.module.css";

function CreateSchool() {
  const [value, setValue] = useState({
    school: "",
    motto: "",
    address: "",
    location: "",
  });

  const handleChange = (e) => {
    setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.root}>
      <h3>Create a School Platform</h3>
      <form className={styles.form} onSubmit={handSubmit}>
        <input
          required
          className={styles.input}
          type="text"
          name="school"
          value={value.email}
          onChange={handleChange}
          placeholder="school"
        />
        <input
          required
          className={styles.input}
          type="text"
          name="motto"
          value={value.password}
          onChange={handleChange}
          placeholder="motto"
        />
        <input
          required
          className={styles.input}
          type="text"
          name="address"
          value={value.password}
          onChange={handleChange}
          placeholder="address"
        />
        <input
          required
          className={styles.input}
          type="text"
          name="location"
          value={value.password}
          onChange={handleChange}
          placeholder="location"
        />

        <button className={styles.button} type="submit">
          Login
        </button>
      </form>
      <Link to="/create-student" className={styles.create}>
        Create School
      </Link>
    </div>
  );
}

export default CreateSchool;
