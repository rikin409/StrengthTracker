
import React, {useEffect, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Fade, Progress, Container, Row, Col } from 'reactstrap';
import './App.css';
import LifterList from './LifterList';
import Header from './Header';
import Footer from './Footer';
import Welcome from './Welcome';
import {BrowserRouter, Switch, Route} from 'react-router-dom';



function App() {
    
   
    
  return (
      <div>
          
        <Header/>
        
          
        <BrowserRouter>
            <Route path="/" exact component={Welcome}/>
            <Route path="/list" exact component={LifterList}/>
        </BrowserRouter>
          
          

        
      </div>
      
    
  );
}

export default App;
