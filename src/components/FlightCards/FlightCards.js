import React from 'react'
import './FlightCards.css'
function FlightCards({flight}) {
  return (
  
    <div class="service-card">
    
    <h1 className='trainh'>{flight.flight_name}</h1>
    <div className='trainp_div'>
      {/* <p>Name:}</p> */}
    <p className='trainp'>
      Date: {flight.next_date} 
      </p>
      <p className='trainp'>
      Time: {flight.flight_time}
      </p>
      <p className='trainp'>
      Cost: {flight.cost}
    </p>
    </div>
  </div>
  )
}

export default FlightCards