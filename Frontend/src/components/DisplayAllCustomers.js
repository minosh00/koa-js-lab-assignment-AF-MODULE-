import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "./NavBars";

const DisplayAllCustomers = () => {
  const [Cusaccount, setCusaccount] = useState([]);

  async function getd() {
    try {
      const res = await axios.get(
        "http://localhost:5000/Customer/getAllCustomerAccount"
      );
      console.log(res.data.data);
      setCusaccount(res.data.data);
      console.log(Cusaccount);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(async () => {
    await getd();

    // console.log(Product.data);
  }, []);

  function lista() {
    console.log(Cusaccount);
    const data = Cusaccount.data;
    console.log(data);
    return Cusaccount.map((currentCusaccount, index) => {
      return (
        <tr key={index}>
          <th scope="row">{index + 1}</th>&nbsp;
          <td>{currentCusaccount.newCustomerAccount.CustomerName}</td>&nbsp;
          <td>{currentCusaccount.newCustomerAccount.Email}</td>&nbsp;
          <td>{currentCusaccount.newCustomerAccount.CustomerPhonenumber}</td> &nbsp;
          <td>{currentCusaccount.newCustomerAccount.CustomerAddress1}</td>&nbsp;
          <td>{currentCusaccount.newCustomerAccount.CustomerAddress2}</td>&nbsp;
          <td>{currentCusaccount.newCustomerAccount.Country}</td>&nbsp;
          <td>{currentCusaccount.newCustomerAccount.state}</td>&nbsp;
          <td>{currentCusaccount.newCustomerAccount.postalCode}</td>&nbsp;
        </tr>
      );
    });
  }

  return (
    <div className="container">
      <Navbar />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <table className="table">
        <thead>
          <tr>
            <th Scope="col"> ID of customer </th>&nbsp;
            <th Scope="col"> Customer Name </th>&nbsp;
            <th Scope="col"> Email </th>&nbsp;
            <th Scope="col"> Customer Phone number </th>&nbsp;
            <th Scope="col">Customer Address 1 </th>&nbsp;
            <th Scope="col">Customer Address 2 </th>&nbsp;
            <th Scope="col"> Country </th>&nbsp;
            <th Scope="col">state </th>&nbsp;
            <th Scope="col">postal Code</th>&nbsp;
            <div className="col-lg-9 mt-2 mb-2"></div>
          </tr>
        </thead>

        <tbody>{lista()}</tbody>
      </table>
    </div>
  );
};

export default DisplayAllCustomers;
