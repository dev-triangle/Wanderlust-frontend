import React  from 'react'
import Mainlayout from '../../components/Mainlayout/Mainlayout'
import CustomTitle from '../../utils/CustomTitle'
import './PlaceDetailPage.css'
import BookingComponent from './BookingComponent'
const PlaceDetailPage = () => {
   
  return (
    <Mainlayout>
        <CustomTitle title="Booking"/>
        <div className="place__detail_main">
            <div className="place_details">
                <div>
                    <div className="place__header_name">Kochi</div>
                    <div className="place__text">
                    Originally from Latin, Lorem ipsum has no intelligible meaning. It is simply a display of letters to be viewed as a sample with given graphical elements in a file. "Lipsum" (a portmanteau of lorem and ipsum) generators are commonly used to form generic text in a file.
                    </div>
                </div>
                
                <img src="https://avatars.githubusercontent.com/u/43471295?v=4"className='place__detail_image' alt="" />
            </div>
            <div className="place__booking">
                    <h1>Booking</h1>
                    <BookingComponent/>
            </div>
        </div>
    </Mainlayout>
  )
}

export default PlaceDetailPage