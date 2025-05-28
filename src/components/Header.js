import React from 'react'
import { IoNotificationsSharp } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import '../App.css'
import avatar from '../assets/userProfile.png'


const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">Health<span className="logo-right">care.</span></h1>

      <div className="header-center">
        <div className='search-bar'>
          <CiSearch className='search-icon' />
          <input type="text" className="search-input" placeholder="Search" />
        </div>
        <div className="icon">
          <IoNotificationsSharp className='icon-bell'/>
        </div>    
      </div>

      <div className='header-right'>
        <img src={avatar} alt="User" className="avatar" />
        <button className="add-btn">+</button>
      </div>
    </header>
  )
}

export default Header
