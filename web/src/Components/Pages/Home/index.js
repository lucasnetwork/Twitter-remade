import React,{useState} from 'react'
import CreatePost from './CreatePost'
import Post from '../../Layout/Post'
import Trends from './Trends'
import Header from './Header'
import '../../../styles/main.css'
export default function Home(){
    const [posts,setPosts] = useState([])
    return(
        <>
            <main>
                <div>
                    <Header/>
                    <CreatePost posts={posts} set={setPosts}/>
                    {posts.map((post,id) =>(
                        <Post key={id} imagePerson={post.imagePerson} image={post.img} text={post.text} urlPostLink={post.link}/>
                    ))}
                </div>
                <Trends/>
            </main>
        </>
    )
}