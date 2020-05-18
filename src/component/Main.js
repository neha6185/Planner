import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import PurchaseStock from "./PurchaseStock";
import PlaceOrder from "./PlaceOrder";
import Portfolio from "./Portfolio";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import Login from "./Login";
import { connect } from "react-redux";
import { addProduct } from "../redux/ActionCreators";

const mapDispatchToProps = {
  addProduct: (stock, quantity, limitPrice, orderType, exchange) =>
    addProduct(stock, quantity, limitPrice, orderType, exchange),
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};
var userIsRegistered = true;
class Main extends Component {
  render() {
    const HomePage = () => {
      return <Home />;
    };

    return (
      <div>
        <Header />

        <Switch>
          <Route path="/home" component={HomePage} />

          {/* <Route exact path="/purchaseStock" component={PurchaseStock} /> */}

          <Route
            exact
            path="/purchaseStock"
            render={() => <PurchaseStock isRegistered={userIsRegistered} />}
          />

          {/* <Route exact path="/purchaseStock" 
          render = {() => <PlaceOrder addProduct={this.props.addProduct} />} /> */}
          <Route
            exact
            path="/portfolio"
            render={() => (
              <Portfolio
                products={this.props.products}
                isRegistered={userIsRegistered}
              />
            )}
          />

          <Route
            exact
            path="/login"
            render={() => <Login isRegistered={userIsRegistered} />}
          />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
