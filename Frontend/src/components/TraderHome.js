import React from "react";
import Navbar from "./NavBars";
import { Link } from "react-router-dom";

const TraderHome = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.removeItem("userRole");
    navigate('/')
    }
    
  return (
    <div>
      <Navbar />
      <br></br>
      <br></br>
      <br></br>
      <div className="container">
        <div
          style={{
            marginLeft: "40%",
            marginTop: "60px",
            width: "40%",
            color: "red",
          }}
        >
          <box color="white" bgcolor="palevioletred" p={1}>
            <h1>welcome Trader page </h1>
            <button onClick={handleSubmit} className="btn btn-primary" type="submit" style={{float:"right"}}>
                      Logout
                  </button>
            <br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
            <Link to="/AddProduct">
              <button type="button">Add item </button>
            </Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/DisplayAllCustomers">
              <button type="button">view customer </button>
            </Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/ViewPromotion">
              <button type="button">promotions </button>
            </Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   <Link to="/AllProduct">
              <button type="button">All products </button>
            </Link>
          </box>
        </div>
      </div>
    </div>
  );
};

export default TraderHome;
