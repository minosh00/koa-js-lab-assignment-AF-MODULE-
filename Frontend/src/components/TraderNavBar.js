  


 import React from 'react';
import './Navbar.css'
import { Link } from "react-router-dom";

 const TraderNavBar = () => {



  return (


    <>
    <nav>
      <ul className="list">
      
          
        <Link
         to="/DisplayAllProduct" className="item">All Product
        </Link>
        <Link
         to="/alla" className="item"> View Customers
        </Link>
        <Link
         to="/adproduct" className="item">Add  Product 
        </Link>
        <Link
         to="/adproduct" className="item">Add  Product 
        </Link>

        <Link
         to="/a" className="item">login
        </Link>
        <Link
         to="/register" className="item">Register
        </Link>
         
         
        </ul>
      <button className="btn">BTN</button>
    </nav>
  </>



  )
}

export default TraderNavBar;
