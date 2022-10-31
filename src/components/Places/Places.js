import React from 'react'
import axios from 'axios'
import Aos from 'aos'
import baseUrl from '../../utils/Urls'
import {  useEffect,useState} from 'react'
import PlaceCards from './PlaceCards'

function Places() {

const[places,setPlaces]=useState([])
useEffect(()=>{
    Aos.init({duration:1100})
    axios.get(`${baseUrl}/places/`).then((res)=>{
        setPlaces(res.data)
    })
},[])
    
        
 
  return (
    <div className='place__container' >
    {
        places.map((place)=>{
            return(
                <PlaceCards placename={place.place_name} country={place.country} placeimage={place.place_image} />
            )
        })
    }
    </div>
  )
}

export default Places