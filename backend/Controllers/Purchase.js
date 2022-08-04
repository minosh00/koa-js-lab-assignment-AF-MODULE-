const UUID = require("uuid");

const Purchasedata = new Map();

const createPurchase = (newPurchaseitem) => {
  const Purchaseitem = {
    id: UUID.v4(),
    newPurchaseitem,
    createdAT: new Date(),
  };
  Purchasedata.set(Purchaseitem.id, Purchaseitem);
  return Purchaseitem;
};

const getAllPurchaseList = () => {
  return [...Purchasedata.values()];
};

const getPurchaseByID = (ID) => {
  const data = Purchasedata.get(ID);
  if (!data) {
    return (result = {
      status: 0,
      msg: "Purchase  items  ID" + ID + "not exists",
    });
  }

  return (result = { data, msg: "success find Purchase  items " });
};

module.exports = { createPurchase, getPurchaseByID, getAllPurchaseList };
