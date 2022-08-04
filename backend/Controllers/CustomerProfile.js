const UUID = require('uuid');

const CustomerProfiledata = new Map();

const createCustomerAccount= (newCustomerAccount) =>{
    const Cusaccount = {id:UUID.v4() , newCustomerAccount ,userRole:"customer", createdAT : new Date() };
    CustomerProfiledata.set(Cusaccount.id, Cusaccount);
    return Cusaccount;
};



const getAllCustomerAccount = () =>{
    return [...CustomerProfiledata.values()];
}

const getCustomerAccountByID = (ID) => {
    const data = CustomerProfiledata.get(ID);
    if(!data)
    {
        return result=({ status:0 , msg:"customer account  ID" + ID + "not exists"});
    } 

    return result=({ data , msg:"success find "});
}







module.exports = {createCustomerAccount , getCustomerAccountByID , getAllCustomerAccount };

