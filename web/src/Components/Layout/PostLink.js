import React from 'react'
import {ImagePerson,ImageText} from '../../styles/ImageTags'

export default function PostLink({url,imagePerson,image,text}){
    return(
        <article className="post-link">
            <ImagePerson alt="foto da pessoa" src={imagePerson}/>
            <div className="text">
                <p>{text}</p>
                <ImageText alt="imagem" src={image}/>
            </div>
        </article>
    )
}