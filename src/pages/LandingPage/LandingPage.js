import React from 'react'
import './LandingPage.css'
import Mainlayout from '../../components/Mainlayout/Mainlayout'
import CarouselComponent from '../../components/Carousel/CarouselComponent'
import Places from './Places'
const LandingPage = () => {
  return (
    <div>
      <Mainlayout>
        <CarouselComponent/>
        <Places/>
      </Mainlayout>
    </div>
  )
}

export default LandingPage