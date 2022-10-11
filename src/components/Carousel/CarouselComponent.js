import React from 'react'
import axios from 'axios'
import { useEffect,useState }  from 'react'
import baseUrl from '../../utils/Urls'

import {Carousel} from 'react-bootstrap'




function CarouselComponent() {

  const [carousel,setCarousel]=useState([]);

  useEffect(()=>{
    axios.get(`${baseUrl}/trending/`).then((response)=>{
      console.log(response)
      setCarousel(response.data)
    })
  },[])


  return (
    <Carousel>
    { carousel.map((item)=>{
      return(
        <Carousel.Item>
        <img 
          className="d-block w-100"
          src={item.place_image}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>{item.state}</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      )
    }) }
      
    </Carousel>
  )
}

export default CarouselComponent