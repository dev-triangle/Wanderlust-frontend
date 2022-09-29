import React from 'react'
import './LandingPage.css'
import Mainlayout from '../../components/Mainlayout/Mainlayout'
import Carousel from '../../components/Carousel/Carousel'
import Places from './Places'
const LandingPage = () => {
  return (
    <div>
      <Mainlayout>
        <Carousel/>
        <Places/>
      </Mainlayout>
    </div>
  )
}

export default LandingPage