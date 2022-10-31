import React from 'react'
import axios from 'axios'
import aos from 'aos'
import baseUrl from '../../utils/Urls'
import {  useEffect,useState} from 'react'
import PlaceCards from './PlaceCards'

function Places() {

const[places,setPlaces]=useState([])
useEffect(()=>{
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