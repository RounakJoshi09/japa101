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
  const [user, setUser] = useState(null);

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
    if (authToken) {
       fetchUser(setUser);
    }    

  }, []);


  return (
    <>
      <div>
        <div
          className={`${styles.navigationText} flex flex-col lg:flex-row gap-5 lg:gap-20 justify-center text-center p-2  `}
        >
          <p className={`${styles.navigationTextHome} text-2xl lg:text-4xl font-bold cursor-pointer`}>Home</p>
          <p className={`${styles.navigationTextHome} text-2xl lg:text-4xl font-bold cursor-pointer`}>About</p>
          <p className={`${styles.navigationTextHome} text-2xl lg:text-4xl font-bold cursor-pointer`}>Record</p>
        </div>
      
        <div className='d-flex flex-column justify-center items-center'>
          <div className={`${styles.welcomeBox} d-flex flex-row justify-center items-center`}>
            <Image
              src='/person_chanting.jpg'
              height={500}
              width={500}
              className={`rounded-full overflow-hidden  ml-10 sm:h-40 sm:w-40 md:h-60 md:w-60 lg:h-60 lg:w-60 xl:h-60 xl:w-60`}
              alt='japa beads'
            />
            <div
              ref={welcomeTextRef}
              className={`${styles.welcomeText} ml-10 mr-10 mt-10 font-bold`}
            >
              <p className={`font-bold text-white pb-0`}>Welcome </p>
              <p className={`font-bold text-white pt-0 pb-0 pl-20`}>to</p>
              <p className={`font-bold text-white pt-0`}> Japa101</p>
            </div>
          </div>
          
          { (!user || Object.keys(user).length === 0) ?  (<div className={`${styles.googleLoginButton} d-flex justify-center items-center`}>
            <GoogleLogin onSuccess={successHandler} onError={failureHandler} />
          </div>) : null}

          <div className={`${styles.chatHareKrsna}`}>
            <p className='p-0 m-0'>Chant Hare Krsna, Be Happy</p>
          </div>

          <div className={`${styles.mahamantraContainer}`}>
              <p className={`${styles.mahamantraText} p-0 m-0`} >
                Hare Krsna Hare Krsna , Krsna Krsna Hare Hare , Hare Rama Hare Rama , Rama Rama Hare Hare
              </p>
          </div>

        </div>
      </div>
    </>
  );
};

export default Welcome;
