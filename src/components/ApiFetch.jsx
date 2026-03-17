import React, { useState } from 'react'
import axios from 'axios'

const Apifetch = () => {

const [Data1, setData1] = useState([]);
const [Data2, setData2] = useState([]);
const [Data3, setData3] = useState([]);

    // method 1:
    const method1= async ()=>{
      try{
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json();
        setData1(data);
      } catch(e){
        console.error(e);
      }
    };


    //method 2:
    const method2 = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json();
        setData2(data);
      } catch (e) {
        console.error(e);
      }
    };


    //method 3:
    const method3 = async () => {
      try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users');
        setData3(res.data);
      } catch (e) {
        console.error(e);
      }
    };
  return (
   <>
   <section className='flex flex-wrap flex-col p-6 '>
<h1 className=' text-6xl text-center  font-bold'>Api fetch mathods</h1>

   <div className=' w-full h-1/2 border-dotted my-5  border-red-600 border-2'>
    <h1 className='text-center text-3xl font-semibold p-4  flex-col justify-center items-center rounded-md flex'> method 1: fetch,then,then, catch</h1>
   <div className='bg-black text-white p-3 rounded-md w-full h-96 overflow-auto'>
       {Data1.length === 0 ? (
         <p className='text-gray-400 text-center mt-4'>Click button to fetch data</p>
       ) : (
        Data1.map((user)=>(
         <div key={user.id} className='border-b border-gray-700 py-2'>
           <p className='font-bold'>{user.name}</p>
           <p className='text-sm text-gray-400'>{user.email}</p>
         </div>                               
        ))
       )}
   </div>
    <button className=' bg-black rounded-2xl px-4 py-3 w-36 focus:scale-95 text-white font-bold p-4 rotate-md m-3 flex-col justify-center items-center gap-y-4 mx-auto flex' onClick={method1}>Get Data</button>
   </div>

 

{/* method 2 */}
   <div className=' w-full h-1/2 border-dotted my-5  border-red-600 border-2' >
    <h1 className='text-3 text-center font-bold'> method 2: async await,fetch</h1>
    <div className='bg-black text-white p-3 rounded-md w-full h-96 overflow-auto'>
       {Data2.length === 0 ? (
         <p className='text-gray-400 text-center mt-4'>Click button to fetch data</p>
       ) : (
         Data2.map((user)=>(
           <div key={user.id} className='border-b border-gray-700 py-2'>
             <p className='font-bold'>{user.name}</p>
             <p className='text-sm text-gray-400'>{user.email}</p>
           </div>                               
         ))
       )}
    </div> 
    <button className=' bg-red-600 text-white w-36 px-4 py-2 font-semibold active:scale-95 rounded-md flex flex-col items-center justify-center' onClick={method2}> get data </button>
   </div>

   <div className=' w-full h-1/2 border-dotted my-5  border-red-600 border-2' >
    <h1 className='text-center text-3xl font-semibold p-4'>method 3: axios (async,await)</h1>
    <div className='bg-black text-white p-3 rounded-md w-full h-96 overflow-auto'>
       {Data3.length === 0 ? (
         <p className='text-gray-400 text-center mt-4'>Click button to fetch data</p>
       ) : (
         Data3.map((user)=>(
           <div key={user.id} className='border-b border-gray-700 py-2'>
             <p className='font-bold'>{user.name}</p>
             <p className='text-sm text-gray-400'>{user.email}</p>
           </div>                               
         ))
       )}
    </div>
    <button className=' bg-blue-600 text-white w-36 px-4 py-2 font-semibold active:scale-95 rounded-md flex flex-col items-center justify-center' onClick={method3}> get data </button>
   </div>

   </section>
   </>
  )
}

export default Apifetch
