import React, { useEffect,useState } from 'react'
import '../signup/SignUp.css'
import Mainlayout from '../../components/Mainlayout/Mainlayout'
import travel_gif from '../../assets/gifs/world_gif.gif'
import Aos from 'aos'
import baseUrl from '../../utils/Urls'
import axiosInstance from '../../utils/axios'
import { useNavigate } from 'react-router-dom'



const Login = () => {
    useEffect(()=>{
        Aos.init({duration:1100})
    },[])
    const navigate=useNavigate()
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")


    const handlelogin= async(e)=>{
        e.preventDefault()
        axiosInstance.post(`${baseUrl}/api/token/`,{
            "email": email,
            "password" : password
        }).then((res)=>{
            console.log(res)
            localStorage.setItem('access_token',res.data.access);
            localStorage.setItem('refresh_token',res.data.refresh);
            axiosInstance.defaults.headers['Authorization']= 'Bearer ' + localStorage.getItem('access_token');
            if(res.status===200)
            
            navigate('/')
        })

    }
    

  return (
    <div>
        <Mainlayout>
            <div className="signup__main">
                    <img src={travel_gif} alt="" className='signup_animation' />
                <div className="signup__form"data-aos="zoom-in"data-aos-delay="150">
                    <div className="su_form_container">
                        <p className='su__header' >Sign In</p>
                        <div className="data_input_su">
                        <label htmlFor="" className='su__username'>Email: </label>
                            <input className='input__su' placeholder='Email' type="text" onChange={(e)=>setEmail(e.target.value)} />
                       
                    
                        
                        <label htmlFor=""className='su__username'data-aos="zoom-in"data-aos-delay="150">Password</label>
                            <input className='input__su' placeholder='Password' type="password" onChange={(e)=>setPassword(e.target.value)} />

                            
                        </div>
                        <div className='login_buttons'>
                        {/* <button className="about_btn InBtn"data-aos="zoom-in"data-aos-delay="150" onClick={handlelogin} >SignIn</button> */}
                        <button className="about_btn regBtn"data-aos="zoom-in"data-aos-delay="150" onClick={handlelogin} >SignIn</button>
                        </div>
                    </div>
                </div>
            </div>
        </Mainlayout>
    </div>
  )
}

export default Login