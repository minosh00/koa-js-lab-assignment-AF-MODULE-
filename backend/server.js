const Koa = require('koa');
const bodyparser = require('koa-bodyparser');
const cors = require('@koa/cors');

const app = new Koa();
app.use(cors());
const PORT =  5000;

//import routes
const ItemRoutes = require('./Routes/productRoutes');
const CustomerAccount = require('./Routes/Customerprofileroutes');
const TraderAccount = require('./Routes/TraderProfleRoutes');
const Purchase = require('./Routes/Purchase');
const Promotion = require('./Routes/PromotionRoutes');
const CustomerLoginRoutes = require('./Routes/CustomerLoginRoutes');
const TraderLoginRoutes = require('./Routes/TraderLogin');
const CartRoutrs = require('./Routes/CartRoutrs');


app.use(bodyparser());


app.use(ItemRoutes.routes()).use(ItemRoutes.allowedMethods());
app.use(CustomerAccount.routes()).use(CustomerAccount.allowedMethods());
app.use(TraderAccount.routes()).use(TraderAccount.allowedMethods());
app.use(Purchase.routes()).use(Purchase.allowedMethods());
app.use(Promotion.routes()).use(Promotion.allowedMethods());
app.use(CustomerLoginRoutes.routes()).use(CustomerLoginRoutes.allowedMethods());
app.use(TraderLoginRoutes.routes()).use(TraderLoginRoutes.allowedMethods());
app.use(CartRoutrs.routes()).use(CartRoutrs.allowedMethods());


app.use(ctx => {
 ctx.body = 'Koa server is running';
});

app.listen(PORT);

console.log(`Application is running on port ${PORT}`);