const UUID = require('uuid');

const TraderProfiledata = new Map();

const createTraderAccount= (newTraderAccount) =>{
    const Traderaccount = {id:UUID.v4() , newTraderAccount ,userRole:"trader", createdAT : new Date()  };
    TraderProfiledata.set(Traderaccount.id, Traderaccount);
    return Traderaccount;
};

const getAllTraderAccount = () =>{
    return [...TraderProfiledata.values()];
}

const getTraderAccountByID = (ID) => {
    const data = TraderProfiledata.get(ID);
    if(!data)
    {
        return result=({ status:0 , msg:"trader account  ID" + ID + "not exists"});
    } 

    return result=({ data , msg:"success find trader account  "});
}


module.exports = {createTraderAccount , getTraderAccountByID , getAllTraderAccount };

