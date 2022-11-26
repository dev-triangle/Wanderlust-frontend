import React,{ useEffect } from 'react'
import Aos from 'aos'
const DisplayCards = ({frame}) => {
 useEffect(()=>{
  Aos.init({duration:1100})
 },[])
  return (
    <div data-aos="zoom-in" data-aos-delay="150" className="contactCard">
      <div className="contact_img">
        <img src="https://avatars.githubusercontent.com/u/110590339?s=200&v=4" alt="contactimg" />
      </div>
      <h2>name</h2>
      <h3>dest</h3>
      
    </div>
  )
}

export default DisplayCards