import React from 'react'
import PostLink from './PostLink'
import {ImagePerson,ImageText} from '../../styles/ImageTags'
import '../../styles/post.css'
export default function Post({imagePerson,image,text,urlPostLink = false}){
    return(
        <article className="post-individual">
            <ImagePerson height="50px" alt="foto da pessoa" src={imagePerson}/>
            <div className="text">
                <p>{text}</p>
                {(image)? <ImageText alt="imagem"src={image}/> : ""}
                
                {(urlPostLink)?<PostLink  image="nada" text="hello world"/>: ""}
                
            </div>

        </article>
    )
}