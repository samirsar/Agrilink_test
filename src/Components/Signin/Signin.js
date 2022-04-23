import React, { Component } from 'react'
import signin from '../Css/Signin.module.css'
export class Signin extends Component {
    constructor(props){
        super(props);
        this.state={
            email:"",
            password:""
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
    sign=async(e)=>{
        e.preventDefault();
        console.log("Signing kar rahe hai beta");
        let url="http://localhost:5000/api/auth/login";
    
    const response= await fetch(url,{

      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({email:this.state.email,password:this.state.password})

    });
    
  
    console.log(this.state)
    const json1=await response.json();
    console.log(json1)
    if(json1.success)
    {
       localStorage.removeItem('token');
       localStorage.setItem('token',JSON.stringify(json1));
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
        <div className={`${signin.mybody}`}>
          <form  >
          <div className="container">
            <div
              className={`row d-flex justify-content-center align-items-center ${signin.signtop}`}
            >
              <div className={`col-6 ${signin.signcol}`}>
                <div className="container my-5">
                  <div className={`row ${signin.myh1}`}>
                    <h2>Sign In</h2>
                  </div>

                  {/* started */}

                  <div
                    className={`row ${signin.mycontact} d-flex justify-content-center`}
                  >
                    <div className="col-6">
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
                    </div>
                  </div>

                  <div className="row  d-flex justify-content-center">
                    <div className={`col-3 ${signin.myh1}`}>
                      <button className="btn btn-dark" type="submit">
                        <a href="/signup">Singup</a>{" "}
                      </button>
                    </div>
                    <div className="col-3">
                      <button className="btn btn-dark" type="submit"  onClick={this.sign} >
                      Signin
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

export default Signin
