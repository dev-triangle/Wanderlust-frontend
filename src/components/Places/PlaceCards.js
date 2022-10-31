import React from 'react'
import './PlaceCards.css'
function PlaceCards({ placename, country }) {
  return (
    <div class="place__container">
    <div class="place__card">
      <img className='place__img' src="https://images.unsplash.com/photo-1577805947697-89e18249d767?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjY1MjQ1NTk&ixlib=rb-4.0.3&q=80" alt=""/>
      <div class="place__info-card">
        <h1>Deliche</h1>
        <p className='place__p'>Coffee, smothies & Sundaes</p>
      </div>
    </div>
    </div>
    
    
    
    
    
  
  )
}

export default PlaceCards