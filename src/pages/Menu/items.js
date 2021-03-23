import React from 'react'
import './items.css'
import {BsPeopleCircle,BsCalendar,AiFillAppstore,AiFillBell} from 'react-icons/all'

export default (props)=>{
   
function icones(icone){
    switch(icone){
        case 'BsPeopleCircle':
    
            return <BsPeopleCircle className="icone" />
        case 'BsCalendar':
            return <BsCalendar className="icone"/>
        case 'AiFillBell':
            return <AiFillBell className="icone"/>
        default:
            return <AiFillAppstore className="icone"/>
    
    }
} 
    return (
        <a href={props.link} className="container--item">
                
                {icones(props.icone)}
                <h2>{props.title}</h2>
            
        </a>
    )
}