import React from 'react'
import './Teams.css'

const TeamCard = ({id, name, image}) => {
    if(id%2===0){
        return(
            <div className="team_card team_up">
            <img src={image} className='team_person_image' alt="" />
            <p className='team_person_name'> {name} </p>     
             </div>
        )
    }
  return (
    <div  className="team_card">
            <img src={image} className='team_person_image' alt="" />
            <p className='team_person_name'> {name} </p>
    </div>
  )
}

export default TeamCard