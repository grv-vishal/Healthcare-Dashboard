import '../App.css'
import AnatomySection from './AnatomySection'
import HealthStatusCards from './HealthStatusCards'
import { IoIosArrowDown } from "react-icons/io";
import { healthData } from '../data/healthData'
import { FaArrowRight } from "react-icons/fa6";

const DashboardOverview = () => {
  return (
    <div className='dashboard-overview'>

      <div className='dashboard-overview-header'>
        <h1>Dashboard</h1>
        <div className='dashboard-overview-header-time'>
          <span>This Week</span>
          <IoIosArrowDown  className='header-arrow'/>
        </div>
      </div>

      <div className='dashboard-content'>
        <AnatomySection className='dashboard-anatomy'/>
        <div className='health-status-cards'>
          {healthData.map((data, index) => (
            <HealthStatusCards 
              key={index}
              img={data.img} 
              title={data.title} 
              date={data.date} 
              status={data.status} 
            />
          ))}
          <div className='card-details'>
            <p>Details</p>
            <FaArrowRight />
          </div>
          
        </div>
      </div>
      
    </div>
  )
}

export default DashboardOverview
