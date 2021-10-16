import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import New from './components/New';
import Heels from './components/Heels';
import Boots from './components/Boots';
import Flats from './components/Flats';
import HomePage from './components/HomePage';
import CustomerService from './components/CustomerService';
import AnnouncementBar from './components/AnnouncementBar';

function App() {
  return (
    // <h1> hello world</h1>
    <Router>
      <>
        <AnnouncementBar />
        <Header />
        <NavBar />
        <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/new" component={New} />
        <Route path="/heels" component={Heels} />
        <Route path="/boots" component={Boots} />
        <Route path="/flats" component={Flats} />
        <Route path="/customer-service" component={CustomerService} />
        </Switch>
      </>
    </Router>





  
  
  );
}

export default App;
