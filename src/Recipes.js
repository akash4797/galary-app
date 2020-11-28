import React from 'react';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Comment from './Comment';
import FormDataComponent from './components/form-data-component';
// import {Button} from "react-bootstrap";

  

const Gallery = ({ id,title,description,img,comment}) => {

  
  

    return (
       
         <div className=" col-sm-12 col-md-4">
            <div className="gallery">
        <h1 className="title">{title}</h1>
                    <p className="description">{description}</p> 
                    <div className="image">
                        <img src={img} alt="blank" />
               
                    </div>
                <div className="comment">
                    <ul>
                        <li>
                        {comment.map(data => (
                               <Comment author={data.author} comm={data.comment} />
                        ))}
                            
                        </li>
                </ul>
                
            </div>
            <FormDataComponent formId={id} />
            </div>
           
               
                  
              
            
        </div> 
    
       
    )
    
       
                            
}
export default Gallery;