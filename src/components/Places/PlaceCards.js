import React,{ useEffect } from 'react'
import './PlaceCards.css'
import Aos from 'aos';
import { useNavigate } from 'react-router-dom'
function PlaceCards({ key,id,placename, country,placeimage }) {
  const navigate=useNavigate();
  const navigateTo=()=>{
    navigate(`places/${id}`)
  }
  useEffect(()=>{
    Aos.init({duartion:1100})
  },[])
  return (
    
    <div data-aos="fade-in" onClick={navigateTo} class="place__card"  data-aos-easing="ease-out-cubic" data-aos-duration="2000">
      <img className='place__img' src={placeimage} alt=""/>
      <div class="place__info-card">
        <h1>{placename}</h1>
        <p className='place__p'>{country}</p>
      </div>
    </div>
    
    
    
    
    
    
  
  )
}

export default PlaceCards