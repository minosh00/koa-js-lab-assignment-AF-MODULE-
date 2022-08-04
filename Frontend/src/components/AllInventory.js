import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { getallItems } from './services/product';
import Navbar from "./NavBars";

const AllInventory = () => {
  const [Product, setProduct] = useState([]);

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
  const [Inventories, setInventories] = useState([]);
 
  const getAllItemList = async () => {
      let data = await getallItems();
      console.log("cus data",data);
      setInventories(data.data.data);
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
          <th scope="row">{index + 1}</th>&nbsp;

          <td>{currentProduct.newProduct.id}</td>&nbsp;
          <td>{currentProduct.newProduct.name}</td>&nbsp;
          <td>{currentProduct.newProduct.price}</td>&nbsp;
          <td>{currentProduct.newProduct.qty}</td>&nbsp;
 <td>  <a href={`/updateProductByID/${currentProduct?.id}`} className='' >Edit</a>
</td>
                        
          &nbsp;
             
         
        </tr>
      );
    });
  }

  return (
    <div className="container">
      <br></br>
<br></br>
      <Navbar />

<br></br>
<br></br>
      <table className="table">
        <thead>
          <tr>
          <th Scope="col">  id </th>&nbsp;
            <th Scope="col"> product id </th>&nbsp;
            <th Scope="col"> product name  </th>&nbsp;
            <th Scope="col">product price  </th>&nbsp;
            <th Scope="col">product  quantity </th>&nbsp;
            <th Scope="col">action </th>&nbsp;
            

          

            <div className="col-lg-9 mt-2 mb-2"></div>
          </tr>
        </thead>

        <tbody>{list()}</tbody>
      </table>
    </div>
  );
};

export default AllInventory;