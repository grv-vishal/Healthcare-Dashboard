import SimpleAppointmentCard from './SimpleAppointmentCard'
import { appointments } from '../data/appointments'
import '../App.css'

const UpcomingSchedule = () => {
  return (
    <div className="upcoming-container">
      <p>The Upcoming Schedule</p>
      {Object.entries(appointments).map(([day, appointments], i) => (
        <div key={i} className='schedule-day-container'>
          <h4 className="schedule-day">On {day}</h4>
          <div className="schedule-grid">
            {appointments.map((appt, j) => (
              <SimpleAppointmentCard
                key={j}
                title={appt.title}
                time={appt.time}
                img={appt.img}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default UpcomingSchedule
