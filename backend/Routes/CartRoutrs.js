const Router = require('koa-router');
const {createCart , getAllCartsitems , getCartprodcutByID , updateCartItem , clearCart} = require("../Controllers/Cart");

const CartRoutrs = new Router({

    prefix: '/cartproduct'
   });

   CartRoutrs.post('/createCart',ctx => {
       const data = ctx.request.body;
       console.log(data);
       let result =  createCart(data);
       console.log(result);
       ctx.response.status =  200;
       ctx.body = {data:result , message:"success"};
    });

    CartRoutrs.get('/getCartprodcutByID/:id', ctx => {
        const data = ctx.params.id;
        let result =  getCartprodcutByID(data);
        ctx.response.status =  200;
        ctx.body = {data:result , message:result.msg};
    });
   
    CartRoutrs.get('/getAllCartsitems', ctx => {
        let result =  getAllCartsitems();
        ctx.response.status =  200;
        ctx.body = {data:result};
    });

    CartRoutrs.post('/updateCartItem/:id', ctx => {
        const id = ctx.params.id;
        const data =  ctx.request.body;
        let result =  updateCartItem(data,id);
        ctx.response.status =  200;
        ctx.body = {data:result , message:result.msg};
    });
     
    CartRoutrs.post('/clearCarts', ctx => {
        let result =  clearCart();
        console.log(result);
        ctx.response.status =  200;
        ctx.body = {data:result, msg:"cart clear success"};
    });
 


module.exports =  CartRoutrs;