import React, { useEffect,useState } from 'react'
import Mainlayout from '../../components/Mainlayout/Mainlayout'
import './ReviewPage.css'
import axios from 'axios'
import baseUrl from '../../utils/Urls'
import ReviewCards from './ReviewCards'
import CustomTitle from '../../utils/CustomTitle'
import ReviewDialog from '../../components/ReviewDialog/ReviewDialog'
import {BsPlusCircle} from 'react-icons/bs'
function ReviewPage() {
const[reviews,setReviews]=useState([])
const[open,setOpen]=useState(false)

const handleClose=()=>{
  setOpen(false)
}
const handleClickOpen = () => {
  setOpen(true);
}

useEffect(()=>{
  axios.get(`${baseUrl}/reviews/`).then((response)=>{
    setReviews(response.data)
  })
},[])
  return (
    <Mainlayout>
      <CustomTitle title='Reviews'/>
      <ReviewDialog open={open} handleClose={handleClose} />
    <div className='review__container'>
    {
            (localStorage.getItem('refresh_token'))?(( <BsPlusCircle  onClick={handleClickOpen} />
           
           )):(( null))
          }
     {
        reviews.map((item)=>{
          return(
              <ReviewCards key={item.id} desc={item.desc} rate={item.rate} name={item.user_name}/>
          )
        })
     }
    </div>

        </Mainlayout>
  )
}

export default ReviewPage