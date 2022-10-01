import React from 'react'
import { Carousel } from 'react-bootstrap'
import { useState } from 'react'

const CarouselComponent = () => {

  const[carousels, setCarousels]=useState([]);

  return (
    <div>
      <Carousel  interval = {2000} fade>

    {carousels.map((item)=>{
      return(
        <Carousel.Item >
        <img
          className="d-block w-100 "
          
          style={ {height:'90vh', backgroundColor:'black'}}
          src={item.image}
          alt="First slide"
        />
        <Carousel.Caption style = {{background:"rgba(0, 0, 0, 0.5)"}}>
          <h3>{item.company_name}<span/>,{item.job_name}</h3>
          <p>This is a job application portal</p>
        </Carousel.Caption>
      </Carousel.Item>
      )
    })}
    


  </Carousel>
    </div>
  )
}

export default CarouselComponent