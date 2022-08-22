import React, { useState } from "react";
import styles from "./AdmittedStudent.module.css";

const AdmittedStudent = () => {
  const [selectedCourses, setselectedCourses] = useState({ course: "" });

  const [selected, setSelected] = useState([]);

  let groupOfAdmittedStudent = JSON.parse(localStorage.getItem("students"));

  let currentUser = JSON.parse(localStorage.getItem("currentUser"));

  let Courses = JSON.parse(localStorage.getItem("listOfCourses"));

  const admin = groupOfAdmittedStudent.find((stu) => stu.id === currentUser.id);

  console.log(admin);
  const handleChange = (e) => {
    setselectedCourses((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSelect = (e) => {
    e.preventDefault();
    if (selectedCourses) {
      selected.push(selectedCourses);
      setSelected(selected);
    }
  };
  // const handleEdit = () => {
  //   let Courses = Cour.map((x) => x);
  // };
  const handleSubmit = () => {
    let studentIndex = groupOfAdmittedStudent.findIndex(
      (sch) => sch.id === currentUser.id
    );

    groupOfAdmittedStudent[studentIndex] = {
      ...admin,
      CoursesToOffer: selected,
    };

    localStorage.setItem("students", JSON.stringify(groupOfAdmittedStudent));
  };
  return (
    <div>
      <div className={styles.studentProfile}>
        <div className={styles.profile}>
          <h2 className={styles.myProfile}>
            <label className={styles.task}>Firstname:</label>
            {admin.firstName}
          </h2>
          <h2 className={styles.myProfile}>
            <label className={styles.task}>Lastname:</label>
            {admin.lastName}
          </h2>
          <h2 className={styles.myProfile}>
            <label className={styles.task}>School:</label>
            {admin.school}
          </h2>
          <h2 className={styles.myProfile}>
            <label className={styles.task}>Matric:</label>
            {admin.matric}
          </h2>
          <h2 className={styles.myProfile}>
            <label className={styles.task}>Department:</label>
            {admin.department}
          </h2>
          <h2 className={styles.myProfile}>
            <label className={styles.task}>Email:</label>
            {admin.email}
          </h2>
          <h2 className={styles.myProfile}>
            <label className={styles.task}>Level:</label>
            {admin.level}
          </h2>
        </div>
        <div>
          <h2 className={styles.task}>My Courses</h2>
          {admin.CoursesToOffer.map((course) => (
            <h3 className={styles.myProfile}>{course.course}</h3>
          ))}
        </div>
      </div>
      <div className={styles.option}>
        <p className={styles.par}>select you course to offer</p>
        <div className={styles.select}>
          <form onSubmit={handleSelect} defaultValue={"Select your course"}>
            <button type="submit">select</button>
            <select name="course" onChange={handleChange}>
              {Courses.map((Cour) => (
                <option value={Cour.Course} key={Cour.id}>
                  {Cour.Course}
                </option>
              ))}
            </select>
            <button onClick={handleSubmit}>Save</button>
          </form>
        </div>
      </div>
      {/* <button onClick={handleEdit} className={styles.edit} type="submit">
        Edit Your Courses
      </button> */}
    </div>
  );
};

export default AdmittedStudent;
