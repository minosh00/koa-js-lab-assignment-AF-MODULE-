const Router = require('koa-router');
const {getAllCustomerAccount} = require("../Controllers/CustomerProfile");

const CustomerLoginRoutes = new Router({

    prefix: '/CustomerLogin'
   });

   

   CustomerLoginRoutes.post('/LoginCustomer', ctx => {
    let data = ctx.request.body;
    console.log("Login  data",data);
    let user;
    let result =  getAllCustomerAccount();
    console.log(result);
    result.forEach(function(Cusaccount) {
       console.log("data",Cusaccount.newCustomerAccount.email);
        if(Cusaccount.newCustomerAccount.email === data.email)
        {
            if(Cusaccount.newCustomerAccount.password === data.password){
                user = Cusaccount;
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



module.exports  =  CustomerLoginRoutes;