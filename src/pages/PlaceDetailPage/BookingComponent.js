import axios from 'axios'
import React,{useState,useEffect} from 'react'
import baseUrl from '../../utils/Urls'
const BookingComponent = ({placeid,state,prevFrame,nextFrame}) => {
  const[stays,setStays]=useState([])
  const[travels,setTravels]=useState([])
useEffect(()=>{
  axios.get(`${baseUrl}/stays/`).then((response)=>{
    console.log(response)
    setStays(response.data)
  },(error)=>{
    console.log(error)
  })
},[])
useEffect(()=>{
  axios.get(`${baseUrl}/travels/`).then((response)=>{
    setTravels(response.data)
  },(error)=>{
    console.log(error)
  })
},[])
 
  if(state===0){
    return(
      <div className='booking__stays_main'>
        <h1 className='booking_srvice__header'>Stays</h1>
        <div className="stays__book_list">
         {stays.map((stay)=>
          stay.place_foreign===parseInt(placeid)?
            (<div className="stay__book_card">
            <img className="booking_service__image" src={stay.stay_image}alt="" />
            <p className="stay__book_name">{stay.stay_name}</p>
            <button>Click Me</button>
          </div>):null
          )
         }
        </div>

          <button onClick={nextFrame}>Next</button>
      </div>
    )
  }
  else if(state===1){
    return(
      <div className='booked__travels_main'>
        <h1 className='booking_srvice__header'>Travels</h1>
        <div className="stays__book_list">
        {travels.map((travel)=>
          travel.place_foreign===parseInt(placeid)?
            (<div className="stay__book_card">
            <img className="booking_service__image" src={travel.place_image}alt="" />
            <p className="stay__book_name">{travel.vehicle_name}</p>
            <button>Click Me</button>
          </div>):null
          )
         }

        </div>

        <button onClick={prevFrame}>Prev</button>
        <button>Book Now</button>
      </div>
    )
  }
}

export default BookingComponent