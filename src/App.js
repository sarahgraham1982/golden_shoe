import React from 'react';
import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Shop from './shop.js';

function App() {

  return (
    <div>
    {/* <h1 className="title">The Golden Shoe</h1> */}
    <Header />
    {/* <p> The best shoe shop in the world ever!</p> */}
    {/* <Shop /> */}
    <NavBar />
    
  </div>
  
  );
}

export default App;
