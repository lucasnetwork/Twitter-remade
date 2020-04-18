import React from 'react'

export default function PostLink({url,imagePerson,image,text}){
    return(
        <article className="post-link">
            <img alt="foto da pessoa" src={imagePerson}/>
            <div className="text">
                <p>{text}</p>
                <img alt="imagem" src={image}/>
            </div>
        </article>
    )
}