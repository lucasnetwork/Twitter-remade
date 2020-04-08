import React from 'react'
import CreatePost from './CreatePost'
import Trends from './Trends'
import '../../../styles/main.css'
export default function Home(){
    return(
        <>
            <main>
                <div>
                    <CreatePost/>
                </div>
                <Trends/>
            </main>
        </>
    )
}