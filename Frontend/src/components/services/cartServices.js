import axios from 'axios';


let List = "http://localhost:5000/" + "cartproduct/getAllCartsitems";
let NewItem = "http://localhost:5000/" + "cartproduct/createCart";


export async function getAllCartsitems() { 
    return await axios.get(List);
}

export async function createCart(data) {

    console.log("url",NewItem);
  
    return await axios.post(NewItem,data);
}


