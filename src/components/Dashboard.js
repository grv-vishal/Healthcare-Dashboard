import React from 'react'
import DashboardOverview from './DashboardOverview'
import ActivityFeed from './ActivityFeed'
import CalendarView from './CalendarView'
import UpcomingSchedule from './UpcomingSchedule'

const Dashboard = () => {
  return (
    <div className='dashboard-container'>
      <div className='dashboard-left'>
        <DashboardOverview/>
        <ActivityFeed/>
      </div>
      <div className='dashboard-right'>
        <CalendarView/>
        <UpcomingSchedule/>
      </div>
      
    </div>
  )
}

export default Dashboard
