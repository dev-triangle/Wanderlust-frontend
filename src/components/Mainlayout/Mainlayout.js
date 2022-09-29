import React from 'react'
import Navbar from '../Navbar/Navbar'
const Mainlayout = ({children}) => {
  return (
    <div>
        <Navbar/>
        {children}
    </div>
  )
}

export default Mainlayout