import React,{useState,useEffect} from 'react'
import './Dashboard.css'
import Mainlayout from '../../components/Mainlayout/Mainlayout'
import { Button } from '@mui/material'
import DisplayCards from './DisplayCards'
import CustomTitle from '../../utils/CustomTitle'
import axiosInstance from '../../utils/axios'
import baseUrl from '../../utils/Urls'
const Dashboard = () => {
  const[curr_username,setCurr_username]=useState('')
  const[currEmail,setCurrEmail]=useState('')
  const[frame,setFrame]=useState('places')
  useEffect(()=>{
    axiosInstance.get(`${baseUrl}/current-user/`).then((response)=>{
      console.log(response)
      setCurr_username(response.data.username)
      setCurrEmail(response.data.email)
    },(error)=>{
      console.log(error)
    })
  },[])
  // useEffect(()=>{
    
  // },[currentTab])
  
  return (
    <div>
      <CustomTitle title="Dashboard"/>
      <Mainlayout>
        <div className="dash__main_container">
        <div className="booking__main">
          <div className="booked__header_container">
            <div className="booked__title">My Bookings</div>
            <div className="booked_tabs">
              {frame==='places'?<span style={{textDecoration:'underline'}} className="booked_places">Places</span>:<span onClick={()=>{setFrame('places')}} className="booked_places">Places</span>}
              {frame==='stays'?<span style={{textDecoration:'underline'}} className="booked_places">Stays</span>:<span onClick={()=>{setFrame('stays')}} className="booked_places">Stays</span>}
              {frame==='travels'?<span style={{textDecoration:'underline'}} className="booked_places">Travels</span>:<span onClick={()=>{setFrame('travels')}} className="booked_places">Travels</span>}
            </div>
          </div>
          <div className='booked_container'>
          <DisplayCards frame={frame}/>
          <DisplayCards frame={frame}/>
          <DisplayCards frame={frame}/>
          <DisplayCards frame={frame}/>
          <DisplayCards frame={frame}/>
          <DisplayCards frame={frame}/>
          <DisplayCards frame={frame}/>
          <DisplayCards frame={frame}/>
          <DisplayCards frame={frame}/>
          <DisplayCards frame={frame}/>
          </div>
          <Button variant="contained" sx={{ width: 200, backgroundColor:"#2B4865" }}>New Travel</Button>
        </div>
        <div className="profile__box">
         <img src="https://avatars.githubusercontent.com/u/43471295?v=4" className='user_profile__image' alt="profile_icon" />
         <p className='full__name'>Achyuth Mohan</p>
         <p className='user__name'>{curr_username}</p>
         <p className='contact__number'>23456789</p>
         <p className='user__email'>{currEmail}</p>
        </div>
        </div>
        
      </Mainlayout>

    </div>
  )
}

export default Dashboard