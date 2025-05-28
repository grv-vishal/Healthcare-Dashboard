import React from 'react';
import '../App.css';

const ActivityFeed = () => {
  const activityDays = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];

  return (
    <div className="activity-feed">
      <div className="activity-header">
        <h3>Activity</h3>
        <span className="activity-summary">3 appointments on this week</span>
      </div>

      <div className="activity-chart">
        
          <div className="activity-day" >
            <div className="bar-group">
              <div className="bar bar-1 bar-gray" ></div>
              <div className="bar bar-2 bar-blue" ></div>
              <div className='bar new-bar'>
                <div className="bar bar-3 bar-gray" ></div>
                <div className="bar bar-3 bar-gray" ></div>
              </div>
              <div className="bar bar-4 bar-gray" ></div>
            </div>

            <div className="bar-group">
              <div className='bar new-bar'>
                <div className="bar bar-5 bar-blue" ></div>
                <div className="bar bar-5 bar-purple" ></div>
              </div>  
              <div className="bar bar-2 bar-purple" ></div>
              <div className='bar new-bar'>
                <div className="bar bar-3 bar-gray" ></div>
                <div className="bar bar-3 bar-gray" ></div>
              </div>
              <div className="bar bar-4 bar-blue" ></div>
            </div>

            <div className="bar-group">
              <div className="bar bar-1 bar-gray" ></div>
              <div className="bar bar-2 bar-gray " ></div>
              <div className='bar new-bar'>
                <div className="bar bar-3 bar-blue" ></div>
                <div className="bar bar-3 bar-purple" ></div>
              </div>
              <div className="bar bar-4 bar-purple" ></div>
            </div>

            <div className="bar-group">
              <div className='bar new-bar'>
                <div className="bar bar-5 bar-gray" ></div>
                <div className="bar bar-5 bar-gray" ></div>
              </div>
              <div className="bar bar-2 bar-blue" ></div>
              <div className='bar new-bar'>
                <div className="bar bar-3 bar-blue" ></div>
                <div className="bar bar-3 bar-purple" ></div>
              </div>
              <div className="bar bar-4 bar-gray" ></div>
            </div>

            <div className="bar-group">
              <div className="bar bar-1 bar-gray" ></div>
              <div className="bar bar-2 bar-purple" ></div>
              <div className='bar new-bar'>
                <div className="bar bar-3 bar-gray" ></div>
                <div className="bar bar-3 bar-gray" ></div>
              </div>
              <div className="bar bar-4 bar-gray" ></div>
            </div>

            <div className="bar-group">
              <div className='bar new-bar'>
                <div className="bar bar-5 bar-blue" ></div>
                <div className="bar bar-5 bar-purple" ></div>
              </div> 
              <div className="bar bar-2 bar-blue" ></div>
              <div className='bar new-bar'>
                <div className="bar bar-3 bar-gray" ></div>
                <div className="bar bar-3 bar-gray" ></div>
              </div>
              <div className="bar bar-4 bar-purple" ></div>
            </div>

            <div className="bar-group">
              <div className="bar bar-1 bar-gray" ></div>
              <div className="bar bar-2 bar-gray" ></div>
              <div className='bar new-bar'>
                <div className="bar bar-3 bar-blue" ></div>
                <div className="bar bar-3 bar-purple" ></div>
              </div>
              <div className="bar bar-4 bar-purple" ></div>
            </div>

            <div className="bar-group">
              <div className='bar new-bar'>
                <div className="bar bar-5 bar-gray" ></div>
                <div className="bar bar-5 bar-gray" ></div>
              </div>
              <div className="bar bar-2 bar-blue" ></div>
              <div className='bar new-bar'>
                <div className="bar bar-3 bar-gray" ></div>
                <div className="bar bar-3 bar-gray" ></div>
              </div>
              <div className="bar bar-4 bar-purple" ></div>
            </div>
          </div>

          <div className='activity-day-label'>
            {activityDays.map((day, index) => (
                <div key={index} className="day-label">
                {day}
              </div>
            ))}
          </div>

      </div>
    </div>
  );
};

export default ActivityFeed;
