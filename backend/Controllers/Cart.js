const UUID = require('uuid');

const CartProduct = new Map();

const createCart = (CartProduct) =>{
    const Cart = {id:UUID.v4() , CartProduct , createdAT : new Date() };
    CartProduct.set(Cart.id, Cart);
    return Cart;
};

const getAllCartsitems = () =>{
    return [...CartProduct.values()];
}

const getCartprodcutByID = (ID) => {
    const data = CartProduct.get(ID);
    if(!data)
    {
        return result=({ status:0 , msg:"cart ID" + ID + "not exists"});
    } 

    return result=({ data , msg:"success"});
}


const updateCartItem = (CartProduct , ID) =>{
    const Cart = {id:ID , CartProduct , createdAT : new Date() };
    CartProduct.set(ID, Cart);
    return  result=({ Cart , msg:"update success"});
};


const clearCart = () =>{
    const Cart  = CartProduct.clear();
    return  result=({ Cart , msg:"clear success"});
};



module.exports = {createCart , getAllCartsitems , getCartprodcutByID , updateCartItem , clearCart};