import React from "react";
import Navbar from "./NavBars";
import { Link } from "react-router-dom";

const RegisterSelectPage = () => {
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
            <h1>Registrations Select Page</h1>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
            <Link to="/cuslogin">
            <button  type="button">
            
                login As a Customer </button>
                </Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         
            <Link to="/TradeLogin">
            <button  type="button">
            
                login  As a Trader </button>
                </Link>

    
 

          </box>
        </div>
      </div>
    </div>
  );
};

export default RegisterSelectPage;
