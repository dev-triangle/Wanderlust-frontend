import React from 'react'
import './PlaceCards.css'
function PlaceCards({ placename, country,placeimage }) {
  return (
    
    <div class="place__card">
      <img className='place__img' src={placeimage} alt=""/>
      <div class="place__info-card">
        <h1>{placename}</h1>
        <p className='place__p'>{country}</p>
      </div>
    </div>
    
    
    
    
    
    
  
  )
}

export default PlaceCards