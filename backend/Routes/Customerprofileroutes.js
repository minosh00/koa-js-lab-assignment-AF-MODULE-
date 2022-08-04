const Router = require('koa-router');
const {createCustomerAccount , getCustomerAccountByID , getAllCustomerAccount } = require("../Controllers/CustomerProfile");

const Customerprofileroutes = new Router({

    prefix: '/Customer'
   });

   Customerprofileroutes.post('/createCustomerAccount',ctx => {
       const data = ctx.request.body;
       console.log(data);
       let result =  createCustomerAccount(data);
       console.log(result);
       ctx.response.status =  200;
       ctx.body = {data:result , message:"success"};
    });

    Customerprofileroutes.get('/getCustomerAccountByID/:id', ctx => {
        const data = ctx.params.id;
        let result =  getCustomerAccountByID(data);
        ctx.response.status =  200;
        ctx.body = {data:result , message:result.msg};
    });
   
    Customerprofileroutes.get('/getAllCustomerAccount', ctx => {
        let result =  getAllCustomerAccount();
        ctx.response.status =  200;
        ctx.body = {data:result};
    });

   
  

 

    

module.exports =  Customerprofileroutes;