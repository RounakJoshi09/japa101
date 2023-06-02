import { Component } from "react";
import styles from "@/styles/Welcome.module.css";
import Image from 'next/image';
class Welcome extends Component {
  state = {};
  render() {
    return (
      <>
      <div className={styles.welcome}>
        <h1 className = {`text-3xl lg:text-6xl font-bold ${styles.heading}`}>Japa101</h1>
      </div>
      <div className={` ${styles.topLine} mt-3 mb-3 bg-red`}  />
      <div className={`${styles.navigationText} flex flex-col lg:flex-row gap-5 lg:gap-5 justify-center text-center p-2  `}>
        <p className="text-2xl lg:text-4xl font-bold" >
          Home
        </p>
        <p className="text-2xl lg:text-4xl font-bold" >
          About
        </p>
      </div>
      <div  className={`${styles.glassBackground}`}>
      <Image
      src="/beads.jpg"
      height={250}
      width={250}
      className={`rounded-full overflow-hidden float-right m-5 `}
      alt="japa beads"
      />
      </div>
      </>
    );
  }
}

export default Welcome;
