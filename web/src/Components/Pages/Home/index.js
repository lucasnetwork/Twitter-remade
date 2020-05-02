import React,{useState} from 'react'
import CreatePost from './CreatePost'
import Post from '../../Layout/Post'
export default function Home(){
    const [posts,setPosts] = useState([])
    return(
        <>
            <div>
                <CreatePost posts={posts} set={setPosts}/>
                {posts.map((post,id) =>(
                    <Post key={id} imagePerson={post.imagePerson} image={post.img} text={post.text} urlPostLink={post.link}/>
                ))}
            </div>
        </>
    )
}