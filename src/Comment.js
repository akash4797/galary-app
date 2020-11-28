import React from 'react';

const Comment = ({author,comm}) => {
    return (
           
                   
        <li>
            <h4>{author}</h4>
            <p>{ comm}</p>
            
        </li>
              
                
               
    )
}
export default Comment;