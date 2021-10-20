import StoreInventory from '../components/StoreInventory';


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
          <img src={data.image} alt={data.title}/>      
          <p>{data.title}</p>
          <p>{data.price}</p>
          
          </>             
        ))}   
             
      </div>
      
    
  );
}

export default Shoes;