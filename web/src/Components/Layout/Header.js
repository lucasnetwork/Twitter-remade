import React from 'react'
import {FaTwitter,FaHome,FaHashtag,FaBell,FaEnvelope, FaBookmark,FaListAlt} from 'react-icons/fa'
import {IoIosMore} from 'react-icons/io'
import '../../styles/header.css'
export default function Header(){
    return(
        <header className="navigation">
            <div>
                <nav>
                    <li><FaTwitter /></li>
                    <li><FaHome />Home</li>
                    <li><FaHashtag/>Explore</li>
                    <li><FaBell/>Notifications</li>
                    <li><FaEnvelope/>Messages</li>
                    <li><FaBookmark/>Bookmarks</li>
                    <li><FaListAlt/>Lists</li>
                    <li><IoIosMore/>More</li>
                </nav>
                <button>Tweet</button>
            </div>
        </header>
    )
}