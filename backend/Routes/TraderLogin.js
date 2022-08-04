
const Router = require('koa-router');
const {getAllTraderAccount} = require("../Controllers/Trader");

const TraderLogin= new Router({

    prefix: '/TraderLogin'
   });

   
   TraderLogin.post('/LoginTrader', ctx => {
    let data = ctx.request.body;
    console.log("Login  data",data);
    let user;
    let result =  getAllTraderAccount();
    console.log(result);
    result.forEach(function(Tradeccount) {
       console.log("data",Tradeccount.newTraderAccount.email);
        if(Tradeccount.newTraderAccount.email === data.email)
        {
            if(Tradeccount.newTraderAccount.password === data.password){
                user = Tradeccount;
            }
        }
    });
    console.log(user);
    if(user)
    {
        ctx.response.status  =  200;
        ctx.body = {data:user , msg:"login success"};
    }
    else
    {
        ctx.response.status =  404;
        ctx.body = {data:user , msg:"login failed"};
    }
});



module.exports  =  TraderLogin;