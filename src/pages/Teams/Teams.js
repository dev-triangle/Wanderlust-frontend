import React,{ useEffect } from 'react'
import './Teams.css'
import Mainlayout from '../../components/Mainlayout/Mainlayout'
import persons from '../../data/teamData'
import TeamCard from './TeamCard'
import CustomTitle from '../../utils/CustomTitle'
import Aos from 'aos'
const Teams = () => {
    useEffect(()=>{
        Aos.init({duration:1100})
    },[])
  return (
    <div data-aos="fade-in">
        <CustomTitle title='Team'/>
        <Mainlayout>
                <div className="team__main_container">
                    {persons.map((person)=>{
                        return(<TeamCard key={person.id} id={person.id} name={person.name} image={person.image}/>)
                    })}
                </div>
        </Mainlayout>
        
    </div>
  )
}

export default Teams