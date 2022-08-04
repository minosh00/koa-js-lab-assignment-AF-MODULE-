import React , {useState , useEffect}  from 'react'
import {  useNavigate } from "react-router-dom";
import { getAllCartsitems  } from './services/cartServices';
import Navbar from "./NavBars";

export default function CartListmenu() {

 
      const [cart, setCart] = useState([]);
 


      const getAllCartsitems = async () => {
          let data = await getAllCartsitems();
          console.log(" data",data);
          setCart(data.data.data);
      }
  
      useEffect(() => {
        getAllCartsitems();
      }, [])


      const add = async(data)=>{
        console.log("data",data);
        let array = [];
        let total = 0;
        data.map((item)=>{
          array.push(item.newProduct);
          total =  total +  parseInt(item.newProduct.price);
        });
       
      }
    



  return (
    
    <div>
    
      <br/>
         
          <br/>
          <br/>
          <div>
            <Navbar/>
          <div>
                <h3 >My Cart </h3>
                <br/>
                <table className="table  table-striped table-bordered">
                <thead>
                          <tr>
                            <th scope="col"> name</th>
                            <th scope="col">price</th>
                            <th scope="col">qty</th>
                            <th scope="col">id</th>
                          </tr>
                    </thead>
               <tbody>
                {cart?.map((newProduct,index)=>(
                       <tr>
                       <th scope="row">{index+1}</th>
                           <td>{newProduct?.newProduct.name}</td>
                           <td>{newProduct?.newProduct.id}</td>
                           <td>{newProduct?.newProduct.price}</td>
                           <td>{newProduct?.newProduct.qty}</td>
                   </tr>  
                ))}
                </tbody>
                </table>
                <div style={{float:"left"}}>
               
                </div>
            </div>
          </div>
    </div>
  )
}
