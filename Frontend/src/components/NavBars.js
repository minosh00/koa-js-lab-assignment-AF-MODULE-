import React from 'react';
import './Navbar.css'
import { Link } from "react-router-dom";

 const NavBar = () => {



  return (


    <>
    <nav>
      <ul className="list">
      
          
        <Link
         to="/DisplayAllProduct" className="item">Home
        </Link>
      
        
  
        <Link
         to="/register" className="item">Register
        </Link>
         
         
        </ul>

    </nav>
  </>



  )
}

export default NavBar;