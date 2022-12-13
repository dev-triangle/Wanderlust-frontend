import React, { useState } from 'react'
import './ReviewDialog.css'
import Dialog from '@mui/material/Dialog';
import axiosInstance from '../../utils/axios';
import { useEffect } from 'react';
import baseUrl from '../../utils/Urls';
const ReviewDialog = ({open,handleClose}) => {
    const[description,setDescription]=useState('')
    const[rate,setRate]=useState(0)
    const[currUser,setCurrUser]=useState('')
    const[currUserId,setCurrUserId]=useState()

    useEffect(()=>{
        axiosInstance.get(`${baseUrl}/current-user/`).then((response)=>{
            setCurrUser(response.data.username)
            setCurrUserId(response.data.id)
        },(error)=>{

        })
    },[])
    const handleSubmit=(e)=>{
        axiosInstance.post(`${baseUrl}/reviews/`,{
            desc: description,
            rate: rate,
            user_name: currUser,
            user_foreign: currUserId
        }).then((response)=>{
            console.log(response)
        },(error)=>{
   console.log(error)
        })
       
    }
  return (
    <div>
        <Dialog
        fullWidth={true}
        maxWidth={"md"}
        PaperProps={{
          sx: { width: "100%", borderRadius: 5, m: 2, minHeight: "60vh" },
        }}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
            <div className="review_form__container">
            <form className='review_main_form' onSubmit={handleSubmit}>
                <input className='review__input review__desc' type='text' placeholder='Description'value={description} onChange={(e)=>{setDescription(e.target.value)}}/>
                <input className='review__input' type="number" placeholder='Enter your rating out of 10' value={rate} onChange={(e)=>{setRate(e.target.value)}}/>
                <button className='review__btn' type='submit'>Submit</button>
            </form>
            </div>
            

        </Dialog>
    </div>
  )
}

export default ReviewDialog