import React from 'react'
import {Link} from 'react-router-dom'
import {FaTwitter,FaHome,FaHashtag,FaBell,FaEnvelope, FaBookmark,FaListAlt} from 'react-icons/fa'
import {IoIosMore} from 'react-icons/io'
import {ButtonTweet} from '../../styles/Buttons'
import '../../styles/header.css'
export default function Header(){
    return(
        <header className="navigation">
            <div>
                <nav>
                    <li><FaTwitter /></li>
                    <li >
                        <Link to="/">
                            <FaHome />
                            <p>Home</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/explore">
                            <FaHashtag/>
                            <p>Explore</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/notification">
                            <FaBell/>
                            <p>Notifications</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/Messages">
                            <FaEnvelope/>
                            <p>Messages</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/bookmark">
                            <FaBookmark/>
                            <p>Bookmarks</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/list">
                            <FaListAlt/>
                            <p>Lists</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/more">
                            <IoIosMore/>
                            <p>More</p>
                        </Link>
                    </li>
                </nav>
                <ButtonTweet width={200} height={30}>Tweet</ButtonTweet>
            </div>
        </header>
    )
}