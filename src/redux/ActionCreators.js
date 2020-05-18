import * as ActionTypes from "./ActionTypes";


export const addProduct = (stock,quantity,limitPrice,orderType,exchange) => ({
  type: ActionTypes.ADD_PRODUCT,
  payload: {
    stock :stock,
    quantity:quantity,
    limitPrice:limitPrice,
    orderType:orderType,
    exchange:exchange
    
  }
});
