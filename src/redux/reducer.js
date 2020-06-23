import { PRODUCTS } from "../shared/products";
import { EXPENSES } from "../shared/expenses";

export const initialState = {
  products: PRODUCTS,
  expenses: EXPENSES,
};

export const Reducer = (state = initialState, action) => {
  return state;
};
