import React from 'react'
import {FaImage,FaChartBar} from 'react-icons/fa'
import '../../../styles/createPost.css'
export default function(){
    return(
        <article className="post">
            <img src="https://pbs.twimg.com/profile_images/1195485835849879553/z8rcWtDZ_400x400.jpg"/>
            <div class="text">
                <textarea placeholder="no Que esta pensando"/>
                <div className="button-actions">
                    <div>
                        <FaImage/>
                        <FaChartBar/>
                    </div>
                    <button>Tweet</button>
                </div>
            </div>
        </article>
    )
}