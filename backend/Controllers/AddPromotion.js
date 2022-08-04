const UUID = require('uuid');

const Promotiondata = new Map();

const AddPromotion = (ProductPromotion) =>{
    const Promotion = {id:UUID.v4() , ProductPromotion , createdAT : new Date() };
    Promotiondata.set(Promotion.id, Promotion);
    return Promotion;
};

const getAllProductPromotion = () =>{
    return [...Promotiondata.values()];
}

const getProductPromotionByID = (ID) => {
    const data = Promotiondata.get(ID);
    if(!data)
    {
        return result=({ status:0 , msg:"Promotion product  ID" + ID + "not exists"});
    } 

    return result=({ data , msg:"success find "});
}





module.exports = {AddPromotion , getProductPromotionByID , getAllProductPromotion  };

