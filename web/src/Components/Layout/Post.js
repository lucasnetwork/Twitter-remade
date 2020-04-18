import React from 'react'
import PostLink from './PostLink'
import '../../styles/post.css'
export default function Post({imagePerson,image,text,urlPostLink = false}){
    return(
        <article className="post-individual">
            <img alt="foto da pessoa" src={imagePerson}/>
            <div className="text">
                <p>{text}</p>
                {(image)? <img alt="imagem"src={image}/> : ""}
                
                {(urlPostLink)?<PostLink  image="nada" text="hello world"/>: ""}
                
            </div>

        </article>
    )
}