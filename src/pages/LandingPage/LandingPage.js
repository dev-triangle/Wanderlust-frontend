import React from 'react'
import './LandingPage.css'
import Mainlayout from '../../components/Mainlayout/Mainlayout'
import CarouselComponent from '../../components/Carousel/CarouselComponent'
import PlaceCards from '../../components/PlaceCards/PlaceCards'


const LandingPage = () => {
  return (
    <div>
      <Mainlayout>
        <CarouselComponent/>
        <PlaceCards/>
      </Mainlayout>
    </div>
  )
}

export default LandingPage