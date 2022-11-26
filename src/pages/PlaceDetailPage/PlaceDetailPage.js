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
  const[travelId,setTravelId]=useState(0)
  const[things,setThings]=useState([])

  useEffect(()=>{
    axios.get(`${baseUrl}/things-to-do/`).then((res)=>{
      console.log(res)
      setThings(res.data)
    },(error)=>{
      console.log(error)
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
                    </div>
                    <div className="place__text">
                    {placeDesc}
                    </div>
                    <div className="place__header_name">Trains to {placeName}
                    </div>
                    <div className="place__text">
                    bcwbfwhfwih
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