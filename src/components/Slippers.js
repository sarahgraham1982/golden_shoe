import React from 'react';
import StoreInventory from '../components/StoreInventory';
import '../css/Shoes.css'

const Slippers = () => {
    return (
        <>
        <div className="page">
            <h1>SLIPPERS</h1>
        

        <div>    
            
        {StoreInventory.filter(inv =>
        inv.department == "Slippers").map(data => (  
          
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
      </div>
      </> 
    )
}





export default Slippers;