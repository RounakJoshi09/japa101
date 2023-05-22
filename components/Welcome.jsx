import { Component } from "react";
import styles from "@/styles/Home.module.css";
class Welcome extends Component {
  state = {};
  render() {
    return (
      <div className={styles.welcome}>
        <h1>Welcome to Japa101</h1>
      </div>
    );
  }
}

export default Welcome;
