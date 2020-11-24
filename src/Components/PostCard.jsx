import React from 'react'
import './Post_Card.css'

function Post_Card({title , content ,id}) {
    return (
        <div> 
            <div className='card_container' key={id}>
                <h2 className='title'>
                    {title}
                </h2>

                <p className='content'>
                   {content}
                </p>
            </div>
            
        </div>
    )
}

export default Post_Card
