import React,{useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import {FaPen} from 'react-icons/fa'
export default function Header(props){
    let location = useLocation()
    return(
        <div className="header-home">
            <h1>{(location.pathname === "/")? "Home" : location.pathname.slice([1]).toUpperCase()}</h1>
            <FaPen/>
        </div>
    )
}