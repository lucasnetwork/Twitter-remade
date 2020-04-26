import React,{useState,useEffect} from 'react'
import Trends from '../Home/Trends'
import Post from '../../Layout/Post'

export default function BookMark(){
    return(
        <main>
            <div>
                <Post imagePerson="https://pbs.twimg.com/profile_images/1195485835849879553/z8rcWtDZ_400x400.jpg" image="qualquercoisa" text="ola mundo" existPostLink={true}/>
                <Post imagePerson="https://pbs.twimg.com/profile_images/1195485835849879553/z8rcWtDZ_400x400.jpg" image="qualquercoisa" text="Testando posts"/>
                <Post imagePerson="https://pbs.twimg.com/profile_images/1195485835849879553/z8rcWtDZ_400x400.jpg" image="qualquercoisa" text="ola mundo"/>
            </div>
            <Trends/>
        </main>
    )
}