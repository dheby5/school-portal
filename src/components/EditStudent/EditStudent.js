import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./EditStudent.module.css";

function EditStudent() {
  const [editList, setEditList] = useState({
    firstName: "",
    lastName: "",
    email: "",
    school: "",
    matric: "",
    department: "",
    level: "",
  });

  let school = JSON.parse(localStorage.getItem("students"));

  let schoolDeprtment = JSON.parse(localStorage.getItem("department"));

  const navigate = useNavigate();

  const { studentId } = useParams();
  // console.log(studentId);

  let id = Number(studentId);

  const studentDetails = school.find((d) => d.id === id);
  // console.log(studentDetails);
  // console.log(studentDetails);
  // setEditList({
  //   firstname: studentDetails.firstname,
  //   lastName: studentDetails.lastName,
  //   email: studentDetails.email,
  //   school: studentDetails.school,
  //   matric: studentDetails.matric,
  //   department: studentDetails.department,
  //   level: studentDetails.level,
  // });
  // let editUser = [...editList];
  // setEditList(editList);
  const handleChange = (e) => {
    setEditList((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const studentIndex = school.findIndex((stu) => stu.id === studentId);
    school[studentIndex] = { ...editList, id: studentId };

    // console.log(studentIndex);
    // localStorage.setItem("students", JSON.stringify(school));
    navigate("/school-list");
  };

  // const update = editList.find((d) => d.id === studentId);
  // const addIndex = editList.findIndex((d) => d.id === studentId);
  // setEditList({
  //   firstname: studentDetails.firstname,
  //   lastName: update.lastName,
  //   email: update.email,
  //   school: update.school,
  //   matric: update.matric,
  //   department: update.department,
  //   level: update.level,
  // });
  // console.log(update);
  // editUser.splice(addIndex, 1);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          required
          defaultValue={studentDetails.firstName}
          className={styles.type}
          type="text"
          name="firstname"
          // value={newTasks.name}
          onChange={handleChange}
          placeholder="FirstName"
        />
        <input
          required
          defaultValue={studentDetails.lastName}
          className={styles.type}
          type="text"
          name="lastName"
          // value={newTasks.name}
          onChange={handleChange}
          placeholder="LastName"
        />
        <input
          required
          defaultValue={studentDetails.email}
          className={styles.type}
          type="text"
          name="email"
          // value={newTasks.name}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          required
          defaultValue={studentDetails.school}
          className={styles.name}
          type="text"
          name="school"
          // value={newTasks.school}
          onChange={handleChange}
          placeholder="school"
        />
        <input
          required
          defaultValue={studentDetails.matric}
          className={styles.matric}
          type="text"
          name="matric"
          // value={newTasks.matric}
          onChange={handleChange}
          placeholder="matric"
        />
        <select
          className={styles.option}
          name="department"
          onChange={handleChange}
          defaultValue={studentDetails.department}
        >
          {schoolDeprtment.map((dept) => (
            <option value={dept.name} key={dept.id}>
              {dept.name}
            </option>
          ))}
        </select>
        <input
          required
          defaultValue={studentDetails.level}
          className={styles.level}
          type="number"
          name="level"
          // value={newTasks.level}
          onChange={handleChange}
          placeholder="level"
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default EditStudent;
