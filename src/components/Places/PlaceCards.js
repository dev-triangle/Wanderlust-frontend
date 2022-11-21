import React from 'react'
import './PlaceCards.css'
import { useNavigate } from 'react-router-dom'
function PlaceCards({ key,id,placename, country,placeimage }) {
  const navigate=useNavigate();
  const navigateTo=()=>{
    navigate(`places/${id}`)
  }
  return (
    
    <div onClick={navigateTo} class="place__card" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
      <img className='place__img' src={placeimage} alt=""/>
      <div class="place__info-card">
        <h1>{placename}</h1>
        <p className='place__p'>{country}</p>
      </div>
    </div>
    
    
    
    
    
    
  
  )
}

export default PlaceCards