import axios from 'axios'
import React,{useState,useEffect} from 'react'
import baseUrl from '../../utils/Urls'
import axiosInstance from '../../utils/axios'
const BookingComponent = ({placeName,placeImage,stayId, placeid,setStayId,travelId,setTravelId,state,prevFrame,nextFrame}) => {
  const[stays,setStays]=useState([])
  const[travels,setTravels]=useState([])
  const[currUserId,setCurrUserId]=useState(0)
  const[stayName,setStayName]=useState('')
  const[stayImage,setStayImage]=useState()
  const[travelName,setTravelName]=useState()
  const[travelImage,setTravelImage]=useState()
  useEffect(()=>{
    axiosInstance.get(`${baseUrl}/current-user/`).then((response)=>{
      setCurrUserId(response.data.id)
    },(error)=>{
    })
  },[])
  const finalSubmit=()=>{
    axiosInstance.post(`${baseUrl}/bookings/`,
    {
      date_to_book: "2022-11-11",
      place_name: placeName,
      place_image: placeImage,
      stay_name: stayName,
      stay_image: stayImage,
      travel_name: travelName,
      travel_image:travelImage,
      user_foreign: currUserId,
      place_foreign: placeid,
      stay_foreign: stayId,
      travel_foreign: travelId
  }).then((res)=>{
    console.log(res)
  },(error)=>{
    console.log(error)
  })
  }
useEffect(()=>{
  axios.get(`${baseUrl}/stays/`).then((response)=>{
    setStays(response.data)
  },(error)=>{
  })
},[])
useEffect(()=>{
  axios.get(`${baseUrl}/travels/`).then((response)=>{
    setTravels(response.data)
  },(error)=>{
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
            {(stay.id===stayId)?<div>Selected</div>:<button onClick={()=>{setStayId(stay.id)
            setStayImage(stay.stay_image)
            setStayName(stay.stay_name)
            }}>Select</button>}
            
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
            {(travel.id===travelId)?<div>Selected</div>:<button onClick={()=>{
            setTravelId(travel.id)
            setTravelImage(travel.vehicle_image)
            setTravelName(travel.vehicle_name)
            }}>Select</button>}
          </div>):null
          )
         }

        </div>

        <button onClick={prevFrame}>Prev</button>

        <button onClick={finalSubmit}>Book Now</button>
      </div>
    )
  }
}

export default BookingComponent