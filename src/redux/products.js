import { PRODUCTS } from "../shared/products";
import * as ActionTypes from "./ActionTypes";

export const Products = (state = PRODUCTS, action) => {
  switch (action.type) {
    case ActionTypes.ADD_PRODUCT:
      var product = action.payload;
      
      product.id = state.length;
      console.log("No. of shares",state.length);
      return state.concat(product);
    case ActionTypes.DELETE_PRODUCT:
      var id = action.payload.id;
      return [...state.filter((product) => product.id !== action.payload.id)];
   

    default:
      return state;
  }
};
