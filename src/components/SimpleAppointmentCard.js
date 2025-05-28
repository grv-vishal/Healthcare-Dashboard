import React from 'react'
import '../App.css'

const SimpleAppointmentCard = (props) => {
  return (
    <div className='appointment-container'>
      <div className='appointment-header'>
        <p>{props.title}</p>
        <img src={props.img} alt={props.title} />
      </div>
      <div className='appointment-time'>{props.time}</div>
    </div>
  )
}

export default SimpleAppointmentCard
