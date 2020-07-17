import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Portfolio from "./Portfolio";
import Budget from "./Budget";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import Login from "./Login";
import { connect } from "react-redux";
import { actions } from "react-redux-form";
import {
  addProduct,
  deleteProduct,
  addExpense,
  deleteItem,
  addUser,
} from "../redux/ActionCreators";
import Income from "./Income";
import Register from "./RegisterUser";
import TodoList from "./TodoList";

const mapDispatchToProps = {
  addProduct: (stock, limitPrice) => addProduct(stock, limitPrice),
  deleteProduct: (id) => deleteProduct(id),
  addExpense: (date, merchant, item, amount, transactiontype) =>
    addExpense(date, merchant, item, amount, transactiontype),
  deleteItem: (id) => deleteItem(id),
  resetTransactionForm: () => actions.reset("transactionForm"),
  addUser: (email, password) => addUser(email, password),
};
const mapStateToProps = (state) => {
  return {
    products: state.products,
    items: state.expenses,
    users: state.users,
  };
};

var userIsRegistered = true;
class Main extends Component {
  render() {
    const HomePage = () => {
      return <Home />;
    };

    return (
      <div className="overlay">
        <Header />

        <Switch>
          <Route path="/home" component={HomePage} />
          <Route
            exact
            path="/portfolio"
            render={() => (
              <Portfolio
                products={this.props.products}
                addProduct={this.props.addProduct}
                deleteProduct={this.props.deleteProduct}
                isRegistered={userIsRegistered}
              />
            )}
          />
          <Route
            exact
            path="/budget"
            render={() => (
              <Budget
                items={this.props.items}
                deleteItem={this.props.deleteItem}
                addExpense={this.props.addExpense}
                resetTransactionForm={this.props.resetTransactionForm}
              />
            )}
          />
          <Route path="/todo" component={TodoList} />
          <Route
            exact
            path="/login"
            render={() => (
              <Login isRegistered={userIsRegistered} users={this.props.users} />
            )}
          />
          <Route
            exact
            path="/registerUser"
            render={() => (
              <Register users={this.props.users} addUser={this.props.addUser} />
            )}
          />
          {/* <Route exact path="/marketgraph" render={()=> <MarketGraph stock={stock}/> } /> */}
          <Route exact path="/income" component={Income} />
          <Redirect to="/home" />
        </Switch>

        <Footer />
      </div>
    );
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
