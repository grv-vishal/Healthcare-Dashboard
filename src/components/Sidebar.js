import React from 'react'
import { BiSolidDashboard } from "react-icons/bi";
import { FaHistory } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";
import { CiSquarePlus } from "react-icons/ci";
import { FcStatistics } from "react-icons/fc";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";
import { RiSettings5Fill } from "react-icons/ri";

const Sidebar = () => {
  return (
    <div className='sidebar'>
      
      <div>
        <div className='sidebar-general'>
          <h1 className='sidebar-heading'>General</h1>
          <div className='sidebar-item active'>
            <BiSolidDashboard />
            <span>Dashboard</span>
          </div>
          <div className='sidebar-item'>
            <FaHistory />
            <span>History</span>
          </div>
          <div className='sidebar-item'>
            <FaCalendarDays />
            <span>Calendar</span>
          </div>
          <div className='sidebar-item'>
            <CiSquarePlus />
            <span>Appointments</span>
          </div>
          <div className='sidebar-item'>
            <FcStatistics />
            <span>Statistics</span>
          </div>
        </div>
      
        <div className='sidebar-tools'>
          <h1 className='sidebar-heading'>Tools</h1>
          <div className='sidebar-item'>
            <IoChatbubbleEllipsesOutline />
            <span>Chat</span>
          </div>
          <div className='sidebar-item'>
            <IoIosCall />
            <span>Support</span>
          </div>
        </div>
      </div>
      

      <div className='sidebar-setting sidebar-item'>
        <RiSettings5Fill />
        <span>Settings</span>
      </div>
      
    </div>
  )
}

export default Sidebar
