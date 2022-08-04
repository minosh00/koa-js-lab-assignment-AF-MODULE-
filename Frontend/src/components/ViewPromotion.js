import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "./NavBars";

const ViewPromotion = () => {
  const [Promotion, setPromotion] = useState([]);

  async function getd() {
    try {
      const res = await axios.get(
        "http://localhost:5000/Promotion/getAllProductPromotion"
      );
      console.log(res.data.data);
      setPromotion(res.data.data);
      console.log(Promotion);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(async () => {
    await getd();

    // console.log(Product.data);
  }, []);

  function lista() {
    console.log(Promotion);
    const data = Promotion.data;
    console.log(data);
    return Promotion.map((currentPromotion, index) => {
      return (
        <tr key={index}>
          <th scope="row">{index + 1}</th>&nbsp;
          <td>{currentPromotion.ProductPromotion.id}</td>&nbsp;
          <td>{currentPromotion.ProductPromotion.name}</td>&nbsp;
          <td>{currentPromotion.ProductPromotion.qty}</td> &nbsp;
          <td>{currentPromotion.ProductPromotion.specialprice}</td>&nbsp;
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
      <Link to="/TraderHome">
              <button type="button"> back </button>
            </Link>
      <br></br> <br></br>
      <Link to="/AddPromotion">
              <button type="button"> Add promotions </button>
            </Link>
            <br></br>
      <br></br>
      <table className="table">
          
        <thead>
          <tr>
            <th Scope="col"> ID </th>&nbsp;
            <th Scope="col"> product id </th>&nbsp;
            <th Scope="col"> name </th>&nbsp;
            <th Scope="col"> qty </th>&nbsp;
            <th Scope="col">price special </th>&nbsp;
            <div className="col-lg-9 mt-2 mb-2"></div>
          </tr>
        </thead>

        <tbody>{lista()}</tbody>
      </table>
    </div>
  );
};

export default ViewPromotion;
