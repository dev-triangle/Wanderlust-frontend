import React from 'react'
import '../FlightCards/FlightCards.css'
function TrainCards({train}) {
  return (
    
    <div class="service-card">
    
    <h1 className='trainh'>{train.train_name}</h1>
    <div className='trainp_div'>
    <p className='trainp'>
      Date: {train.next_date} 
      </p>
      <p className='trainp'>
      Time: {train.train_time}
      </p>
      <p className='trainp'>
      Cost: {train.cost}
    </p>
    </div>
  </div>
    
  )
}

export default TrainCards