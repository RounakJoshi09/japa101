import { Component, useState } from 'react';
import styles from '@/styles/NavigationBar.module.css';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { googleLogout } from '@react-oauth/google';
import Cookies from 'js-cookie';
import { setUser } from '@/redux/user/action';

function NavigationBar() {
  const router = useRouter();
  const { user } = useSelector((state)=>state.user);
  const dispatch = useDispatch();
  const logOut = () => {
    googleLogout();
    Cookies.remove('authToken');
    dispatch(setUser({}));
  };

  return (
    <>
      <div
        className={`navigationText flex flex-col lg:flex-row gap-5 lg:gap-20 justify-center text-center p-2  `}
      >
        <p
          onClick={() => router.push('/')}
          className={`navigationTextHome text-2xl lg:text-4xl font-bold cursor-pointer`}
        >
          Home
        </p>
        <p className={`navigationTextHome text-2xl lg:text-4xl font-bold cursor-pointer`}>About</p>
        <p
          onClick={() => router.push('/record')}
          className={`navigationTextHome text-2xl lg:text-4xl font-bold cursor-pointer`}
        >
          Record
        </p>
        {!user || Object.keys(user).length === 0 ? (
          <p
            onClick={() => logOut()}
            className={`navigationTextLogout text-2xl lg:text-4xl font-bold cursor-pointer`}
          >
            Logout
          </p> 
        ) : (
          <p onClick={() => logOut()} className={`navigationTextLogout text-2xl lg:text-4xl font-bold cursor-pointer`}>
            {user?.firstName}
          </p>
        )}
      </div>
    </>
  );
}

export default NavigationBar;
