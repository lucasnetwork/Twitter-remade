import React from 'react'
import {useLocation} from 'react-router-dom'
import {FaPen} from 'react-icons/fa'
import {HeadContent,TextHead} from '../../styles/Text'
export default function Header(props){
    let location = useLocation()
    return(
        <HeadContent>
            <TextHead>{(location.pathname === "/")? "Home" : location.pathname.slice([1]).toUpperCase()}</TextHead>
            <FaPen/>
        </HeadContent>
    )
}