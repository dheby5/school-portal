import React from "react";
import { useParams } from "react-router-dom";
import styles from "./MyDept.module.css";

const MyDept = () => {
  // const [departmentList, setDepartmentList] = useState();
  const { deptId } = useParams();

  let dept = JSON.parse(localStorage.getItem("department"));
  let Courses = JSON.parse(localStorage.getItem("listOfCourses"));

  const departmentDetails = dept.find((d) => d.id === Number(deptId));
  localStorage.setItem("department", JSON.stringify(dept));
  const listOfCoursesUnderEachDept = (deptType) => {
    switch (deptType) {
      case "Geography":
        return [
          "geo 111",
          "geo 115",
          "geo 121",
          "geo 123",
          "geo 211",
          "geo 213",
          "geo 214",
          "geo 311",
          "geo 315",
          "geo 313",
          "geo 321",
          "geo 325",
        ];
      case "Physics":
        return [
          "phy 111",
          "phy 113",
          "phy 211",
          "phy 222",
          "phy 315",
          "phy 322",
          "phy 414",
          "phy 422",
          "phy 512",
          "phy 525",
        ];
      case "Economics":
        return [
          "econs 115",
          "econs 121",
          "econs 211",
          "econs 222",
          "econs 313",
          "econs 324",
          "econs 412",
          "econs 425",
          "econs 511",
          "econs 521",
        ];
      case "Mass Communication":
        return [
          "maco 115",
          "maco 123",
          "maco 211",
          "maco 225",
          "maco 312",
          "maco 323",
          "maco 412",
          "maco 424",
          "maco 511",
          "maco 521",
        ];
      case "Computer Science":
        return [
          "csc 115",
          "csc 123",
          "csc 211",
          "csc 225",
          "csc 312",
          "csc 323",
          "csc 412",
          "csc 424",
          "csc 511",
          "csc 521",
        ];
      case "Computer Engineering":
        return [
          "cng 115",
          "cng 123",
          "edu 211",
          "edu 111",
          "cng 211",
          "cng 225",
          "cng 312",
          "gse 415",
          "cng 323",
          "cng 412",
          "cng 424",
          "gse 111",
          "cng 511",
          "cng 521",
          "edu 515",
        ];
      case "Mathematics":
        return [
          "mat 115",
          "mat 123",
          "edu 211",
          "mat 211",
          "mat 225",
          "mat 312",
          "gse 415",
          "mat 323",
          "mat 412",
          "mat 424",
          "gse 111",
          "mat 511",
          "mat 521",
          "edu 515",
        ];
      default:
        console.log(`Sorry, we can't find your department`);
    }
  };

  return (
    <div>
      <h1>{departmentDetails.name}</h1>
      <h4>List of Courses to Offer</h4>
      <p className={styles.courses}>
        <select name="courses" multiple="multiple">
          {Courses.map((Cour) => (
            <option value={Cour.Course} key={Cour.id}>
              {Cour.Course}
            </option>
          ))}
        </select>
        <h3>list of courses to pick</h3>
        {listOfCoursesUnderEachDept(departmentDetails.name).map((dept) => (
          <p>{dept}</p>
        ))}
      </p>
    </div>
  );
};

export default MyDept;
