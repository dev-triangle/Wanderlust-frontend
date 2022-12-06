import React from 'react'
import './Teams.css'

const TeamCard = ({id, name, image}) => {
//     if(id%2===0){
//         return(
//             <div className="team_up">
//             <div class="card 1">
//   <div class="card_image"> <img src="https://i.redd.it/b3esnz5ra34y.jpg" /> </div>
//   <div class="card_title title-white">
//     <p>Card Title</p>
//   </div>
// </div>
//              </div>
//         )
//     }
  return (
    <div class="card 1">
    <div class="card_image"> <img src={image} alt="team_member"/> </div>
    <div class="card_title title-white">
      <p>{name}</p>
    </div>
  </div>
  )
}

export default TeamCard