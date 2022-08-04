const Router = require("koa-router");
const {
  createPurchase,
  getPurchaseByID,
  getAllPurchaseList,
} = require("../Controllers/Purchase");

const Purchase = new Router({
  prefix: "/PurchaseItem",
});

Purchase.post("/createPurchase", (ctx) => {
  const data = ctx.request.body;
  console.log(data);
  let result = createPurchase(data);
  console.log(result);
  ctx.response.status = 200;
  ctx.body = { data: result, message: "success" };
});

Purchase.get("/getPurchaseByID/:id", (ctx) => {
  const data = ctx.params.id;
  let result = getPurchaseByID(data);
  ctx.response.status = 200;
  ctx.body = { data: result, message: result.msg };
});

Purchase.get("/getAllPurchaseList", (ctx) => {
  let result = getAllPurchaseList();
  ctx.response.status = 200;
  ctx.body = { data: result };
});

module.exports = Purchase;
