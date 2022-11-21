import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Mainlayout.css'
const Mainlayout = ({children}) => {
  return (
    <div>
        <Navbar/>
        <div className='main__layout'>
        {children}
        </div>
        
        
    </div>
  )
}

export default Mainlayout