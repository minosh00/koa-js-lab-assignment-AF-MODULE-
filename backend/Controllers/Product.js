const UUID = require('uuid');

const Productdata = new Map();

const createProduct = (newProduct) =>{
    const Product = {id:UUID.v4() , newProduct , createdAT : new Date() };
    Productdata.set(Product.id, Product);
    return Product;
};

const getAllProduct = () =>{
    return [...Productdata.values()];
}

const getProductByID = (ID) => {
    const data = Productdata.get(ID);
    if(!data)
    {
        return result=({ status:0 , msg:"product  ID" + ID + "not exists"});
    } 

    return result=({ data , msg:"success find "});
}


const updateProductByID = (newProduct , ID) =>{
    const Product = {id:ID , newProduct , createdAT : new Date() };
    Productdata.set(ID, Product);
    return  result=({ Product , msg:" product update success   "});
};

const getItemByID = (ID) => {
    const data = Productdata.get(ID);
    if(!data)
    {
        return result=({ status:0 , msg:"prodcut ID" + ID + "not exists"});
    } 

    return result=({ data , msg:"success"});
}


module.exports = {createProduct , getProductByID , getAllProduct ,getItemByID, updateProductByID };

