import * as ActionTypes from "./ActionTypes";

export const addExpense = (date, merchant, item, amount,transactiontype) => ({
  type: ActionTypes.ADD_EXPENSE,
  payload: {
    date: date,
    merchant: merchant,
    item: item,
    amount: amount,
    transactiontype:transactiontype,
  },
});

export const deleteItem = (id) => ({
  type: ActionTypes.DELETE_EXPENSE,
  payload: {
    id: id,
  },
});

export const addProduct = (
  stock,
  limitPrice,
) => ({
  type: ActionTypes.ADD_PRODUCT,
  payload: {
    stock: stock,
    limitPrice: limitPrice
  },
});
export const deleteProduct = (id) => ({
  type: ActionTypes.DELETE_PRODUCT,
  payload: {
    id: id,
  },
});
export const addUser =(email,password)=>({
  type:ActionTypes.ADD_USER,
  payload:{
    email: email,
    password: password
  }
});