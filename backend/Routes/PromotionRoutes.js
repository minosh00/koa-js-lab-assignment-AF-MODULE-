


const Router = require("koa-router");
const {
    AddPromotion ,
     getProductPromotionByID ,
      getAllProductPromotion
} = require("../Controllers/AddPromotion");

const PromotionRoutes = new Router({

  prefix: "/Promotion",
});


PromotionRoutes.post("/AddPromotion", (ctx) => {
  const data = ctx.request.body;
  console.log(data);
  let result = AddPromotion(data);
  console.log(result);
  ctx.response.status = 200;
  ctx.body = { data: result, message: "success" };
});

PromotionRoutes.get("/getProductPromotionByID/:id", (ctx) => {
  const data = ctx.params.id;
  let result = getProductPromotionByID(data);
  ctx.response.status = 200;
  ctx.body = { data: result, message: result.msg };
});

PromotionRoutes.get("/getAllProductPromotion", (ctx) => {
  let result = getAllProductPromotion();
  ctx.response.status = 200;
  ctx.body = { data: result };
});

module.exports = PromotionRoutes;
