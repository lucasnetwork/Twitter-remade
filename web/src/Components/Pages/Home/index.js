import React,{useState} from 'react'
import CreatePost from './CreatePost'
import Post from '../../Layout/Post'
import Trends from './Trends'
import Header from './Header'
import '../../../styles/main.css'
export default function Home(){
    const [posts] = useState([{
            imagePerson:"https://pbs.twimg.com/profile_images/1195485835849879553/z8rcWtDZ_400x400.jpg",
            text:"Primeiro texto, testando frontend"
        },
        {
            imagePerson:"https://pbs.twimg.com/profile_images/1195485835849879553/z8rcWtDZ_400x400.jpg",
            text:"testando",
            img:"https://i.ytimg.com/vi/ePw190n93Dg/maxresdefault.jpg"
        }
])
    return(
        <>
            <main>
                <div>
                    <Header/>
                    <CreatePost/>
                    {posts.map(post =>(
                        <Post imagePerson={post.imagePerson} image={post.img} text={post.text} urlPostLink={post.link}/>
                    ))}
                </div>
                <Trends/>
            </main>
        </>
    )
}