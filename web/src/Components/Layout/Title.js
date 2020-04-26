import React from 'react'
import {useLocation} from 'react-router-dom'
import {FaPen} from 'react-icons/fa'
import {TitleHead} from '../../styles/Text'
export default function Header(props){
    let location = useLocation()
    return(
        <TitleHead>
            <h1>{(location.pathname === "/")? "Home" : location.pathname.slice([1]).toUpperCase()}</h1>
            <FaPen/>
        </TitleHead>
    )
}