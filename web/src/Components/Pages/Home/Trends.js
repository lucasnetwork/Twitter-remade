import React from 'react'
import {Link} from 'react-router-dom'
import {GoGear} from 'react-icons/go'
import {TextHead,HeadContent,AsideContent,TrendContent,TextTiny} from '../../../styles/Text'
import {TrendButton} from '../../../styles/Navigation'
export default function Trends(){
    return(
        <AsideContent >
            <TrendContent className="trend">
                <HeadContent>
                    <TextHead>Trends for you</TextHead>
                    <GoGear />
                </HeadContent>
                <ul>
                    <TrendButton>
                        <TextTiny>Trending in Brazil</TextTiny>
                        <p>Rodrigo Amorim</p>
                    </TrendButton>
                    <TrendButton>
                        <TextTiny>Trending in Brazil</TextTiny>
                        <p>Rodrigo Amorim</p>
                    </TrendButton>
                    <TrendButton>
                        <TextTiny>Trending in Brazil</TextTiny>
                        <p>Rodrigo Amorim</p>
                    </TrendButton>
                    <TrendButton>
                        <TextTiny>Trending in Brazil</TextTiny>
                        <p>Rodrigo Amorim</p>
                    </TrendButton>
                </ul>
                <Link to="/">Show more</Link>
            </TrendContent>
        </AsideContent>
    )
}