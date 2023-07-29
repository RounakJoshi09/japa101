import { useState } from 'react';
/* eslint-disable react/no-unescaped-entities */
import { Component, useRef, useEffect, useRouter } from 'react';
import styles from '@/styles/Welcome.module.css';
import Image from 'next/image';
import { gsap } from 'gsap';
import { GoogleLogin } from '@react-oauth/google';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { url } from '../helpers/route';
import Cookies from 'js-cookie';
import { cookies } from 'next/dist/client/components/headers';
import api from '@/helpers/fetchWrapper';
import { fetchUser } from '@/services/userService';

const Welcome = () => {
  const welcomeTextRef = useRef(null);
  const [user, setUser] = useState({});

  const successHandler = (response) => {
    const user = axios.post(`${url.BASE_URL}${url.signup}`, response);
    user
      .then((response) => {
        const user = response.data.user;
        const token = response.data.token;
        Cookies.set('authToken', token);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const failureHandler = (err) => {
    console.log('Login Failed:', error);
    console.log(err);
  };
  const logOut = () => {
    googleLogout();
    setProfile(null);
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

  useEffect(() => {
    const authToken = Cookies.get('authToken');
    console.log(authToken);
    if (authToken) {
      const user = fetchUser();
      user
        .then((response) => {
          console.log(response, 'user');
          setUser(response);
        })
        .catch((err) => {
          console.log(err);
          setUser({});
        });
    }
    console.log(user);
  }, []);

  return (
    <>
      {/* <div className={styles.welcome}>
        <h1 className={`text-3xl lg:text-6xl font-bold ${styles.heading}`}>Japa101</h1>
      </div> */}
      <div className={`${styles.background}`}>
        {/* <div className={` ${styles.topLine} mt-3 mb-3 bg-red`} /> */}
        <div
          className={`${styles.navigationText} flex flex-col lg:flex-row gap-5 lg:gap-20 justify-center text-center p-2  `}
        >
          <p className='text-2xl lg:text-4xl font-bold cursor-pointer'>Home</p>
          <p className='text-2xl lg:text-4xl font-bold cursor-pointer'>About</p>
        </div>

        <div className={`${styles.welcomeBox} d-flex flex-row justify-center items-center`}>
          <Image
            src='/person_chanting.jpg'
            height={250}
            width={250}
            className={`rounded-full overflow-hidden  ml-10 sm:h-15 sm:w-15 md:h-30 md:w-30 lg:h-40 lg:w-40 xl:h-60 xl:w-60`}
            alt='japa beads'
          />
          <div
            ref={welcomeTextRef}
            className={`ml-10 mr-10 xs:text-4xl md:text-4xl lg:text-6xl xl:text-8xl font-bold`}
          >
            <p className={`font-size-2xl font-bold text-white`}>Welcome to</p>
            <p className={`font-size-2xl font-bold text-white`}> Japa101</p>
          </div>
        </div>
        {/* <div  onClick={login} className={`${styles.getStartedButton}`}>
          Let's Get Started
        </div> */}
        <div className={`${styles.googleLoginButton} d-flex justify-center items-center`}>
          <GoogleLogin onSuccess={successHandler} onError={failureHandler} />
        </div>
        {/* <GoogleLogin onSuccess={successHandler} onError={failureHandler} /> */}
        {/* <div className={`${styles.glassBackground}`}></div> */}
      </div>
    </>
  );
};

export default Welcome;
