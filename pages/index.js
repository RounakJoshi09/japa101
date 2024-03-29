import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import NavigationBar from './../components/NavigationBar';
import Welcome from './../components/Welcome';
import { GoogleOAuthProvider, googleLogout } from '@react-oauth/google';

export default function Home() {

  return (
    <>
      <GoogleOAuthProvider
        clientId={`837452850127-s7r7jelgkjbn3plq27sg4ksu07ahs3fu.apps.googleusercontent.com`}
      >
        <>
          <Head>
            <title>Japa101</title>
            <meta name='description' content='Generated by create next app' />
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            <link rel='icon' href='/favicon.ico' />
          </Head>
          <main>
            
            <Welcome />
          </main>
        </>
      </GoogleOAuthProvider>
      ,
    </>
  );
}
