import React,{useState,useEffect} from 'react'
import './Dashboard.css'
import Mainlayout from '../../components/Mainlayout/Mainlayout'
import { Button } from '@mui/material'
import DisplayCards from './DisplayCards'
import CustomTitle from '../../utils/CustomTitle'
import axiosInstance from '../../utils/axios'
import axios from 'axios'
import baseUrl from '../../utils/Urls'
const Dashboard = () => {
  const[curr_username,setCurr_username]=useState('')
  const[currEmail,setCurrEmail]=useState('')
  const[currUserid,setcurrUserid]=useState()
  const[actualname,setActualname]=useState('')
  const[phno,setPhno]=useState('')
  const[placeIdArray,setPlaceIdArray]=useState([])
  const[stayIdArray,setStayIdArray]=useState([])
  const[travelIdArray,setTravelIdArray]=useState([])
  const[frame,setFrame]=useState('places')
  let result
  
  useEffect(()=>{
    axiosInstance.get(`${baseUrl}/bookings/`).then((response)=>{
      response.data.forEach((item)=>{
        if(item.user_foreign===currUserid){
          setPlaceIdArray([...placeIdArray,item.place_foreign])
          setTravelIdArray([...travelIdArray,item.travel_foreign])
          setStayIdArray([...stayIdArray,item.stay_foreign])
        }
      })
      axios.get(`${baseUrl}/places/`).then((res)=>{
       result = response.data.filter(placeElement => {
          let arr = placeIdArray.filter(placeIdElement => placeIdElement === placeElement.id)
          return !(arr.length === 0)
        });
      },(error)=>{
        console.log(response)
      })
    },(error)=>{
      console.log(error)
    })
  },[])
  useEffect(()=>{
    axiosInstance.get(`${baseUrl}/current-user/`).then((response)=>{
      console.log(response)
      setCurr_username(response.data.username)
      setCurrEmail(response.data.email)
      setcurrUserid(response.data.id)
    },(error)=>{
      console.log(error)
    })
  },[])

  
  // useEffect(()=>{
    
  // },[currentTab])

  useEffect(()=>{
    axiosInstance.get(`${baseUrl}/user-detail/`).then((response)=>{
      console.log(response)
      response.data.forEach((item)=>{
        if(item.user_foreign===currUserid)
         { console.log("hi")
          setActualname(item.actual_name)
          setPhno(item.phno)
        
      }
      })
    })
  })
  
  return (
    <div>
      <CustomTitle title="Dashboard"/>
      <Mainlayout>
        <div className="dash__main_container">
        <div class="profile__main">
        <div class="profile__container" data-aos="zoom-in">
            <div class="profile__gradient">
                <div class="profile__content">
                    <h2 className='profile__h2'>{actualname}</h2>
                    <h4>{curr_username}</h4>
                    <br/>
                    <h6>{phno}</h6>
                    <br/>
                    <p class="profile__details">I am a digital marketing Manager.</p>
                    <div class="profile__icons">
                        <i class="fa fa-facebook-square" aria-hidden="true"></i>
                        <i class="fa fa-twitter" aria-hidden="true"></i>
                        <i class="fa fa-instagram" aria-hidden="true"></i>
                        <i class="fa fa-pinterest" aria-hidden="true"></i>
                    </div>
                    {/* {result.map((arrelement)=>{
                      return(<h1>ejnnenijnujninmijn</h1>)
                    })} */}
                    
                </div>
            </div>
        </div>
    </div>


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
          {/* <h1>{result[0].id}</h1>  */}
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
       {/* <div className="profile__box">
         <img src="https://avatars.githubusercontent.com/u/43471295?v=4" className='user_profile__image' alt="profile_icon" />
         <p className='full__name'>Achyuth Mohan</p>
         <p className='user__name'>{curr_username}</p>
         <p className='contact__number'>23456789</p>
         <p className='user__email'>{currEmail}</p>
  </div>*/}
        </div>
        
      </Mainlayout>

    </div>
  )
}

export default Dashboard