import React from 'react'
import PostLink from './PostLink'
import {ImagePerson,ImageText} from '../../styles/ImageTags'
import {TextPost,PostContent,TextContent} from '../../styles/Text'

export default function Post({imagePerson,image,text,urlPostLink = false}){
    return(
        <PostContent>
            <ImagePerson height="50px" alt="foto da pessoa" src={imagePerson}/>
            <TextContent>
                <TextPost>{text}</TextPost>
                {(image)? <ImageText alt="imagem"src={image}/> : ""}
                
                {(urlPostLink)?<PostLink  image="nada" text="hello world"/>: ""}
                
            </TextContent>

        </PostContent>
    )
}