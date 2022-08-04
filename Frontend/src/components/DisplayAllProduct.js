import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "./NavBars";
import "./Navbar.css";

const DisplayAllProduct = ({}) => {

  const [Product, setProduct] = useState([]);
  const [serachItem,setserachItem] =useState([]);

  async function getd() {
    try {
      const res = await axios.get("http://localhost:5000/Items/getAllProduct/");
      console.log(res.data.data);
      setProduct(res.data.data);

      console.log(Product);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(async () => {
    await getd();

    // console.log(Product.data);
  }, []);

  
  function list() {

    
    console.log(Product);
    const data = Product.data;
    console.log(data);
    


    return Product.map((currentProduct, index) => {
      
      return (
        <tr key={index}>
    
          &nbsp;&nbsp;&nbsp;
          <th scope="row"> P:{index + 1}</th>
          <div className="row form-group">
            <div className="col-sm-10">
              <h4>
                {currentProduct.newProduct.name} -------- ${" "}
                {currentProduct.newProduct.price}/.00
              </h4>
            </div>
            <div className="col-sm-2 text-right">
              ItemNumber: {currentProduct.newProduct.id}
            </div>
          </div>
          <div className="row btn-toolbar">
            <div className="col-6">
              <br></br>
            

            
              <Link to =
              {{
    
      }}>

<Link
  to={{
    pathname: "/CartList",
    data: Product 
  }}
/>
  



    </Link>
    &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;
    <Link to="/Purchase">
              <button className="button">buy </button>     </Link>&nbsp;
            </div>
             
            <Link to="/CartList">
              <button className="button">add to cart </button>     </Link>

            &nbsp;&nbsp;&nbsp;
            <div className="col-6 text-right">
           
              &nbsp;&nbsp;&nbsp;{" "}
            
            </div>

          </div>
          <hr />
        </tr>
      );
    });
  }

  return (


   

    <div>
  
      <br></br>
      <div
        style={{
          marginLeft: "40%",
          marginTop: "60px",
          width: "40%",
          color: "red",
        }}
      >
        <box color="white" bgcolor="palevioletred" p={1}>
          <h1>All Item Page</h1>
        </box>
      </div>

      <Navbar />

      <br></br>
     
      <br></br>
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <div className="col-lg-9 mt-2 mb-2"></div>
            </tr>
          </thead>

          <tbody>{list()}</tbody>
        </table>
      </div>
    </div>
  );
  
};

export default DisplayAllProduct;
