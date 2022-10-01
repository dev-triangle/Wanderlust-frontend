import React from 'react'
import axios from 'axios'
import { useEffect,useState }  from 'react'
import baseUrl from '../../utils/Urls'




function CarouselComponent() {

  const [carousel,setCarousel]=useState([]);

  useEffect(()=>{
    axios.get(`${baseUrl}/trending/`).then((response)=>{
      console.log(response)
      setCarousel(response.data)
    })
  },[])


  return (
    <div>CarouselComponent</div>
  )
}

export default CarouselComponent