/* eslint-disable react-hooks/exhaustive-deps */
// import React, { useEffect, useState } from "react";
import Gallery from './Recipes';

import Galleries from './database/galleries.js';
import './App.css';


const App = () => {
  return (
    <div className="App">
      <div className="container">
        <h1>Gallary App</h1>
       
         <div className="row">
        {Galleries.map(recipe => (
        
           <Gallery title={recipe.title} description={recipe.description} img={recipe.image_url} comment={recipe.comment} />
                 
          
        ))}
        
        </div> 
   
           </div>
        </div>
  
  
  );
}

export default App;
