import '@/styles/globals.css';
import store from '@/redux/store';
import { Provider } from 'react-redux';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {
  const router  = useRouter();
  return (
    <Provider store={store}>
      <div
        className={`navigationText flex flex-col lg:flex-row gap-5 lg:gap-20 justify-center text-center p-2  `}
      >
        <p onClick={() => router.push('/')} className={`navigationTextHome text-2xl lg:text-4xl font-bold cursor-pointer`}>
          Home
        </p>
        <p className={`navigationTextHome text-2xl lg:text-4xl font-bold cursor-pointer`}>
          About
        </p>
        <p
          onClick={() => router.push('/record')}
          className={`navigationTextHome text-2xl lg:text-4xl font-bold cursor-pointer`}
        >
          Record
        </p>
        <p
          onClick={() => logOut()}
          className={`navigationTextLogout text-2xl lg:text-4xl font-bold cursor-pointer`}
        >
          Logout
        </p>
      </div>
      <Component {...pageProps} />
    </Provider>
  );
}
