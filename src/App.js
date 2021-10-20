import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import All from './components/All';
import New from './components/New';
import Heels from './components/Heels';
import Boots from './components/Boots';
import Flats from './components/Flats';
import Sandles from './components/Sandles';
import Trainers from './components/Trainers';
import Slippers from './components/Slippers';
import HomePage from './components/HomePage';
import CustomerService from './components/CustomerService';
import AnnouncementBar from './components/AnnouncementBar';
import ContactForm from './components/ContactForm';
import Cart from './components/Cart';
import TopLinks from './components/TopLinks';
import Success from './components/Success';
import Footer from './components/Footer';


function App() {
  return (
    // <h1> hello world</h1>
    <Router>
      <>
        <AnnouncementBar />
        <TopLinks />
        <Header />
        <NavBar />
        <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/all" component={All} />
        <Route path="/new" component={New} />
        <Route path="/heels" component={Heels} />
        <Route path="/boots" component={Boots} />
        <Route path="/flats" component={Flats} />
        <Route path="/sandles" component={Sandles} />
        <Route path="/trainers" component={Trainers} />
        <Route path="/slippers" component={Slippers} />
        <Route path="/customerservice" component={CustomerService} />
        <Route path="/contactform" component={ContactForm} />
        <Route path="/cart" component={Cart} />
        <Route path="/success" component={Success} />
        </Switch>
        <Footer />
      </>
    </Router>





  
  
  );
}

export default App;
