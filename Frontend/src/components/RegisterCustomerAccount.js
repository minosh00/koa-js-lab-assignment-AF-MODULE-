import React, { useState, useEffect, Component } from "react";
import axios, { Axios } from "axios";
import Navbar from "./NavBars";

import { Link } from "react-router-dom";

export default class RegisterCustomerAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      CustomerNic: "",
      CustomerName: "",
      email: "",
      CustomerPhonenumber: "",
      CustomerAddress1: "",
      password: "",
      Country: "",
      state: "",
      postalCode: "",
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
      CustomerNic,
      CustomerName,
      email,
      CustomerPhonenumber,
      CustomerAddress1,
      password,
      Country,
      state,
      postalCode,
    } = this.state;

    const data = {
      CustomerNic: CustomerNic,
      CustomerName: CustomerName,
      email: email,
      CustomerPhonenumber: CustomerPhonenumber,
      CustomerAddress1: CustomerAddress1,
      password: password,
      Country: Country,
      state: state,
      postalCode: postalCode,
    };
    console.log(data);
    alert("successfully create customer profile");

    alert(location.href);
    location.href = "/cuslogin";

    axios
      .post("http://localhost:5000/Customer/createCustomerAccount", data)
      .then((res) => {
        if (res.data.success) {
          this.setState({
            CustomerNic: "",
            CustomerName: "",
            email: "",
            CustomerPhonenumber: "",
            CustomerAddress1: "",
            password: "",
            Country: "",
            state: "",
            postalCode: "",
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
          Create customer profile{" "}
        </h1>
        <div className="container"  style={{ margin:"50px" ,alignItems:'center' }}  >
        <form className="needs-validation" style={{
            marginLeft: "40%",
            marginTop: "60px",
            width: "40%",
            color: "red",
          }} noValidate>
          <div className="form-group" style={{ marginBottom: `15px` }}>
            <label style={{ marginBottom: `5px`, color:"blue" }}>Customer Nic Number </label>
            <input
            style={{ color:"red" , width:"300px" , fontSize:"16px" }}
              type="text"
              className="form-control"
              name="CustomerNic"
              placeholder="Enter Customer Nic number "
              value={this.state.CustomerNic}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-group" style={{ marginBottom: `15px` }}>
            <label style={{ marginBottom: `5px` , color:"blue"  }}>Customer Name</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input
               style={{ color:"red" , width:"300px" , fontSize:"16px" }}
              type="text"
              className="form-control"
              name="CustomerName"
              placeholder="enter Customer Name"
              value={this.state.CustomerName}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-group" style={{ marginBottom: `15px`  }}>
            <label style={{ marginBottom: `5px` , color:"blue"}}>Email </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input
               style={{ color:"red" , width:"300px" , fontSize:"16px" }}
              type="Email"
              className="form-control"
              name="email"
              placeholder="Enter Email account "
              value={this.state.email}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-group" style={{ marginBottom: `15px` }}>
            <label style={{ marginBottom: `5px`, color:"blue" }}>Phone number</label>
            <input
               style={{ color:"red" , width:"300px" , fontSize:"16px",marginLeft: "8%", }}
              type="text"
              className="form-control"
              name="CustomerPhonenumber"
              placeholder="enter Phone number"
              value={this.state.CustomerPhonenumber}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-group" style={{ marginBottom: `15px` }}>
            <label style={{ marginBottom: `5px` , color:"blue" }}>Customer Address 1 </label>
            <input
               style={{ color:"red" , width:"300px" , fontSize:"16px" }}
              type="text"
              className="form-control"
              name="CustomerAddress1"
              placeholder="enter  Address1 "
              value={this.state.CustomerAddress1}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-group" style={{ marginBottom: `15px` }}>
            <label style={{ marginBottom: `5px` , color:"blue" }}>Password </label>
            <input
               style={{ color:"red" , width:"300px" , fontSize:"16px" }}
              type="password"
              className="form-control"
              name="password"
              placeholder="enter  password "
              value={this.state.password}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-group" style={{ marginBottom: `15px` }}>
            <label style={{ marginBottom: `5px` , color:"blue" }}> Country </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input
               style={{ color:"red" , width:"300px" , fontSize:"16px"  , }}
              type="text"
              className="form-control"
              name="Country"
              placeholder="  Country name   "
              value={this.state.Country}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-group" style={{ marginBottom: `15px` }}>
            <label style={{ marginBottom: `5px`, color:"blue"  }}>state </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input
               style={{ color:"red" , width:"300px" , fontSize:"16px" }}
              type="text"
              className="form-control"
              name="state"
              placeholder="enter  state  "
              value={this.state.state}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-group" style={{ marginBottom: `15px` }}>
            <label style={{ marginBottom: `5px` , color:"blue"  }}>postal Code </label>
            <input
               style={{ color:"red" , width:"300px"  , fontSize:"16px" ,marginLeft: "7%",}}
              type="text"
              className="form-control"
              name="postalCode"
              placeholder="enter  postal Code  "
              value={this.state.postalCode}
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
            &nbsp;Create account 
          </button>
        </form>
        </div>
      </div>
    );
  }
}
