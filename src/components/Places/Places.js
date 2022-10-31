import React from 'react'
import axios from 'react'
import aos from 'aos'
import baseUrl from '../../utils/Urls'
import {  useEffect,useState} from 'react'

function Places() {
  
    axios.get(`${baseUrl}/places/`).then((res)=>{
        const data=res.data;
    })


  return (
    <div>Places</div>
  )
}

export default Places