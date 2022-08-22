import React, { useState } from "react";

function Courses() {
  const [listOfCourse, setlistOfCourse] = useState({
    Course: "",
  });

  const handleChange = (e) => {
    setlistOfCourse((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // let listOfStudents = JSON.parse(localStorage.getItem("students"));
    let myCourses = localStorage.getItem("listOfCourses");
    let mySchoolCourses = JSON.parse(myCourses) || [];
    let exitedCourses = mySchoolCourses.find(
      (cours) => cours.Course === listOfCourse.Course
    );
    if (exitedCourses) {
      console.log();
      return;
    }
    const data = { ...listOfCourse };
    mySchoolCourses.push(data);
    // localStorage.setItem("students", JSON.stringify(groupOfAdmittedStudent));

    localStorage.setItem("listOfCourses", JSON.stringify(mySchoolCourses));
    console.log(mySchoolCourses);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          // required
          type="text"
          name="Course"
          value={listOfCourse.Course}
          onChange={handleChange}
          placeholder="Courses Offered"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Courses;
