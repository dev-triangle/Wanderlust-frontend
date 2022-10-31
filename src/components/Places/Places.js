import React from 'react'
import axios from 'react'
import aos from 'aos'
import baseUrl from '../../utils/Urls'
import {  useEffect,useState} from 'react'
import PlaceCards from './PlaceCards'

function Places() {

const [places,setPlaces]=useState("")
useEffect(()=>{
    axios.get(`${baseUrl}/places/`).then((res)=>{
        setPlaces(res.data);
    })
},[])
    


  return (
    <div>
    {
        places.map((place)=>{
            return(
                <PlaceCards placename={place.place_name} country={place.country} />
            )
        })
    }
    </div>
  )
}

export default Places