import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import {FaTwitter,FaHome,FaHashtag,FaBell,FaEnvelope, FaBookmark,FaListAlt} from 'react-icons/fa'
import {IoIosMore} from 'react-icons/io'

import '../../styles/header.css'
export default function Header(){
    return(
        <header className="navigation">
            <div>
                <nav>
                    <li><FaTwitter /></li>
                    <li ><Link><FaHome />Home</Link></li>
                    <li><Link><FaHashtag/>Explore</Link></li>
                    <li><Link><FaBell/>Notifications</Link></li>
                    <li><Link><FaEnvelope/>Messages</Link></li>
                    <li><Link><FaBookmark/>Bookmarks</Link></li>
                    <li><Link><FaListAlt/>Lists</Link></li>
                    <li><Link><IoIosMore/>More</Link></li>
                </nav>
                <button>Tweet</button>
            </div>
        </header>
    )
}