import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import {Routes, Route} from 'react-router-dom';
import ProcessLog from './Pages/ProcessLog';
import GetStatus from './Pages/GetStatus';
import UpdatePolicy from './Pages/UpdatePolicy';
import Navigation from './Pages/Navigation';
import AllRequestDetails from './Pages/AllRequestDetails';


class App  extends Component{
  render(){
    return(
        <>
          <Navigation/>
          
          <Routes>
            <Route exact path="/processLog" element={<ProcessLog/>}/>
            <Route exact path="/status" element={<GetStatus/>}/>
            <Route exact path="/allRequestDetails" element={<AllRequestDetails/>}/>
            <Route exact path="/updatePolicy" element={<UpdatePolicy/>}/>
          </Routes>
        </>
    )
  }
}

export default App;