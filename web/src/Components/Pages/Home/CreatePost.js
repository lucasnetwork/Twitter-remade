import React,{useState} from 'react'
import {FaImage,FaChartBar} from 'react-icons/fa'
import {ButtonTweet} from '../../../styles/Buttons'
import {ImagePerson} from '../../../styles/ImageTags'
import {PostContent,TextContent,ContentButtonActions} from '../../../styles/Text'
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
        <PostContent >
            <ImagePerson height="70px" alt="foto da pessoa"src="https://pbs.twimg.com/profile_images/1195485835849879553/z8rcWtDZ_400x400.jpg"/>
            <TextContent className="text">
                <textarea onKeyDown={(e) =>(e.key === "Enter")? handlerPost(e): ""} value={text} onChange={(e) => setText(e.target.value)} placeholder="no Que esta pensando"/>
                <ContentButtonActions>
                    <div>
                        <FaImage/>
                        <FaChartBar/>
                    </div>
                    <ButtonTweet onClick={handlerPost}>Tweet</ButtonTweet>
                </ContentButtonActions>
            </TextContent>
        </PostContent>
    )
}