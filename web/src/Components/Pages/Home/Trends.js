import React from 'react'
import {GoGear} from 'react-icons/go'
import '../../../styles/trends.css'
export default function Trends(){
    return(
        <aside >
            <div className="trend">
                <div className="header">
                    <h2>Trends for you</h2>
                    <GoGear />
                </div>
                <ul>
                    <li>
                        <span>Trending in Brazil</span>
                        <p>Rodrigo Amorim</p>
                    </li>
                    <li>
                        <span>Trending in Brazil</span>
                        <p>Rodrigo Amorim</p>
                    </li>
                    <li>
                        <span>Trending in Brazil</span>
                        <p>Rodrigo Amorim</p>
                    </li>
                    <li>
                        <span>Trending in Brazil</span>
                        <p>Rodrigo Amorim</p>
                    </li>
                </ul>
                <a>Show more</a>
            </div>
        </aside>
    )
}