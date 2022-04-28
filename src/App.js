

import React, { Component } from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Profile from './Components/Profile/Profile';
import Reports from './Components/Report/Reports';
import Signin from './Components/Signin/Signin';
import Signup from './Components/Signup/Signup';


 

export class App extends Component {
  constructor(props)
  {
      super(props);

      this.state={
        login:0
      }

      
      
      
  
  }

  componentDidMount=async ()=>{
    let url="http://localhost:5000/api/auth/getuser";

    let obj=localStorage.getItem('token');
    obj=JSON.parse(obj);

    if(obj!=null){

    let response=await fetch(url,{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'auth_token':obj.auth_token
        }

    })

    let json1=await response.json();
     

    if(json1.success==null)
    {
       this.setState({
         login:1
       },()=>console.log(this.state))
    }
  
  


    console.log(json1)
  }
  
  }

  render() {
    return (
      <BrowserRouter>
    
      

      
    
      <Routes>
         
        <Route path="/" element={<Reports/>}/>
        <Route path="/user" element={<Profile/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/signup" element={<Signup/>}/>
     
      

      
      </Routes>
    </BrowserRouter>
    )
  }
}

export default App
