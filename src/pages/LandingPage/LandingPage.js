import React from 'react'
import './LandingPage.css'
import Mainlayout from '../../components/Mainlayout/Mainlayout'
import CarouselComponent from '../../components/Carousel/CarouselComponent'
import Places from '../../components/Places/Places'
import CustomTitle from '../../utils/CustomTitle'

const LandingPage = () => {
  return (
    <div>
      <CustomTitle title="Welcome"/>
      <Mainlayout>
        <CarouselComponent/>
        <Places/>
      </Mainlayout>
    </div>
  )
}
export default LandingPage