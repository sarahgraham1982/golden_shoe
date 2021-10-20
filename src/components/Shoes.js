import StoreInventory from '../components/StoreInventory';
import '../css/Shoes.css';

// const FilteredShoes = StoreInventory.reduce((res, shoe) => {
//   if (!res[shoe.department]) {
//     res[shoe.department] = [];
//   }
//   res[shoe.department].push(shoe);
//   return res;
// }, {});

const Shoes = () => {
  return (
         
      <div>  
            
        {StoreInventory.map(data => (  
          <>
          <div className="shoe-container">
            <div className="shoe-image">
              <img src={data.image} alt={data.title} className="responsive"/> 
            </div> 
            <div className="shoe-details">   
              <p>{data.title}</p>
              <p>{data.price}</p>
            </div> 
          </div>
          
          </>             
        ))}   
             
      </div>
      
    
  );
}

export default Shoes;