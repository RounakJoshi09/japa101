import Head from 'next/head';
import RecordCountBox from './../components/RecordCountBox';
import styles from '@/styles/Record.module.css';
import NavigationBar from '@/components/NavigationBar';
import { useState } from 'react';
import JapaRecordModal from './../components/JapaRecordModal';
export default function Home() {
  const [modal,setModal] = useState(false);

  return (
    <>
        <NavigationBar />
        <div className='mt-10 flex items-center justify-center'>
        <button onClick={() => setModal(true)} className="align-center bg-white  text-blue-700 text-xl font-bold py-2 px-4 rounded opacity-95">
        Add Chanting Record
        </button>
        </div>
       <div className='flex flex-row gap-10 justify-center items-center mt-10'>
        <RecordCountBox rounds={16} durationText='Today' duration='day'/>
        <RecordCountBox rounds={16} durationText='Yesterday' duration='day'/>
        <RecordCountBox rounds={16*7} durationText='This Week' duration='week'/>
        <RecordCountBox rounds={16*23} durationText='This Month' duration='month'/>
        {/* <RecordCountBox rounds={16*120} durationText='This Year' duration='year'/> */}
       </div> 
        <div className={`${styles.mahamantraContainer}`}>
              <p className={`${styles.mahamantraText} p-0 m-0`} >
              Sixteen rounds is a vow. {'I must chant sixteen rounds.'} Out of the material energy, I think it is impossible. But spiritual energy, there is no question of impossible. It is all possible. Therefore we have to increase the spiritual energy. That is Krsna consciousness movement. :- Srila Prabhupad        </p>
        </div>    
        <JapaRecordModal isOpen={modal} setIsOpen={setModal} />
    </>
  );
}
