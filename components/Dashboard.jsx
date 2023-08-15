import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {PiCodeSimpleFill,} from "react-icons/pi";
import {BiLogIn} from 'react-icons/bi'
import {FaCircleChevronRight} from 'react-icons/fa6';
import {FaSearch} from 'react-icons/fa';
import {SiFiles} from 'react-icons/si';
import {RiDashboardFill,RiInboxUnarchiveLine,RiAccountCircleLine} from"react-icons/ri";
import {TbTruckDelivery,TbSettings} from 'react-icons/tb';
import logouts from '../myimgs/logout.webp';
const Dashboard = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", icon:  <RiDashboardFill className="w-8 h-8"/> },
    { title: "Inbox", icon:  <RiInboxUnarchiveLine className="w-8 h-8"/>},
    { title: "Accounts", icon: <RiAccountCircleLine className="w-8 h-8"/>, gap: true },
    { title: "Order ", icon: <TbTruckDelivery className="w-8 h-8"/> },
    { title: "Search", icon: <FaSearch className="w-8 h-8"/> },
    { title: "Analytics", icon: <PiCodeSimpleFill className="w-8 h-8"/> },
    { title: "Files ", icon: <SiFiles className="w-8 h-8"/>, gap: true },
    { title: "LogOut", icon: <TbSettings className="w-8 h-8" />},
  ];
  const history=useNavigate();
  const [logout,setlogout]= useState(false);
      useEffect(()=>{
         if(!localStorage.getItem('auth'))history("/loginpage")
      },[logout]);
      const logouthandler = (e) =>{
          e.preventDefault();
          localStorage.removeItem("auth");
          setlogout(true)
      };
   
  return (
    <>
    <div className="flex dark:bg-slate-800 bg-gray-700">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        }  bg-slate-900 shadow-2xl drop-shadow-2xl h-screen p-5  pt-8 relative  duration-300 border-r border-slate-100 text-white font-semibold`}
      >
        <h1
          className={`absolute cursor-pointer -right-3 top-9 w-9 h-9 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        ><FaCircleChevronRight className="w-8 h-8 hover:text-sky-400" /></h1>
        <div className="flex gap-x-4 items-center">
          <h1
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          ><BiLogIn className="w-8 h-8"/></h1>
          <h1
            className={`text-white origin-left font-medium text-xl duration-100 cursor-pointer hover:text-sky-400 ${
              !open && "scale-0"
            }`} onClick={logouthandler}
          >
            LogOut User
          </h1>
          
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              {/* <img src={`./src/assets/${Menu.src}.png`} /> */}
              <h1 className="dark:text-sky-400 text-sky-500">{Menu.icon}</h1>
              <span className={`${!open && "hidden"} origin-left duration-200 text-lg`}>
                {Menu.title}
              </span>
            </li>
          ))}
      
        </ul>
      </div>
      <div className="h-screen flex-1 p-7">
        <h1 className="text-2xl font-semibold text-white text-center">Home Page</h1>
        <h1 className="text-2xl font-semibold text-white text-center">Please LogOut Here!</h1>
        <img src={logouts} alt="logouts" className="md:w-3/4 md:h-3/4 flex float-right"/>
      </div>
    </div>
    </>
  );
};
export default Dashboard;
