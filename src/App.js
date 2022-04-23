

import React, { Component } from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Profile from './Components/Profile/Profile';
import Signin from './Components/Signin/Signin';
import Signup from './Components/Signup/Signup';

export class App extends Component {
  constructor(props)
  {
      super(props);

      
    
      
  }
  render() {
    return (
      <BrowserRouter>
    
      

      
    
      <Routes>
       
        <Route path="/" element={<Profile/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/signup" element={<Signup/>}/>
     
      

      
      </Routes>
    </BrowserRouter>
    )
  }
}

export default App
