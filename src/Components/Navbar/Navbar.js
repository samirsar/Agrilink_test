import React, { Component } from 'react'
import navbar from '../Css/Navbar.module.css'
export class Navbar extends Component {
    constructor(props)
    {
        super(props);

        
        let obj=localStorage.getItem('token');
        obj=JSON.parse(obj);

        let flag=1;
        if(obj!=null)
        {
            flag=0;
        }
        this.state={
            logout:flag
        }
        
    }
    handlclick=()=>{
      localStorage.removeItem('token');
      this.setState({
          logout:1
      })

      window.location='/signin'

    }
    render() {
        

        return (
            <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Samir7</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link " aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Contact Us</a>
            </li>
          
            
            
          </ul>
          
          <form className="d-flex">
          
            <div className={`row ${navbar.hii}`}>
              
              <div className={`col-4 mx-2 ${!this.state.logout?"d-none":"d-one"}`}>
            <button className="btn btn-success" type="submit"> <a href='/signup'> Signup </a>  </button>
    
              </div>
              <div className={`col-4 ${!this.state.logout?"d-none":"d-one"}`}>
            <button className="btn btn-success" type="submit"> <a href='/signin'>Signin </a>   </button>
    
              </div>
    <div className={`col-4 mx-2  ${this.state.logout?"d-none":"d-one"}`}>
    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
      Signout
    </button>
    
    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className={`modal-content ${navbar.mymodal}`}>
          <div className="modal-header">
            {/* <h5 className="modal-title" id="staticBackdropLabel">Hii {this.state.email} </h5> */}
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            Are you sure want to logout ?
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">No</button>
            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={this.handlclick}>Yes</button>
          </div>
        </div>
      </div>
    </div>
    
     </div> 
         
            </div>
          </form>
        </div>
      </div>
    </nav>
    

          </div>
        )
    }
}

export default Navbar
