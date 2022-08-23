import React from "react";
import { Link, useNavigate } from "react-router-dom";
import MyImage from "../../assets/edusko.png";
import styles from "./NavBar.module.css";

function NavBar() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("currentUser");
    navigate("/");
  };

  return (
    <div className={styles.header}>
      <div className={styles.firstPage}>
        {currentUser !== null ? (
          <>
            <Link to="/">
              <img src={MyImage} alt="images" className={styles.images} />
            </Link>
            <div className={styles.nav_page}>
              <Link to="/school-list" className={styles.navs}>
                Students
              </Link>
              <Link to="/department-list" className={styles.department}>
                Department
              </Link>
              {/* <Link to="/school-list" className={styles.par} type="submit">
                list of student
              </Link> */}
              <Link to="/studentProfile" className={styles.profile}>
                Profile
              </Link>
              <button className={styles.buttons} onClick={logout}>
                Logout
              </button>
            </div>
          </>
        ) : (
          <>
            <Link to="/signUp">
              <button className={styles.button} type="submit">
                signup
              </button>
            </Link>
            <Link to="/login">
              <button className={styles.button} type="submit">
                Login
              </button>
            </Link>
          </>
        )}
      </div>

      {/* <div className={styles.nav}>
        <h1 className>School Management Student Portal</h1>
        <h3 className={styles.schoolManagement}>User Story</h3>
      </div> */}
    </div>
  );
}

export default NavBar;
