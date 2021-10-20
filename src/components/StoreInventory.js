

const StoreInventory = [
    {
      title: "Rebecca",
      price: "£55",
      img: "/shoeImgs/platform.png",
      department: "Flats",
    },
    {
      title: "Sarah",
      price: "£45",
      img: "/shoeImgs/platform.png",
      department: "Flats",
    },
    {
      title: "Jayne",
      price: "£65",
      img: "/shoeImgs/platform.png",
      department: "Flats",
    },
    {
      title: "Karla",
      price: "£45",
      img: "/shoeImgs/platform.png",
      department: "Flats",
    },
    {
      title: "Hannah",
      price: "£95",
      img: "/shoeImgs/platform.png",
      department: "Boots",
    },
    {
      title: "Amy",
      price: "£80",
      img: "/shoeImgs/platform.png",
      department: "Boots",
    },
    {
      title: "Kayleigh",
      price: "£105",
      img: "/shoeImgs/platform.png",
      department: "Boots",
    },
    {
      title: "Layla",
      price: "£75",
      img: "/shoeImgs/platform.png",
      department: "Boots",
    },
    {
      title: "Geri",
      price: "£65",
      img: "/shoeImgs/platform.png",
      department: "Heels",
    },
    {
      title: "Victoria",
      price: "£75",
      img: "/shoeImgs/platform.png",
      department: "Heels",
    },
    {
      title: "Melanie",
      price: "£60",
      img: "/shoeImgs/platform.png",
      department: "Heels",
    },
    {
      title: "Emma",
      price: "£55",
      img: "/shoeImgs/platform.png",
      department: "Heels",
    },
    {
      title: "Christi",
      price: "£45",
      img: "/shoeImgs/platform.png",
      department: "Sandles",
    },
    {
      title: "Naomi",
      price: "£50",
      img: "/shoeImgs/platform.png",
      department: "Sandles",
    },
    {
      title: "Helena",
      price: "£60",
      img: "/shoeImgs/platform.png",
      department: "Sandles",
    },
    {
      title: "Cindy",
      price: "£50",
      img: "/shoeImgs/platform.png",
      department: "Sandles",
    },
    {
      title: "Jessica",
      price: "£55",
      img: "/shoeImgs/platform.png",
      department: "Trainers",
    },
    {
      title: "Leigh-ann",
      price: "£55",
      img: "/shoeImgs/platform.png",
      department: "Trainers",
    },
    {
      title: "Courtney",
      price: "£60",
      img: "/shoeImgs/platform.png",
      department: "Trainers",
    },
    {
      title: "Ana",
      price: "£50",
      img: "/shoeImgs/platform.png",
      department: "Trainers",
    },
    {
      title: "Stephanie",
      price: "£30",
      img: "/shoeImgs/platform.png",
      department: "Slippers",
    },
    {
      title: "Suzy",
      price: "£30",
      img: "/shoeImgs/platform.png",
      department: "Slippers",
    },
    {
      title: "Elizabeth",
      price: "£25",
      img: "/shoeImgs/platform.png",
      department: "Slippers",
    },
    {
      title: "Leia",
      price: "£30",
      img: "/shoeImgs/platform.png",
      department: "Slippers",
    },
    
    
  ];
  
  const shoes = ShoeInventory.reduce((res, shoe) => {
    if (!res[shoe.department]) {
      res[shoe.department] = [];
    }
    res[shoe.department].push(shoe);
    return res;
  }, {});

  export default StoreInventory;
  export default shoes;