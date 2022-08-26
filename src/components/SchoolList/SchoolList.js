import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./SchoolList.module.css";

function StudentsList() {
  let students = JSON.parse(localStorage.getItem("students"));
  let finalYearStudent = JSON.parse(localStorage.getItem("Alumnina"));

  const { studentsId } = useParams();
  // console.log(studentsId);
  // console.log(id);

  const handleNavigate = (id) => {
    let studentsInput = students.find((d) => d.id === id);
    console.log(studentsInput);
  };
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
  //  const handleNavigateStudent = () => {
  //   let studentIndex = students.findIndex(
  //     (sch) => sch.id === currentUser.id
  //   );

  //   students[studentIndex] = {
  //     ...admin,
  //     CoursesToOffer: selected,
  //   };

  return (
    <div className={styles.root}>
      <div className={styles.promotStudent}>
        <div className={styles.promingStudents}>
          <button onClick={handlePromotoStudent} className={styles.btu}>
            Promote Student
          </button>

          {/* <div className={styles.editPromoStudent}>
            <h2 className={styles.edit}>Edit Student</h2>
          </div> */}
        </div>
        <Link to="/create-student">
          <button type="submit" className={styles.button}>
            <span>Create Students</span>
          </button>
        </Link>
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
            <Link
              to={`/Student-data/${stu.id}`}
              className={styles.studentProfile}
            >
              <td onClick={() => handleNavigate(stu.id)}>{stu.firstName}</td>
            </Link>
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
      {/* <h1>{studentsIn.firstName}</h1> */}
    </div>
  );
}

export default StudentsList;
