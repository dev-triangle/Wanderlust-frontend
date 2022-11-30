import React,{useState,useEffect} from 'react'
import './Dashboard.css'
import Mainlayout from '../../components/Mainlayout/Mainlayout'
import DisplayCards from './DisplayCards'
import CustomTitle from '../../utils/CustomTitle'
import axiosInstance from '../../utils/axios'
import baseUrl from '../../utils/Urls'
import { useNavigate } from 'react-router-dom'
import {HiOutlinePencil} from 'react-icons/hi'
import {Modal,Button} from 'react-bootstrap'
import Editprofileform from '../../components/Editprofileform.js/Editprofileform'

const Dashboard = () => {
  const navigate=useNavigate()
  const[curr_username,setCurr_username]=useState('')
  const[currEmail,setCurrEmail]=useState('')
  const[currUserid,setcurrUserid]=useState()
  const[actualname,setActualname]=useState('')
  const[phno,setPhno]=useState('')
  const[userimg,setUserimg]=useState()
  const[frame,setFrame]=useState('places')
 const[show,setShow]=useState(false)
  const handleClose = () => setShow(false);

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
        <div class="profile__main">
        <div class="profile__container">
            <div class="profile__gradient">
                <div class="profile__content">
                    <h2 className='profile__h2'>{actualname}</h2>
                    <h4>{curr_username}</h4>
                    <h4>{currEmail}</h4>
                  
                    <h6>{phno}</h6>
                
                    <p class="profile__details">I am a digital marketing Manager.</p>
                    <div class="profile__icons">
                        <HiOutlinePencil onClick={()=>{setShow(true)}} />
                        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>
                Edit profile
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
             <Editprofileform  actualname={actualname} setActualname={setActualname}  phno={phno} setPhno={setPhno} userimg={userimg} setUserimg={setUserimg}/>
        </Modal.Body>
        <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close Button
                </Button>
        </Modal.Footer>
    </Modal>

                    </div>
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
          <DisplayCards frame={frame} currUserid={currUserid}/>
          </div>
          {/* <Button onClick={()=>{navigate('/')}} variant="contained" sx={{ width: 200, backgroundColor:"#2B4865" }}>New Travel</Button> */}
          <button className='newtravel' onClick={()=>{navigate('/')}} variant="text">+ New Travel</button> 
        </div>
        </div>
      </Mainlayout>
    </div>
  )
}
export default Dashboard