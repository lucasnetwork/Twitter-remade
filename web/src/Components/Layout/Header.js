import React from 'react'
import {Link} from 'react-router-dom'
import {FaTwitter,FaHome,FaHashtag,FaBell,FaEnvelope, FaBookmark,FaListAlt} from 'react-icons/fa'
import {IoIosMore} from 'react-icons/io'
import {ButtonTweet} from '../../styles/Buttons'
import {Navigation,MainButton} from '../../styles/Navigation'
import '../../styles/header.css'
export default function Header(){
    return(
        <Navigation className="navigation">
            <div>
                <nav>
                    <MainButton><FaTwitter /></MainButton>
                    <MainButton >
                        <Link to="/">
                            <FaHome />
                            <p>Home</p>
                        </Link>
                    </MainButton>
                    <MainButton>
                        <Link to="/explore">
                            <FaHashtag/>
                            <p>Explore</p>
                        </Link>
                    </MainButton>
                    <MainButton>
                        <Link to="/notification">
                            <FaBell/>
                            <p>Notifications</p>
                        </Link>
                    </MainButton>
                    <MainButton>
                        <Link to="/Messages">
                            <FaEnvelope/>
                            <p>Messages</p>
                        </Link>
                    </MainButton>
                    <MainButton>
                        <Link to="/bookmark">
                            <FaBookmark/>
                            <p>Bookmarks</p>
                        </Link>
                    </MainButton>
                    <MainButton>
                        <Link to="/list">
                            <FaListAlt/>
                            <p>Lists</p>
                        </Link>
                    </MainButton>
                    <MainButton>
                        <Link to="/more">
                            <IoIosMore/>
                            <p>More</p>
                        </Link>
                    </MainButton>
                </nav>
                <ButtonTweet width={200} height={30}>Tweet</ButtonTweet>
            </div>
        </Navigation>
    )
}