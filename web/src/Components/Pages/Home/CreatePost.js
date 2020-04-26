import React,{useState} from 'react'
import {FaImage,FaChartBar} from 'react-icons/fa'
import {ButtonTweet} from '../../../styles/Buttons'
import '../../../styles/createPost.css'
export default function({posts,set}){
    const [text,setText] = useState("")
    function handlerPost(e){
        e.preventDefault()
        set([...posts,
            {
                imagePerson:"https://pbs.twimg.com/profile_images/1195485835849879553/z8rcWtDZ_400x400.jpg",
                text
            }])
        setText("")
    }
    return(
        <article className="post">
            <img alt="foto da pessoa"src="https://pbs.twimg.com/profile_images/1195485835849879553/z8rcWtDZ_400x400.jpg"/>
            <div className="text">
                <textarea onKeyDown={(e) =>(e.key === "Enter")? handlerPost(e): ""} value={text} onChange={(e) => setText(e.target.value)} placeholder="no Que esta pensando"/>
                <div className="button-actions">
                    <div>
                        <FaImage/>
                        <FaChartBar/>
                    </div>
                    <ButtonTweet onClick={handlerPost}>Tweet</ButtonTweet>
                </div>
            </div>
        </article>
    )
}