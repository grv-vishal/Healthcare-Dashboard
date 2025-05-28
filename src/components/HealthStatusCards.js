import React from 'react'

const HealthStatusCards = (props) => {
  const fill="75%";
  return (
    <div className='health-card-container'>
      <div className='card-header'>
        <img src={props.img} alt="img" className='card-img' />
        <span className='card-header-text'>{props.title}</span>
      </div>
      <div className='health-card-date'>Date: {props.date}</div>

      <div className='status-bar' >
        <div className={`status-fill ${props.status}`} style={{ width: fill }}>.</div>
      </div>
    </div>
  )
}

export default HealthStatusCards
