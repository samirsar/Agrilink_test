import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";

import dp from "../../image/photo.jpg";
import ReactRoundedImage from "react-rounded-image";
import profile from '../Css/Profile.modulo.css'

export class Profile extends Component {
  constructor(props) {
    super(props);
    this.state={
        data:{
            name:"",
            email:"",
            address:"",
            id:""
        },
        
    }
    let obj= localStorage.getItem('token');
    let obj1=JSON.parse(obj);

    if(obj==null)
    {
        console.log("hiii meyi jaan")
        window.location='/signin'
    }

    
  }

  componentDidMount=async()=>{
     

    let url="http://localhost:5000/api/auth/getuser";

    let obj=localStorage.getItem('token');
    obj=JSON.parse(obj);

    let response=await fetch(url,{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'auth_token':obj.auth_token
        }

    })

    let json1=await response.json();

    this.setState({
        data:{
          id:json1._id,
          name:json1.name,
          email:json1.email,
          address:json1.address
        }
    },()=>console.log(this.state))


      
  }
  OnNameChange=(e)=>{

    this.setState({

      data:{
        id:this.state.data.id,
        name:e.target.value,
        email:this.state.data.email,
        address:this.state.data.address

      }
      
    })

  }
  OnAddressChange=(e)=>{
    this.setState({

      data:{
        id:this.state.data.id,
        name:this.state.data.name,
        email:this.state.data.email,
        address:e.target.value
      }
      
    })


  }
  update=async()=>{

    console.log(this.state.data.id,"Kya problem")

    let url="http://localhost:5000/api/auth/updateprofile";

    let respone=await fetch(url,{
      method:'POST',
      headers:{
         'Content-Type':'application/json'
      },
      body:JSON.stringify({id:this.state.data.id,name:this.state.data.name,address:this.state.data.address})
    })

    let json1 =await respone.json();
    console.log(json1,"hii",this.state);
    if(json1.success)
    {
               alert("Your profile has been completed")
    }
    else
    {
      alert("Somethin error")
    }

  }
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="row">
            <h2>{this.state.data.name}'s Profile</h2>
          </div>
          <div className="row my-4">
            <div className="col-4">
              <div className="card d-flex justify-content-center align-items-center">
                <ReactRoundedImage image={dp} />
                <div className="card-body">
                  <h5 className="card-title">{this.state.data.name}</h5>
                  <p className="card-text">
                    I am {this.state.data.name} from {this.state.data.address} and I am currently persuing my Btech degree from <strong>INDIAN INSTITUTE OF TECHNOLOGY BHU (VARANASI)</strong>
                  </p>
                  <a href="#" className="btn btn-dark">
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
            <div className="col-8">
            <div className="card d-flex justify-content-center ">
                <div className="card-body">
                  <h5 className="card-title">{this.state.data.name}' Detail</h5>
                
                     {/* <div className="row">
                         <h5>Name: {this.state.data.name}</h5>
                     </div>
                     <div className="row">
                         <h5>Email: {this.state.data.email}</h5>
                     </div>
                     <div className="row">
                         <h5>Address: {this.state.data.address}</h5>
                     </div> */}
                     <div
                        className={`row ${profile.mycontact} d-flex justify-content-center`}
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
                              value={this.state.data.name}
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
                              value={this.state.data.email}
                              disabled
                            
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
                              value={this.state.data.address}
                              onChange={this.OnAddressChange}
                            />
                          </div>
                        </div>
                      </div>
                  <a href="#" className="btn btn-success" onClick={this.update}>
                    Update Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
