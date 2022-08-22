import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./DepartmentList.module.css";

function DepartmentList() {
  let dept = JSON.parse(localStorage.getItem("department"));
  const [department, setDepartment] = useState(dept);
  const onDelete = (index) => {
    let otherSchool = dept.filter((sch, i) => i !== index);
    localStorage.setItem("department", JSON.stringify(otherSchool));
    setDepartment(otherSchool);
    console.log(otherSchool);
  };

  return (
    <div className={styles.root}>
      <Link to="/department">
        <button type="submit" className={styles.button}>
          <span>Create Department</span>
        </button>
      </Link>
      <table className={styles.student}>
        <tr>
          <th>index</th>
          <th>Name</th>
          <th>Delete Department</th>
        </tr>
        {dept.map((sch, index) => {
          console.log(sch, index);
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <Link to={`/my-dept/${sch.id}`} className={styles.link}>
                <td>{sch.name}</td>
              </Link>
              <td onClick={() => onDelete(index)}>
                <button type="submit">Delete</button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default DepartmentList;
