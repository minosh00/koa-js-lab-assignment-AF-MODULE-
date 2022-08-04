import React, { useState, useEffect, Component } from "react";
import axios, { Axios } from "axios";
import Navbar from "./NavBars";
import { Link } from "react-router-dom";

export default class RegisterTraderAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      TraderNic: "",
      TraderName: "",
      email: "",
      TraderPhoneNumber: "",
      password: "",
      BusinessCompanyName: "",
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
      TraderNic,
      TraderName,
      email,
      TraderPhoneNumber,
      password,
      BusinessCompanyName,
      Country,
      state,
      postalCode,
    } = this.state;

    const data = {
      TraderNic: TraderNic,
      TraderName: TraderName,
      email: email,
      TraderPhoneNumber: TraderPhoneNumber,
      password: password,
      BusinessCompanyName: BusinessCompanyName,
      Country: Country,
      state: state,
      postalCode: postalCode,
    };
    console.log(data);
    alert("successfully create trader profile");
     
    alert(location.href);
    location.href = "/TradeLogin";

    axios
      .post("http://localhost:5000/Trader/createTraderAccount/", data)
      .then((res) => {
        if (res.data.success) {
          this.setState({
            TraderNic: "",
            TraderName: "",
            email: "",
            TraderPhoneNumber: "",
            password: "",
            BusinessCompanyName: "",
            Country: "",
            state: "",
            postalCode: "",
          });
        }
      });
  };

  render() {
    return (
      <div className="col-md-8-mt-4 mx-auto">
        <Navbar />

        <br></br>
        <br></br>

        <h1
          className="h3 mb-3 font-weight-normal"
          style={{
            marginLeft: "40%",
            marginTop: "60px",
            width: "40%",
            color: "red",
          }}
        >
          {" "}
          Create trader profile{" "}
        </h1>
        <form
          className="needs-validation"
          style={{
            marginLeft: "40%",
            marginTop: "60px",
            width: "40%",
            color: "red",
          }}
          noValidate
        >
          <div className="form-group" style={{ marginBottom: `15px` }}>
            <label style={{ marginBottom: `5px`, color: "blue" }}>
              Trader Nic Number{" "}
            </label>
            <input
              style={{ color: "red", width: "300px", fontSize: "16px" }}
              type="text"
              className="form-control"
              name="TraderNic"
              placeholder="Enter trader Nic number "
              value={this.state.TraderNic}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-group" style={{ marginBottom: `15px` }}>
            <label style={{ marginBottom: `5px`, color: "blue" }}>
              Trader Name
            </label>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input
              style={{ color: "red", width: "300px", fontSize: "16px" }}
              type="text"
              className="form-control"
              name="TraderName"
              placeholder="enter Trader Name"
              value={this.state.TraderName}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-group" style={{ marginBottom: `15px` }}>
            <label style={{ marginBottom: `5px`, color: "blue" }}>
              Trader Email{" "}
            </label>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input
              style={{ color: "red", width: "300px", fontSize: "16px" }}
              type="Email"
              className="form-control"
              name="email"
              placeholder="Enter Email account "
              value={this.state.email}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-group" style={{ marginBottom: `15px` }}>
            <label style={{ marginBottom: `5px`, color: "blue" }}>
              Phone number
            </label>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input
              style={{ color: "red", width: "300px", fontSize: "16px" }}
              type="text"
              className="form-control"
              name="TraderPhoneNumber"
              placeholder="enter Phone number"
              value={this.state.TraderPhoneNumber}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-group" style={{ marginBottom: `15px` }}>
            <label style={{ marginBottom: `5px`, color: "blue" }}>
            password {" "}
            </label>
            <input
              style={{ color: "red", width: "300px", fontSize: "16px" }}
              type="password"
              className="form-control"
              name="password"
              placeholder="enter  password "
              value={this.state.password}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-group" style={{ marginBottom: `15px` }}>
            <label style={{ marginBottom: `5px`, color: "blue" }}>
              {" "}
              Business Company Name{" "}
            </label>
            <input
              style={{ color: "red", width: "300px", fontSize: "16px" }}
              type="text"
              className="form-control"
              name="BusinessCompanyName"
              placeholder="enter  Business  Company Name "
              value={this.state.BusinessCompanyName}
              onChange={this.handleInputChange}
            />
          </div>

          
        



          <div className="form-group" style={{ marginBottom: `15px` }}>
            <label style={{ marginBottom: `5px`, color: "blue" }}>
              {" "}
              Country{" "}
            </label>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input
              style={{ color: "red", width: "300px", fontSize: "16px" }}
              type="text"
              className="form-control"
              name="Country"
              placeholder="  Country name   "
              value={this.state.Country}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-group" style={{ marginBottom: `15px` }}>
            <label style={{ marginBottom: `5px`, color: "blue" }}>state </label>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input
              style={{ color: "red", width: "300px", fontSize: "16px" }}
              type="text"
              className="form-control"
              name="state"
              placeholder="enter  state  "
              value={this.state.state}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-group" style={{ marginBottom: `15px` }}>
            <label style={{ marginBottom: `5px`, color: "blue" }}>
              postal Code{" "}
            </label>
            <input
              style={{ color: "red", width: "300px", fontSize: "16px" }}
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
            style={{
              marginTop: "16px",
              color: "white",
              backgroundColor: "black",
              fontSize: "20px",
              marginBottom: "20px",
              marginLeft: "20%",
            }}
            onClick={this.onSubmit}
          >
            {" "}
            <i className="far fa-check-square"></i>
            &nbsp;Create account
          </button>
        </form>
      </div>
    );
  }
}
