import React, { useEffect,useState } from 'react'
import Mainlayout from '../../components/Mainlayout/Mainlayout'
import './ReviewPage.css'
import axios from 'axios'
import baseUrl from '../../utils/Urls'
import ReviewCards from './ReviewCards'
function ReviewPage() {
const[reviews,setReviews]=useState([])

useEffect(()=>{
  axios.get(`${baseUrl}/reviews/`).then((response)=>{
    setReviews(response.data)
  })
},[])

  return (
    <Mainlayout>
    <div className='review__container'>
     {
        reviews.map((item)=>{
          return(
              <ReviewCards key={item.id} desc={item.desc} rate={item.rate}/>
          )
        })
     }
    </div>

        </Mainlayout>
  )
}

export default ReviewPage