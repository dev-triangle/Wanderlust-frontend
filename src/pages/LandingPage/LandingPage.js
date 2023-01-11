import React from 'react'
import './LandingPage.css'
import Mainlayout from '../../components/Mainlayout/Mainlayout'
import CarouselComponent from '../../components/Carousel/CarouselComponent'
import Places from '../../components/Places/Places'
import CustomTitle from '../../utils/CustomTitle'
// import Lottie from 'react-lottie'
// import earth_anim from '../../animations/47539-rotating-earth.json'

const LandingPage = () => {
  
  return (
    <div>
      <CustomTitle title="Welcome"/>
      <Mainlayout>
        <CarouselComponent/>
        {/* <Lottie options={onEarthRotate} style={{width:'20%' ,height:'30%'}}/> */}
        <Places/>
      </Mainlayout>
    </div>
  )
}
export default LandingPage