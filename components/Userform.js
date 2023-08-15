import React, { useState } from "react";
import user from '../myimgs/register.webp'
import MySwal from 'sweetalert2'

// import Axios from "axios";


function Userform() {


  const [username,setusername]=useState('');
  const [useremail,setuseremail]=useState('');
  const [userphone,setuserphone]=useState('');
  const [useraddres,setuseraddres]=useState('');
  const [userdate,setuserdate]=useState('');
  const [usertime,setusertime]=useState('');
  const[errs,seterrs]=useState("");
  const namehandlechange=(e)=>{
    setusername(e.target.value);
  };
  const emailhandlechange=(e)=>{
    setuseremail(e.target.value);
  };
  const phonehandlechange=(e)=>{
    setuserphone(e.target.value);
  };
  const addresshandlechange=(e)=>{
    setuseraddres(e.target.value);
  };
  const datehandlechange=(e)=>{
    setuserdate(e.target.value);
  };
  const timehandlechange=(e)=>{
    setusertime(e.target.value);
  };
  const submits =(e)=>{
    e.preventDefault();
    if(username==="" ||useremail===""|| userphone===""||useraddres===""||userdate===""||usertime===""){
      
        return seterrs("Please Fill the All Field");
        
    }
  
        else{
  
            MySwal.fire(
              'Successfull!',
              'You Submit the Details',
              'success'
              
              
            )
            console.log(`${username}
            ${useremail}
            ${userphone}
            ${useraddres}
            ${userdate}
            ${usertime}`);
            setusername("");
            setuseremail("");
            setuserphone("");
            setuseraddres("");
            setuserdate("");
            setusertime("");
            
      }
      // Axios.post("http://localhost:8000/form",{username,useremail,userphone,useraddres,userdate,usertime})
      // .then((res)=>console.log(res))
      //  .catch(err => console.log(err))
      //  alert("success");
      
  }

  return (

    <>
      <section className="h-full dark:bg-slate-900 bg-slate-700">
        <div className="h-full">
          {/* <!-- Left column container with background--> */}
          <div
            className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
            <div
              className=" shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
              <img alt="Sampleimage"
                src={user}
                className="w-full"
              />

            </div>

            {/* <!-- Right column container --> */}
            <div className="mb-12 md:mb-0 w-full md:w-3/5 lg:w-5/12 xl:w-5/12">
              <div
                className="border border-sky-400 block max-w-md rounded-lg bg-slate-700  p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-slate-700">
                <form onSubmit={submits}>
                {errs && <span className="text-red-500 py-1 pb-1">{errs}</span>}
                  <div className="relative mb-6">
                    <label className="block mb-2 text-sm font-medium  dark:text-white text-white">Name</label>
                    <input type="text" name="username" className="px-4 py-2 block bg-gray-50 text-gray-900 sm:text-sm rounded-lg focus:ring-sky-400 focus:border-sky-400 border-2 w-full border-gray-300  focus:outline-none dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white"
                    
                    placeholder="entername" value={username} onChange={namehandlechange} autocomplete="off"/>
                  
                  </div>


                  <div className="relative mb-6">
                    <label  className="block mb-2 text-sm font-medium text-white dark:text-white">Email</label>
                    <input type="email" name="useremail" className="px-4 py-2 block bg-gray-50 text-gray-900 sm:text-sm rounded-lg focus:ring-sky-400 focus:border-sky-400 border-2 w-full border-gray-300  focus:outline-none dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white"
                     placeholder="Email" value={useremail}
                     
                     onChange={emailhandlechange}  autoComplete="off"/>
                    
                  </div>
                  <div className="relative mb-6" >
                    <label className="block mb-2 text-sm font-medium text-white dark:text-white">phone</label>
                    <input type="text" name="userphone" className="px-4 py-2 block bg-gray-50 text-gray-900 sm:text-sm rounded-lg focus:ring-sky-400 focus:border-sky-400 border-2 w-full border-gray-300  focus:outline-none dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white"
                     placeholder="Phone" value={userphone}
                     onChange={phonehandlechange}  autoComplete="off"/>
                  </div>
                  <div className="relative mb-6" >
                    <label className="block mb-2 text-sm font-medium text-white dark:text-white">Addres</label>
                    <input type="text" name="useraddres" className="px-4 py-2 block bg-gray-50 text-gray-900 sm:text-sm rounded-lg focus:ring-sky-400 focus:border-sky-400 border-2 w-full border-gray-300  focus:outline-none dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white"
                     placeholder="Address" value={useraddres}
                     onChange={addresshandlechange}  autoComplete="off" />
                  </div>
                   <div className=" mb-6 flex flex-col md:flex-row gap-2" >
                    <label className=" mb-2 text-sm font-medium text-white dark:text-white">Date</label>
                    <input type="date" name="userdate" className="px-4 py-2 block bg-gray-50 text-gray-900 sm:text-sm rounded-lg focus:ring-sky-400 focus:border-sky-400 border-2 w-full border-gray-300  focus:outline-none dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white" 
                     value={userdate} onChange={datehandlechange} />

                     <label className=" mb-2 text-sm font-medium text-white dark:text-white">Time</label>
                    <input type="time" name="usertime" className="px-4 py-2 block bg-gray-50 text-gray-900 sm:text-sm rounded-lg focus:ring-sky-400 focus:border-sky-400 border-2 w-full border-gray-300  focus:outline-none dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white"
                    value={usertime} onChange={timehandlechange} />
                  </div>





                  {/* <div
                    className="mb-6 flex min-h-[1.5rem] items-center justify-center pl-[1.5rem]">
                    <input
                      className="relative float-left -ml-[1.5rem] mr-[6px] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                      type="checkbox"
                      value=""
                      id="exampleCheck10" />
                    <label
                      className="inline-block pl-[0.15rem] hover:cursor-pointer"
                    htmlFor="exampleCheck10">
                      Send me a copy of this message
                    </label>
                  </div> */}


                  <button type='submit' className="w-full px-5 py-2.5 relative rounded group font-medium text-white  inline-block">
<span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-sky-400 to-blue-500"></span>
<span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
<span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
<span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-sky-600 from-blue-500"></span>
<span className="relative">Submits</span>
</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>


  );

}
export default Userform;