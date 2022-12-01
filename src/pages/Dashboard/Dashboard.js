import React,{useState,useEffect} from 'react'
import './Dashboard.css'
import Mainlayout from '../../components/Mainlayout/Mainlayout'
import DisplayCards from './DisplayCards'
import CustomTitle from '../../utils/CustomTitle'
import axiosInstance from '../../utils/axios'
import baseUrl from '../../utils/Urls'
import { useNavigate } from 'react-router-dom'
import Lottie from 'react-lottie'
import train_anim from '../../animations/88977-metro-rail.json'
const Dashboard = () => {
  const navigate=useNavigate()
  const[curr_username,setCurr_username]=useState('')
  const[currEmail,setCurrEmail]=useState('')
  const[currUserid,setcurrUserid]=useState()
  const[actualname,setActualname]=useState('')
  const[phno,setPhno]=useState('')
  const[userimg,setUserimg]=useState()
  const[frame,setFrame]=useState('places')

  const parachuteEffect={
    loop: true,
        autoplay: true,
        animationData: train_anim,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
  };
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
          
          {/* profile main starts here */}
        <div className="profile__main">
        
        <img className='profile__pic' src="https://avatars.githubusercontent.com/u/43471295?v=4" alt="your_image" />
        <div className="profile__details">
          <p className='profile_name'>Name: </p>
          <p>Phno: {actualname}</p>
          <p>username: {curr_username}</p>
          <p>Email: {currEmail}</p>
        </div>
        <Lottie options={parachuteEffect} style={{width:'20%' ,height:'30%'}}/>
        </div>
        {/* profile main ends here */}
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
          <DisplayCards frame={frame} currUserid={currUserid}/>
          </div>
        
          <button className='newtravel' onClick={()=>{navigate('/')}} variant="text">+ New Travel</button> 
        </div>
        </div>
      </Mainlayout>
    </div>
  )
}
export default Dashboard