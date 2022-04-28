import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar'

export class Reports extends Component {

    constructor(props)
  {
      super(props);

      this.state={
        login:0,
        userID:"",
        marktetID:"",
        marketName:"",
        cmdtyID:"",
        marketType:"",
        cmdtyName:"",
        priceUnit:"",
        convFctr:-1,
        price:-1,
        report:[]
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
         login:1,
         data:json1,
         userID:json1._id
       },()=>console.log(this.state))
    }
  
  


    console.log(json1)
  }
  
  }

  OnuserID=(e)=>{
      this.setState({
        userID:e.target.value

      })
  }
  OnmarktetID=(e)=>{
      this.setState({
        marktetID:e.target.value


      })
  }
  OnmarketName=(e)=>{
      this.setState({
        marketName:e.target.value

      })
  }
  OncmdtyID=(e)=>{
      this.setState({
        cmdtyID:e.target.value

      })
  }
  OnmarketType=(e)=>{
      this.setState({
        marketType:e.target.value

      })
  }
  OncmdtyName=(e)=>{
      this.setState({
        cmdtyName:e.target.value

      })
  }
  OnpriceUnit=(e)=>{
      this.setState({
        priceUnit:e.target.value

      })
  }
  OnconvFctr=(e)=>{
      this.setState({
        convFctr:e.target.value

      })
  }
  Onprice=(e)=>{
      this.setState({
        price:e.target.value
        

      })
  }


  click=async ()=>{
      
    let obj={
        userID:this.state.userID,
        marktetID:this.state.marktetID,
        marketName:this.state.marketName,
        cmdtyID:this.state.cmdtyID,
        marketType:this.state.marketType,
        cmdtyName:this.state.cmdtyName,
        priceUnit:this.state.priceUnit,
        convFctr:this.state.convFctr,
        price:this.state.price

    }

    let url="http://localhost:5000/api/report/createreport";

    let res=await fetch(url,{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({reportDetails:obj
        })
    })

    let json1=await res.json();

    console.log(json1)
  }

  

  
    render() {
        return (
            <div>
                <Navbar/>

                <div className="cotainer">
                    <div className="row d-flex justify-content-center">
                         <div className="col-2">
                             <div className="row my-4">
                             <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Post Report</button>
                             <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Post NewReport</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <form>
          <div className="mb-3">
            <label htmlFor="recipient-name" className="col-form-label"  >UserId</label>
            <input type="text" className="form-control" id="recipient-name " onChange={this.OnuserID} value={this.state.userID} disabled/>
          </div>
          <div className="mb-3">
            <label htmlFor="recipient-name" className="col-form-label">markteID</label>
            <input type="text" className="form-control" id="recipient-name" onChange={this.OnmarktetID} value={this.state.marktetID}/>
          </div>
          <div className="mb-3">
            <label htmlFor="recipient-name" className="col-form-label">markteName</label>
            <input type="text" className="form-control" id="recipient-name" onChange={this.OnmarketName} value={this.state.marketName}/>
          </div>
          <div className="mb-3">
            <label htmlFor="recipient-name" className="col-form-label">cmdtyID</label>
            <input type="text" className="form-control" id="recipient-name" onChange={this.OncmdtyID} value={this.state.cmdtyID}/>
          </div>
          <div className="mb-3">
            <label htmlFor="recipient-name" className="col-form-label">marketType</label>
            <input type="text" className="form-control" id="recipient-name" onChange={this.OnmarketType} value={this.state.marketType}/>
          </div>
          <div className="mb-3">
            <label htmlFor="recipient-name" className="col-form-label">cmdtyName</label>
            <input type="text" className="form-control" id="recipient-name" onChange={this.OncmdtyName} value={this.state.cmdtyName}/>
          </div>
          <div className="mb-3">
            <label htmlFor="recipient-name" className="col-form-label">PriceUnit</label>
            <input type="text" className="form-control" id="recipient-name" onChange={this.OnpriceUnit} value={this.state.priceUnit}/>
          </div>
          <div className="mb-3">
            <label htmlFor="recipient-name" className="col-form-label">convFctr</label>
            <input type="number" className="form-control" id="recipient-name" onChange={this.OnconvFctr} value={this.state.convFctr}/>
          </div>
          <div className="mb-3">
            <label htmlFor="recipient-name" className="col-form-label">Price</label>
            <input type="number" className="form-control" id="recipient-name" onChange={this.Onprice} value={this.state.price}/>
          </div>
          
        </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={this.click}>Post</button>
      </div>
    </div>
  </div>
</div>
                             </div>
                             <div className="row">
                             <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal1" data-bs-whatever="@mdo">Get Post</button>
                             <div className="modal fade" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">All reports</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <form>
          
          <div className="mb-3">

              {this.state.report.map(function(name,key){
    

                       return name;
              })}
            

            
            
          </div>
        </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
                                 
                             </div>
                         </div>
                    </div>
                </div>


            </div>
        )
    }
}

export default Reports
