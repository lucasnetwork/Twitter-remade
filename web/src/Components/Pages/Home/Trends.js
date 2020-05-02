import React from 'react'
import {Link} from 'react-router-dom'
import {GoGear} from 'react-icons/go'
import {TextHead,TitleHead} from '../../../styles/Text'
import {TrendButton} from '../../../styles/Navigation'
import '../../../styles/trends.css'
export default function Trends(){
    return(
        <aside >
            <div className="trend">
                <TitleHead>
                    <TextHead>Trends for you</TextHead>
                    <GoGear />
                </TitleHead>
                <ul>
                    <TrendButton>
                        <span>Trending in Brazil</span>
                        <p>Rodrigo Amorim</p>
                    </TrendButton>
                    <TrendButton>
                        <span>Trending in Brazil</span>
                        <p>Rodrigo Amorim</p>
                    </TrendButton>
                    <TrendButton>
                        <span>Trending in Brazil</span>
                        <p>Rodrigo Amorim</p>
                    </TrendButton>
                    <TrendButton>
                        <span>Trending in Brazil</span>
                        <p>Rodrigo Amorim</p>
                    </TrendButton>
                </ul>
                <Link to="/">Show more</Link>
            </div>
        </aside>
    )
}