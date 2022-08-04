
const Router = require('koa-router');
const {createTraderAccount , getTraderAccountByID , getAllTraderAccount } = require("../Controllers/Trader");

const TraderProfleRoutes = new Router({

    prefix: '/Trader'
   });

   TraderProfleRoutes.post('/createTraderAccount',ctx => {
       const data = ctx.request.body;
       console.log(data);
       let result =  createTraderAccount(data);
       console.log(result);
       ctx.response.status =  200;
       ctx.body = {data:result , message:"success"};
    });

    TraderProfleRoutes.get('/getTraderAccountByID/:id', ctx => {
        const data = ctx.params.id;
        let result =  getTraderAccountByID(data);
        ctx.response.status =  200;
        ctx.body = {data:result , message:result.msg};
    });
   
    TraderProfleRoutes.get('/getAllTraderAccount', ctx => {
        let result =  getAllTraderAccount();
        ctx.response.status =  200;
        ctx.body = {data:result};
    });

   

    
  

 

    

module.exports =  TraderProfleRoutes;



