import React from 'react'
import './HotelCards.css'
function HotelCards({hotel}) {
  return (
    <div className='hotelcards'>
    <a href="/" className="htlcard">
  <div className="htlcard__img-container">
    <img className="htlcard__img" src={hotel.hotel_image} alt="unsplash_random_image" />
   
  </div>
  <div className="htlcard__body">
    <h3 className="htlcard__title">{hotel.hotel_name}</h3>
    <div className='htlp'>
    <p className="htlcard__date">Near {hotel.near_point}  
    </p>
    <p className="htlcard__date">Famous food served here include {hotel.famous_foods} etc
    </p>
    </div>
    
    <p className="htlcard__cta">Read more</p>
  </div>
</a>
    </div>
  )
}

export default HotelCards