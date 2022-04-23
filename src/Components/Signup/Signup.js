import React, { Component } from 'react'
import signup from '../Css/Signup.module.css'

export class Signup extends Component {
    constructor(props){
        super(props);
        this.state={
            name:"",
            email:"",
            password:"",
            address:""
            
        }
    }

    OnEmailChange=(e)=>{
        this.setState({
            email:e.target.value
          })
         

    }
    OnPasswordChange=(e)=>{

        this.setState({
            password:e.target.value
          })
        

    }
    OnNameChange=(e)=>{
        this.setState({
            name:e.target.value
        })
    }
    OnAddressChange=(e)=>{
        this.setState({
            address:e.target.value
        })
    }
    signup=async(e)=>{
        e.preventDefault();
        console.log("Sign up kar rahe hai beta");
        let url="http://localhost:5000/api/auth/createuser";
    
    const response= await fetch(url,{

      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({email:this.state.email,password:this.state.password,name:this.state.name,address:this.state.address})

    });
    
  
    console.log(this.state)
    const json1=await response.json();
    console.log(json1)
    if(json1.success)
    {
         window.location='/'
    }
    else
    {
        alert(json1.message);
    }
    }
    
    render() {
        return (
            <div>
            <div className={`${signup.mybody}`}>
              <form  >
              <div className="container">
                <div
                  className={`row d-flex justify-content-center align-items-center ${signup.signtop}`}
                >
                  <div className={`col-6 ${signup.signcol}`}>
                    <div className="container my-5">
                      <div className={`row ${signup.myh1}`}>
                        <h2>Register</h2>
                      </div>
    
                      {/* started */}
    
                      <div
                        className={`row ${signup.mycontact} d-flex justify-content-center`}
                      >
                        <div className="col-6">
                          <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">
                              Name
                            </label>
                            <input
                              type="name"
                              name="name"
                              className="form-control"
                              id="exampleInputEmailname"
                              aria-describedby="emailHelp"
                              value={this.state.name}
                              onChange={this.OnNameChange}
                            />
                          </div>
                          <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">
                              Email address
                            </label>
                            <input
                              type="email"
                              name="email"
                              className="form-control"
                              id="exampleInputEmail1"
                              aria-describedby="emailHelp"
                              value={this.state.email}
                              onChange={this.OnEmailChange}
                            />
                          </div>
                          <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">
                              Password
                            </label>
                            <input
                              type="password"
                              name="password"
                              className="form-control"
                              id="exampleInputPassword1"
                              value={this.state.password}
                              onChange={this.OnPasswordChange}
                            />
                          </div>
                          <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">
                              Address
                            </label>
                            <input
                              type="text"
                              name="text"
                              className="form-control"
                              id="exampleInputPasswordtext"
                              value={this.state.address}
                              onChange={this.OnAddressChange}
                            />
                          </div>
                        </div>
                      </div>
    
                      <div className="row  d-flex justify-content-center">
                        <div className={`col-3 ${signup.myh1}`}>
                          <button className="btn btn-dark" type="submit" onClick={this.signup} >
                            Sign Up
                          </button>
                        </div>
                        <div className="col-3">
                          <button className="btn btn-dark" type="submit"   >
                              <a href="/signin">Sign in</a>
                          
                          </button>
                          
                        </div>
                        
                       
                      </div>
                    </div>
    
                    {/* end */}
                  </div>
                </div>
              </div>
              </form>
            </div>
          </div>
        )
    }
}

export default Signup
