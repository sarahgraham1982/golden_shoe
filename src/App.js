import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Homepage from 'src/components/Homepage';

function App() {
  return (
    // <h1> hello world</h1>
    <Router>
      <>
        <Header />
        <NavBar />
        <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/new" component={New} />
        <Route path="/heels" component={Heels} />
        </Switch>
      </>
    </Router>





  
  
  );
}

export default App;
