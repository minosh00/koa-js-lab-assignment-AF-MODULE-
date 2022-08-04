import React, { useState, useEffect, Component } from "react";
import axios, { Axios } from "axios";
import Navbar from "./NavBars";
import { Link } from "react-router-dom";

export default class AddPromotion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      qty: "",
      specialprice: "",
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
    const { id, name, qty, specialprice } = this.state;

    const data = {
      id: id,
      name: name,
      qty: qty,
      specialprice: specialprice,
    };
    console.log(data);
    alert("Successfully add product ");

    axios
      .post("http://localhost:5000/Promotion/AddPromotion", data)
      .then((res) => {
        if (res.data.success) {
          this.setState({
            id: "",
            name: "",
            specialprice: "",
            qty: "",
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
          Add promotions{" "}
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
          <div className="container">
            <label
              style={{ marginBottom: `5px`, color: "blue", fontSize: "16px" }}
            >
              name
            </label>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input
              type="text"
              style={{ color: "red", width: "300px", fontSize: "16px" }}
              className="form-control"
              name="name"
              placeholder="enter product name "
              value={this.state.name}
              onChange={this.handleInputChange}
            />
          </div>
          <br></br>

          <div className="form-group" style={{ marginBottom: `15px` }}>
            <label
              style={{ marginBottom: `5px`, fontSize: "16px", color: "blue" }}
            >
              product id
            </label>
            <input
              type="text"
              style={{ color: "red", width: "300px", fontSize: "16px" }}
              className="form-control"
              name="id"
              placeholder="Enter  product  id"
              value={this.state.id}
              onChange={this.handleInputChange}
            />
          </div>
          <br></br>

          <div className="form-group" style={{ marginBottom: `15px` }}>
            <label style={{ marginBottom: `5px`, color: "blue" }}>
              quantity
            </label>
            &nbsp;&nbsp;&nbsp;
            <input
              type="text"
              style={{ color: "red", width: "300px", fontSize: "16px" }}
              className="form-control"
              name="qty"
              placeholder="Enter quantity"
              value={this.state.qty}
              onChange={this.handleInputChange}
            />
          </div>
          <br></br>
          <div className="form-group" style={{ marginBottom: `15px` }}>
            <label style={{ marginBottom: `5px`, color: "blue" }}>
              {" "}
              special
              price&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </label>
            <input
              type="text"
              style={{ color: "red", width: "300px", fontSize: "16px" }}
              className="form-control"
              name="specialprice"
              placeholder="enter specialprice"
              value={this.state.specialprice}
              onChange={this.handleInputChange}
            />
          </div>
          <br></br>

          <button
            className="button"
            type="submit"
            style={{
              marginTop: "16px",
              color: "white",
              backgroundColor: "black",
              fontSize: "20px",
              marginBottom: "20px",
            }}
            onClick={this.onSubmit}
          >
            {" "}
            &nbsp;Add promotion
          </button>
         
        </form>

        <Link to="/ViewPromotion">
              <button type="button"> back </button>
            </Link>
      </div>
    );
  }
}
