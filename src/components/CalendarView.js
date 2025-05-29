import React from 'react'
import { RiArrowLeftFill } from "react-icons/ri";
import { RiArrowRightFill } from "react-icons/ri";
import '../App.css';
import teeth from '../assets/Teeth.png';
import arm from '../assets/arm.png';
import avatar from '../assets/userProfile.png'

const CalendarView = () => {
    const days = [
    { day: "Mon", date: 25, times: ["10:00","11:00","12:00"] },
    { day: "Tues", date: 26, times: ["08:00", "09:00","10:00"], active: true,selectedTime: "09:00" },
    { day: "Wed", date: 27, times: ["12:00", "—","13:00"] },
    { day: "Thurs", date: 28, times: ["10:00", "11:00","—"],selectedTime: "11:00" },
    { day: "Fri", date: 29, times: ["—","14:00", "16:00"] },
    { day: "Sat", date: 30, times: ["12:00","14:00","15:00"],selectedTime: "12:00" },
    { day: "Sun", date: 31, times: ["09:00","10:00", "11:00"], faded: true,selectedTime: "09:00" },
    ];

  return (
    <div className='calendar-view'>
        
        <div className='header-right'>
          <img src={avatar} alt="User" className="avatar" />
          <button className="add-btn">+</button>
        </div>
        <div className='calendar-header'>
            <div className='calendar-header-text'>October 2021</div>
            <div className='arrows'>
                <RiArrowLeftFill className='calendar-header-arrow' />
                <RiArrowRightFill className='calendar-header-arrow' />
            </div>
        </div>

        <div className="calendar-grid">
            {days.map((day, i) => (
              <div key={i} className={`calendar-cell ${day.active ? "active" : ""} ${day.faded ? "faded" : ""}`}>
                <div className="day-label">{day.day}</div>
                <div className="day-date">{day.date}</div>
                <div className="times">
                  {day.times.map((time, j) => (
                    <span key={j} className={`time-pill ${ day.selectedTime === time ? "selected-time" : "" }`}>
                   {time}
                   </span>
                  ))}
                </div>
              </div>
            ))}
        </div>

        <div className="appointments-row">
          <div className="appointment-card dentist">
            <div className='dentist-header'>
                <p>Dentist</p>
                <img src={teeth} alt="teeth" className='teeth-img' />
            </div>
            <p>09:00–11:00</p>
            <span>Dr. Cameron Williamson</span>
          </div>
          <div className="appointment-card physio">
            <div className='physio-header'>
                <p>Physiotherapy Appointment</p>
                <img src={arm} alt="arm" className='arm-img' />
            </div>
            <p>11:00–12:00</p>
            <span>Dr. Kevin Djones</span>
          </div>
        </div>
    </div>
  )
}

export default CalendarView
