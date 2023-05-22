import { Component, useState } from "react";
import styles from "@/styles/NavigationBar.module.css";

function NavigationBar() {
  const [showSideNav, setShowSideNav] = useState(false);

  return (
    <>
      <div className={styles.navBar}>
        <div className={styles.logo}>
          <span>Japa101</span>
        </div>
        <ul className={styles.navIcon}>
          <li>Login</li>
          <li>About Me</li>
          <label
            onClick={() => setShowSideNav(!showSideNav)}
            className={styles.hamburger}
          >
            &#9776;
          </label>
        </ul>
      </div>
      <div
        className={`${styles.sideNav} ${
          showSideNav == true ? styles.sideNavShow : ""
        }`}
      >
        <li>Login</li>
        <li>About Me</li>
      </div>
    </>
  );
}

export default NavigationBar;
