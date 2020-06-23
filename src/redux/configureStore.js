import { createStore, combineReducers } from "redux";
import { Products } from "./products";
import { Expenses } from "./expense";
import { createForms } from 'react-redux-form';
import { InitialTransaction } from './AddTransationForm';
import { Users } from "./users";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      products: Products,
      expenses: Expenses,
      users: Users,
      ...createForms({
        transactionForm: InitialTransaction
    })
    })
  );

  return store;
};
