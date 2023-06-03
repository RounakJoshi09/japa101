/* eslint-disable react/no-unescaped-entities */
import { Component, useRef, useEffect, useRouter } from 'react';
import styles from '@/styles/Welcome.module.css';
import Image from 'next/image';
import { gsap } from 'gsap';

const Welcome = () => {
  const welcomeTextRef = useRef(null);

  const handleClick = () => {
    // router.push('/about');
    console.log('Clicked');
  };
  useEffect(() => {
    gsap.fromTo(
      welcomeTextRef.current,
      {
        opacity: 0,
        x: 50,
      },
      { opacity: 1, x: 0, duration: 1, ease: 'power2.out' }
    );
  }, [welcomeTextRef]);

  return (
    <>
      <div className={styles.welcome}>
        <h1 className={`text-3xl lg:text-6xl font-bold ${styles.heading}`}>Japa101</h1>
      </div>
      <div className={` ${styles.topLine} mt-3 mb-3 bg-red`} />
      <div
        className={`${styles.navigationText} flex flex-col lg:flex-row gap-5 lg:gap-20 justify-center text-center p-2  `}
      >
        <p className='text-2xl lg:text-4xl font-bold cursor-pointer'>Home</p>
        <p className='text-2xl lg:text-4xl font-bold cursor-pointer'>About</p>
      </div>
      <div className={`${styles.glassBackground}`}>
        <div className={`${styles.welcomeBox} d-flex flex-row justify-center items-center`}>
          <Image
            src='/beads.jpg'
            height={250}
            width={250}
            className={`rounded-full overflow-hidden  ml-10 sm:h-15 sm:w-15 md:h-30 md:w-30 lg:h-40 lg:w-40 xl:h-60 xl:w-60`}
            alt='japa beads'
          />
          <div
            ref={welcomeTextRef}
            className={`ml-10 mr-10 xs:text-4xl md:text-4xl lg:text-6xl xl:text-8xl font-bold`}
          >
            <p className={`font-size-2xl font-bold text-red`}>Welcome to</p>
            <p className={`font-size-2xl font-bold text-red`}>Japa101</p>
          </div>
        </div>
        <button className={`${styles.getStartedButton}`}>Let's Get Started</button>
      </div>
    </>
  );
};

export default Welcome;
