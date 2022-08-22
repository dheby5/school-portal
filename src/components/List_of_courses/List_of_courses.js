import React from "react";
import styles from "./ListOfCourses.module.css";

const List_of_courses = () => {
  let dept = JSON.parse(localStorage.getItem("Courses"));

  console.log(dept);
  return (
    <div className={styles.root}>
      <table className={styles.student}>
        <tr>
          <th>index</th>
          <th>Courses</th>
        </tr>
        {dept.map((sch, index) => {
          //   console.log(sch, index);
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{sch.Course}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default List_of_courses;
