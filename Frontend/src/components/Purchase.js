
import { Link } from "react-router-dom";
import Navbar from "./NavBars";
import React, { Component } from 'react'
 
 export default class Purchase extends Component {
    constructor(props) {
        super(props);
        this.state = {
          ProductID: "",
          qty: "",
          ProductName: "",
          CustomerAddress: "",
          price: "",
          CardNumber: "",
          cvv: "",
          ExDate: "",
         
        };
      }
      handleInputChange = (e) => {
        const { name, value } = e.target;
    
        this.setState({
          ...this.state,
          [name]: value,
        });
      };
      onSubmit = (e) => {
        e.preventDefault();
        const {
            ProductID,
            qty,
            ProductName,
            CustomerAddress,
            price,
            CardNumber,
            cvv,
            ExDate,
          
        } = this.state;
        const data = {
            ProductID: ProductID,
            qty: qty,
            ProductName: ProductName,
            CustomerAddress: CustomerAddress,
            price: price,
            CardNumber: CardNumber,
            cvv: cvv,
            ExDate: ExDate,
            
          };
          console.log(data);
          alert("successfully BUY YOUR ORDER ");
          
          alert(location.href);
          location.href = "/DisplayAllProduct";

          axios
          .post("http://localhost:5000/PurchaseItem/createPurchase/", data)
          .then((res) => {
            if (res.data.success) {
              this.setState({
                ProductID:"",
                qty:"",
                ProductName:"",
                CustomerAddress:"",
                price:"",
                CardNumber:"",
                cvv:"",
                ExDate:"",
              });
            }
          });
      };

   render() {


     return (


        <div className="container">
        <Navbar />

        <br></br>
        <br></br>
        <h1 className="h3 mb-3 font-weight-normal"  style={{
            marginLeft: "40%",
            marginTop: "60px",
            width: "40%",
            color: "red",
          }}>
          {" "} 
          Buy Now {" "}
        </h1>
        <div className="container"  style={{ margin:"50px" ,alignItems:'center' }}  >
        <form className="needs-validation" style={{
            marginLeft: "40%",
            marginTop: "60px",
            width: "40%",
            color: "red",
          }} noValidate>
          <div className="form-group" style={{ marginBottom: `15px` }}>
            <label style={{ marginBottom: `5px`, color:"blue" }}>ProductID </label>
            <input
            style={{ color:"red" , width:"300px" , fontSize:"16px" }}
              type="text"
              className="form-control"
              name="ProductID"
              placeholder="Enter ProductID "
              value={this.state.ProductID}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-group" style={{ marginBottom: `15px` }}>
            <label style={{ marginBottom: `5px` , color:"blue"  }}>qty</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input
               style={{ color:"red" , width:"300px" , fontSize:"16px" }}
              type="text"
              className="form-control"
              name="qty"
              placeholder="enter qty "
              value={this.state.qty}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-group" style={{ marginBottom: `15px`  }}>
            <label style={{ marginBottom: `5px` , color:"blue"}}>Product Name </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input
               style={{ color:"red" , width:"300px" , fontSize:"16px" }}
              type="text"
              className="form-control"
              name="ProductName"
              placeholder="Enter Product  Name "
              value={this.state.ProductName}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-group" style={{ marginBottom: `15px` }}>
            <label style={{ marginBottom: `5px`, color:"blue" }}>Customer Address</label>
            <input
               style={{ color:"red" , width:"300px" , fontSize:"16px",marginLeft: "8%", }}
              type="text"
              className="form-control"
              name="CustomerAddress"
              placeholder="enter Customer Address"
              value={this.state.CustomerAddress}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-group" style={{ marginBottom: `15px` }}>
            <label style={{ marginBottom: `5px` , color:"blue" }}>price </label>
            <input
               style={{ color:"red" , width:"300px" , fontSize:"16px" }}
              type="text"
              className="form-control"
              name="price"
              placeholder="enter  price "
              value={this.state.price}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-group" style={{ marginBottom: `15px` }}>
            <label style={{ marginBottom: `5px` , color:"blue" }}>Card Number</label>
            <input
               style={{ color:"red" , width:"300px" , fontSize:"16px" }}
              type="text"
              className="form-control"
              name="CardNumber"
              placeholder="enter  CardNumber"
              value={this.state.CardNumber}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-group" style={{ marginBottom: `15px` }}>
            <label style={{ marginBottom: `5px` , color:"blue" }}> cvv </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input
               style={{ color:"red" , width:"300px" , fontSize:"16px"  , }}
              type="password"
              className="form-control"
              name="cvv"
              placeholder="  cvv   "
              value={this.state.cvv}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-group" style={{ marginBottom: `15px` }}>
            <label style={{ marginBottom: `5px`, color:"blue"  }}>ExDate </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input
               style={{ color:"red" , width:"300px" , fontSize:"16px" }}
              type="date"
              className="form-control"
              name="ExDate"
              placeholder="enter  ExDate  "
              value={this.state.ExDate}
              onChange={this.handleInputChange}
            />
          </div>

    
          <button
            className="button"
            type="submit"
            style={{ marginTop: "16px" , color:"white" , backgroundColor:"black" , fontSize:"20px" , marginBottom:"20px",marginLeft: "24%"}}
            onClick={this.onSubmit}
          >
            {" "}
            <i className="far fa-check-square"></i>
            &nbsp;Buy Now
          </button>

<Link to ="/DisplayAllProduct">
          <button
            className="button"
            type="submit"
            style={{ marginTop: "16px" , color:"white" , backgroundColor:"black" , fontSize:"20px" , marginBottom:"20px",marginLeft: "24%"}}
          
          >
            {" "}
            <i className="far fa-check-square"></i>
            &nbsp;Back
          </button>
          </Link>
        </form>
        </div>
      </div>


     )
   }
 }
 