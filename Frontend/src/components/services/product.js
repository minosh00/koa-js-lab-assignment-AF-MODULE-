import axios from 'axios';



let UpdateIdById = "http://localhost:5000/" + "Items/updateProductByID/";
let getItemById = "http://localhost:5000/" + "Items/getItemByID/";

export async function getallItems() { 
    return await axios.get("");
}

export async function getItemsByID(ID) { 
    let newurl = getItemById + ID;
    return await axios.get(newurl);
}


export async function updateProductByID(data,ID) {
    console.log(data)
    const alldata = {
        
        name:data.name,
        id:data.id,
        price:data.price,
        qty:data.qty
        
    }
    
    console.log(alldata)
    let newurl = UpdateIdById + ID;
  
    return await axios.post(newurl,alldata);
}
