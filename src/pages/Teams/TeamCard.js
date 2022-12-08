import React, { useEffect } from 'react'
import './Teams.css'
import Aos from 'aos'
const TeamCard = ({id, name, image}) => {
  useEffect(()=>{
    Aos.init({duration:1100})
  },[])
  return (
    <div class="card 1" data-aos="zoom-in">
    <div class="card_image"> <img src={image} alt="team_member"/> </div>
    <div class="card_title title-white">
      <p>{name}</p>
    </div>
  </div>
  )
}

export default TeamCard