import React, { useState} from 'react';
import StoreInventory from '../components/StoreInventory';
import '../css/Shoes.css'

const Heels = () => {
    return (
        <>
        <div className="page-title">
            <h1>HEELS</h1>
        </div>

        <div>    
            
        {StoreInventory.filter(inv =>
        inv.department == "Heels").map(data => (  
          
          <div className="shoe-container">
            <div className="shoe-image">
              <img src={data.image} alt={data.title} className="responsive"/> 
            </div> 
            <div className="shoe-details">   
              <p>{data.title}</p>
              <p>{data.price}</p>
            </div> 
          </div>
          
                      
        ))}   
             
      </div>
      </> 
    )
}







export default Heels;

// const HeelsList = Shoes.map(heels => {
//         return heels
//     })
      
  
