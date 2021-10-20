import StoreInventory from '../components/StoreInventory';

const Shoes = StoreInventory.reduce((res, shoe) => {
    if (!res[shoe.department]) {
      res[shoe.department] = [];
    }
    res[shoe.department].push(shoe);
    return res;
  }, {});

  export default Shoes;