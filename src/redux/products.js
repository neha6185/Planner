import { PRODUCTS } from "../shared/products";
import * as ActionTypes from "./ActionTypes";

export const Products = (state = PRODUCTS, action) => {
  switch (action.type) {
    case ActionTypes.ADD_PRODUCT:
      var product = action.payload;
      product.id = state.length;
      return state.concat(product);

    default:
      return state;
  }
};
