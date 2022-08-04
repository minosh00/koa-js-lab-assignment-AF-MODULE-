const Router = require('koa-router');
const {createProduct , getProductByID , getAllProduct , getItemByID,updateProductByID } = require("../Controllers/Product");

const Productrouter = new Router({
    prefix: '/Items'
   });

   Productrouter.post('/createProduct',ctx => {
       const data = ctx.request.body;
       console.log(data);
       let result =  createProduct(data);
       console.log(result);
       ctx.response.status =  200;
       ctx.body = {data:result , message:"success"};
    });

    Productrouter.get('/getItemByID/:id', ctx => {
        const data = ctx.params.id;
        let result =  getItemByID(data);
        ctx.response.status =  200;
        ctx.body = {data:result , message:result.msg};
    });


    Productrouter.get('/getProductByID/:id', ctx => {
       
        const id = ctx.params.id;
        const data =  ctx.request.body;
        let result =  getProductByID(data,id);
        ctx.response.status =  200;
        ctx.body = {data:result , message:result.msg};
    });
   
    Productrouter.get('/getAllProduct', ctx => {
        let result =  getAllProduct();
        ctx.response.status =  200;
        ctx.body = {data:result};
    });

    Productrouter.put('/updateProductByID/:id', ctx => {
        const id = ctx.params.id;
        const data =  ctx.request.body;
        let result =  updateProductByID(data,id);
        ctx.response.status =  200;
        ctx.body = {data:result , message:result.msg};
    });

    
  

 

    

module.exports =  Productrouter;