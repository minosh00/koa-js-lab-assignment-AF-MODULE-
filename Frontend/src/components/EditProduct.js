import { Link } from "react-router-dom";
import Navbar from "./NavBars";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getItemsByID, UpdateItem } from "../components/services/product";

export default function EditProduct() {
  const navigate = useNavigate();
  const params = useParams();

  const [name, setmName] = useState("");
  const [price, setPrice] = useState("");
  const [id, setId] = useState("");
  const [qty, setqty] = useState("");

  const handleItemName = (e) => {
    setmName(e.target.value);
  };

  const handlebrandName = (e) => {
    setPrice(e.target.value);
  };

  const handlemodel = (e) => {
    setId(e.target.value);
  };

  const handleprice = (e) => {
    setqty(e.target.value);
  };

  const handleUpdateItem = async (e) => {
    e.preventDefault();
    if (name === "" || id === "" || price === "" || qty === "") {
      alert("Insert All the data");
    } else {
      let newdata = {
        name: name,
        price: price,
        qty: qty,
        id: id,
      };
      let data = await UpdateItem(newdata, params.id);
      console.log("Item return data", data);
      navigate("/");
    }
  };

  const getItem = async () => {
    let data = await getItemsByID(params.id);
    alert("updated");

    console.log("Item", data.data.data.data);
    setmName(data.data.data.data.newProduct.name);
    setPrice(data.data.data.data.newProduct.price);
    setId(data.data.data.data.newProduct.id);
    setqty(data.data.data.data.newProduct.qty);
  };

  useEffect(() => {
    getItem();
  }, []);

  return (
    <div>
      <br />
      <Navbar />

<br></br>
<br></br>
      <br />
      <div>
        <center>
          <h1>Update product</h1>
          <form>
            <label className="label"> id</label>
            <input
              onChange={handleItemName}
              className="input"
              value={id}
              type="text"
            />
            <br />
            <br />

            <label className="label"> Name</label>
            <input
              onChange={handlebrandName}
              className="input"
              value={name}
              type="email"
            />
            <br />
            <br />

            <label className="label">price</label>
            <input
              onChange={handlemodel}
              className="input"
              value={price}
              type="text"
            />
            <br />
            <br />

            <label className="label">qty</label>
            <input
              onChange={handleprice}
              className="input"
              value={qty}
              type="text"
            />
            <br />
            <br />

            <button
              className="button"
              onClick={handleUpdateItem}
              type="submit"
      
              style={{
                marginTop: "16px",
                color: "white",
                backgroundColor: "black",
                fontSize: "20px",
                marginBottom: "20px",
                marginLeft: "2%",
              }}


            >
              {" "}
              <i className="far fa-check-square"></i>
              &nbsp;update
             

            </button>

          
          </form>
          <Link to="/AllProduct" className="item">
          <button
              className="button"
           
              type="submit"
         
              style={{
                marginTop: "16px",
                color: "white",
                backgroundColor: "black",
                fontSize: "20px",
                marginBottom: "20px",
                marginLeft: "2%",
              }}
            >
              {" "}
              <i className="far fa-check-square"></i>
              &nbsp;back
            </button>

            </Link>
        </center>
      </div>
    </div>
  );
}
