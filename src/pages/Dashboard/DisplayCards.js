import React,{ useEffect, useState } from 'react'
import Aos from 'aos'
import axiosInstance from '../../utils/axios'
import baseUrl from '../../utils/Urls'
const DisplayCards = ({frame,currUserid}) => {
  const[bookings,setBookings]=useState([])
 useEffect(()=>{
  Aos.init({duration:1100})
  axiosInstance.get(`${baseUrl}/bookings/`).then((response)=>{
    console.log(response)
    setBookings(response.data)
  },(error)=>{
    console.log(error)
  })
 },[])
 if(frame==='places'){
  return( 
      bookings.map((booking)=>
          booking.user_foreign===parseInt(currUserid)?
            (<div data-aos="zoom-in" data-aos-delay="150" className="contactCard">
            <div className="contact_img">
          <img src={booking.place_image} alt="contactimg" />
          </div>
        <h2>{booking.place_name}</h2>
        <h3>{booking.date_to_book}</h3>
          </div>):null
          )
)    
 }else if(frame==='stays'){
  return(
    bookings.map((booking)=>
        booking.user_foreign===parseInt(currUserid)?
          (<div data-aos="zoom-in" data-aos-delay="150" className="contactCard">
          <div className="contact_img">
        <img src={booking.stay_image} alt="contactimg" />
        </div>
      <h2>{booking.stay_name}</h2>
      <h3>{booking.date_to_book}</h3>
        </div>):null
        )
  )
 }
  return (
    bookings.map((booking)=>
        booking.user_foreign===parseInt(currUserid)?
          (<div data-aos="zoom-in" data-aos-delay="150" className="contactCard">
          <div className="contact_img">
        <img src={booking.travel_image} alt="contactimg" />
        </div>
      <h2>{booking.travel_name}</h2>
      <h3>{booking.date_to_book}</h3>
        </div>):null
        )
  )
}
export default DisplayCards