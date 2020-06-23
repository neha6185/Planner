import { EXPENSES } from "../shared/expenses";
import * as ActionTypes from "./ActionTypes";

export const Expenses = (state = EXPENSES, action) => {
  switch (action.type) {
    case ActionTypes.ADD_EXPENSE:
      var expense = action.payload;
      expense.id = state.length;
      console.log("Add" + JSON.stringify(state.concat(expense)));
      return state.concat(expense);
     

    case ActionTypes.DELETE_EXPENSE:
      var id = action.payload.id;
      return [...state.filter((item) => item.id !== action.payload.id)];

    default:
      return state;
  }
};
