import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./SchoolList.module.css";

function StudentsList() {
  let students = JSON.parse(localStorage.getItem("students"));
  let finalYearStudent = JSON.parse(localStorage.getItem("Alumnina"));

  const [studentsInfo, setStudentsInfo] = useState(students);
  const onDelete = (matric) => {
    let otherSchools = students.filter((stu, i) => i !== matric);
    setStudentsInfo(otherSchools);
    localStorage.setItem("students", JSON.stringify(otherSchools));
  };
  const graduate = students.filter((studs) => parseInt(studs.level));

  const alumni = students.filter((x) => x.level > 400);
  localStorage.setItem("Alumnina", JSON.stringify(alumni));
  // console.log(alumni);

  const handlePromotoStudent = () => {
    const newUsers = students.map((user) => {
      if (parseInt(user.level) < 500) {
        return {
          ...user,
          level: parseInt(user.level) + 100,
        };
      }
      return user;
    });
    setStudentsInfo(newUsers);
    localStorage.setItem("students", JSON.stringify(newUsers));
  };

  return (
    <div className={styles.root}>
      <div className={styles.promotStudent}>
        <div>
          <div className={styles.editPromoStudent}>
            <h2 className={styles.edit}>Edit Student</h2>
          </div>
          <button onClick={handlePromotoStudent}>Promote Student</button>
        </div>
      </div>
      <table className={styles.student}>
        <tr>
          <th>Index</th>
          <th>FirstName</th>
          <th>LastName</th>
          <th>Email</th>
          <th>school</th>
          <th>Matric</th>
          <th>Department</th>
          <th>Level</th>
          <th>Courses</th>
          <th>Remove School</th>
          <th>Edit School</th>
          {/* <th>Courses</th> */}
        </tr>
        {studentsInfo.map((stu, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{stu.firstName}</td>
            <td>{stu.lastName}</td>
            <td>{stu.email}</td>
            <td>{stu.school}</td>
            <td>{stu.matric}</td>
            <td>{stu.department}</td>
            <td>{stu.level}</td>
            <td>{stu.Course}</td>
            <td className={styles.delete}>
              <button
                onClick={() => onDelete(index)}
                type="submit"
                className={styles.delete}
              >
                Delete
              </button>
            </td>
            <td>
              <Link to={`/edit-student/${stu.id}`}>
                <button type="submit" className={styles.Edit}>
                  Edit
                </button>
              </Link>
            </td>
          </tr>
        ))}
      </table>
      <br />
      <br />
    </div>
  );
}

export default StudentsList;
