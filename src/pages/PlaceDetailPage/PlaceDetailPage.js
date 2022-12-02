import React ,{useEffect, useState} from 'react'
import Mainlayout from '../../components/Mainlayout/Mainlayout'
import CustomTitle from '../../utils/CustomTitle'
import './PlaceDetailPage.css'
import { useParams } from 'react-router-dom'
import BookingComponent from './BookingComponent'
import axios from 'axios'
import baseUrl from '../../utils/Urls'
const PlaceDetailPage = () => {
  const[placeName,setPlaceName]=useState('')
  const[placeImage,setPlaceImage]=useState()
  const[placeDesc,setPlaceDesc]=useState('')
  const[state,setState]=useState(0)
  const[stayId,setStayId]=useState(0)
  const[trains,setTrains]=useState([])
  const[travelId,setTravelId]=useState(0)
  const[things,setThings]=useState([])
  const[flights,setFlights]=useState([])
  const[hotel,setHotel]=useState([])
  useEffect(()=>{
    axios.get(`${baseUrl}/flights/`).then((response)=>{
      setFlights(response.data)
    },(error)=>{
      
    })
  },[])
  useEffect(()=>{
    axios.get(`${baseUrl}/trains/`).then((response)=>{
      console.log(response)
       setTrains(response.data)
    },(error)=>{

    })

    
  },[])
 
  useEffect(()=>{
    axios.get(`${baseUrl}/things-to-do/`).then((res)=>{
      console.log(res)
      setThings(res.data)
    },(error)=>{
      console.log(error)
    })
  },[])

  useEffect(()=>{
    axios.get(`${baseUrl}/hotels/`).then((response)=>{
        setHotel(response.data)
    })
  },[])
  const nextFrame=()=>{
    setState(state+1)
  }
  const prevFrame=()=>{
    setState(state-1)
  }
  let{id}=useParams();
  console.log(id);
  axios.get(`${baseUrl}/places/${id}/`).then((response)=>{
    setPlaceName(response.data.place_name)
    setPlaceImage(response.data.place_image)
    setPlaceDesc(response.data.place_desc)

  },(error)=>{
    console.log(error)
  })

  return (
    <Mainlayout>
        <CustomTitle title="Booking"/>
        <div className="place__detail_main">
        <img src={placeImage}className='place__detail_image' alt="" />
            <div className="place_details">
                <div>
                    <div className="place__header_name">{placeName}
                    </div>
                    <div className="place__text">
                    {placeDesc}
                    </div>
                    <div className="place__header_name">Things to do in {placeName}
                    </div>
                    <div className="place__text">
                      <ul>
                    {things.map((thing)=>
                  thing.place_foreign===parseInt(id)?
                    (<li>{thing.place_desc}</li>):null)
                    }
                    </ul>
                    
                    </div>
                    <div className="place__header_name">Flights to {placeName}
                    <ul>
                    {flights.map((flight)=>
          flight.to_place_foreign===parseInt(id)?
            (<li className='flight_details'>
            <p>Flight Name: {flight.flight_name}</p>
            <p>Flight Time: {flight.flight_time}</p>
            <p>Cost: {flight.cost}</p>
            <p>Next Date: {flight.next_date}</p>
          </li>):null
          )
         }
                      </ul>
                    </div>
                    <div className="place__header_name">Trains to {placeName}
                    <ul>
                    {trains.map((train)=>
          train.to_place_foreign===parseInt(id)?
            (<li className='flight_details'>
            <p>Train Name: {train.train_name}</p>
            <p>Train Time: {train.train_time}</p>
            <p>Cost: {train.cost}</p>
            <p>Next Date: {train.next_date}</p>
          </li>):null
          )
         }
                      </ul>
                    </div>

                    <div className="place__header_name">Hotels in {placeName}
                    <ul>
                      {hotel.map((hotels)=>
                        hotel.place_foreign===parseInt(id)?
                          (<li className='flight_details'>
                            <p>Hotel Name: {hotels.hotel_name}</p>
                            <p>Train Time: {hotels.near_point}</p>
                            <p>Cost: {hotels.famous_foods}</p>
                            
                          </li>
                        ):null
                      )}
                      </ul>
                    </div>
                    
                    </div>
                    
                
            </div>
            <div className="place__booking">
                    <h1 className='place__header_name'>Booking</h1>
                    <BookingComponent placeName={placeName} placeImage={placeImage} stayId={stayId} setStayId={setStayId} travelId={travelId} setTravelId={setTravelId} placeid={id} state={state} nextFrame={nextFrame} prevFrame={prevFrame}/>
            </div>
        </div>
    </Mainlayout>
  )
}

export default PlaceDetailPage