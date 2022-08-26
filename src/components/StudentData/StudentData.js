import { useState } from "react";
import {
  FaCodepen,
  FaSchool,
  FaSortNumericDown,
  FaUser,
  FaVoicemail,
} from "react-icons/fa";
import { useParams } from "react-router-dom";
import styles from "./StudentData.module.css";

const StudentData = () => {
  let school = JSON.parse(localStorage.getItem("students"));
  let Courses = JSON.parse(localStorage.getItem("listOfCourses"));
  const [selected, setSelected] = useState([]);

  const { profileId } = useParams();
  let id = Number(profileId);
  const studentDetails = school.find((d) => d.id === id);
  school[studentDetails] = {
    ...studentDetails,
    CoursesToOffer: selected,
  };
  return (
    <div className={styles.auto}>
      <div className={styles.avater}>
        <h2>
          {studentDetails.firstName.charAt(0)}
          {studentDetails.lastName.charAt(0)}
        </h2>
      </div>
      <div className={styles.profile}>
        <h2 className={styles.color}>
          <FaUser className={styles.myIcon} />
          {studentDetails.firstName}
        </h2>
        <h2 className={styles.color}>
          <FaUser className={styles.myIcon} />

          {studentDetails.lastName}
        </h2>
        <h2 className={styles.color}>
          <FaVoicemail className={styles.myIcon} />
          {studentDetails.email}
        </h2>
        <h2 className={styles.color}>
          <FaSchool className={styles.myIcon} />
          {studentDetails.school}
        </h2>
        <h2 className={styles.color}>
          <FaSortNumericDown className={styles.myIcon} />
          {studentDetails.matric}
        </h2>
        <h2 className={styles.color}>
          <FaCodepen className={styles.myIcon} />
          {studentDetails.department}
        </h2>
        <h2 className={styles.color}>
          <FaSortNumericDown className={styles.myIcon} />
          {studentDetails.level}
        </h2>
      </div>
      <h2 className={styles.color}>Register Courses</h2>
      {studentDetails.CoursesToOffer.map((course) => (
        <h3 className={styles.colors}>{course.course}</h3>
      ))}
    </div>
  );
};

export default StudentData;
