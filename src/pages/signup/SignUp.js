import React, { useEffect,useState } from 'react'
import './SignUp.css'
import Mainlayout from '../../components/Mainlayout/Mainlayout'
import travel_gif from '../../assets/gifs/world_gif.gif'
import Aos from 'aos'
import { useNavigate } from 'react-router-dom'
import baseUrl from '../../utils/Urls'
import axios from 'axios'
//import axiosInstance from '../../utils/axios'


const SignUp = () => {
    useEffect(()=>{
        Aos.init({duration:1100})
    },[])

    const navigate = useNavigate()
  
    const[email, setEmail]=useState("");
    const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");

    const handlesubmit= async(e)=>{
    
        await axios.post(`${baseUrl}/register/`,{
            "email" : email,
            "username":username,
            "password":password
        }).then((Response)=>{
            console.log(Response)
            if(Response.status===201){
              
              navigate('/login')
            //   axiosInstance.post(`${baseUrl}/user-detail/`,{
            //     "username":username
            //   })
            }
      
       
       })
    }

  return (
    <div>
        <Mainlayout>
            <div className="signup__main">
                    <img src={travel_gif} alt="" className='signup_animation' />
                <div className="signup__form"data-aos="zoom-in"data-aos-delay="150">
                    <div className="su_form_container">
                        <p className='su__header' >Register</p>
                        <div className="data_input_su">
                        <label htmlFor="" className='su__username'>Email</label>
                            <input className='input__su' placeholder='Email' type="text" onChange={(e)=>setEmail(e.target.value)} />
                       
                        <label htmlFor=""className='su__username'data-aos="zoom-in"data-aos-delay="150">Username</label>
                            <input className='input__su' placeholder='Username' type="text" onChange={(e)=>setUsername(e.target.value)} />
                        
                        <label htmlFor=""className='su__username'data-aos="zoom-in"data-aos-delay="150">Password</label>
                            <input className='input__su' placeholder='Password' type="password" onChange={(e)=>setPassword(e.target.value)} />

                            
                        </div>
                        
                        <button className="about_btn regBtn"data-aos="zoom-in"data-aos-delay="150" onClick={handlesubmit} >Register</button>

                        <a href='/login' className='account'>already have an account ?</a>
                    </div>
                </div>
            </div>
        </Mainlayout>
    </div>
  )
}

export default SignUp