import React from "react";
import { Button, Label, Col, Row } from "reactstrap";
import PlacedStockList from "./PlacedStockList";
import { Control, LocalForm } from "react-redux-form";

class PlaceOrder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      stock: "",
      quantity: "",
      limitPrice: "",
      orderType: "Market",
      exchange: "NSE",
      touched: {
        stock: false,
        quantity: false,
        limitPrice: false,
      },
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // ****************Delete Placed Order ***************
  deleteStock = (id) => {
    //copy current list item
    const products = [...this.state.products];

    //filter product to be deleted
    const updatedList = products.filter((product) => product.id !== id);
    this.setState(
      {
        products: updatedList,
      },
      () => {
        console.log("Update state is: " + JSON.stringify(this.state));
      }
    );
  };

  // *************** Handle Submit****************
  handleSubmit = (values) => {
    
    alert("Current state is: " + JSON.stringify(values));
    this.props.addProduct(this.props.stock,);
    //create new item
    // const item = {
    //   // id: values.products.length,
    //   stock: values.stock,
    //   quantity: values.quantity,
    //   limitPrice: values.limitPrice,
    //   orderType: values.orderType,
    //   exchange: values.exchange,
    // };

    //take a copy of list in the state
    // const products = [...values.products];
    //add new item in list
    // products.push(item);
    //update state and reset new item
    // this.setState(
    //   {
    //     products: products,
    //     stock: "",
    //     quantity: "",
    //     limitPrice: "",
    //     orderType: "Market",
    //     exchange: "NSE",
    //   },
    //   () => {
    //     console.log("Current state is: " + JSON.stringify(values));
    //   }
    // );
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h2>Place Order</h2>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <LocalForm onSubmit={values => this.handleSubmit(values)}>
              <Row className="form-group">
                <Label htmlFor="stock" md={2}>
                  Stock
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".stock"
                    id="stock"
                    name="stock"
                    placeholder="Stock Name"
                    className="form-control"
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="quantity" md={2}>
                  Quantity
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".quantity"
                    id="quantity"
                    name="quantity"
                    placeholder="No. Of Shares"
                    className="form-control"
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="limitPrice" md={2}>
                  Price
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".limitPrice"
                    id="limitPrice"
                    name="limitPrice"
                    placeholder="Price"
                    className="form-control"
                  />
                </Col>
              </Row>

              <Row className="form-group">
                <Label md={2}>OrderType</Label>
                <Col md={4}>
                  <Control.select
                    model=".orderType"
                    name="orderType"
                    className="form-control"
                  >
                    <option>Market</option>
                    <option>Limit</option>
                  </Control.select>
                </Col>
              </Row>
              <Row className="form-group">
                <Label md={2}>Exchange</Label>
                <Col md={4}>
                  <Control.select
                    model=".exchange"
                    name="exchange"
                    className="form-control"
                  >
                    <option>NSE</option>
                    <option>BSE</option>
                  </Control.select>
                </Col>
              </Row>
              <Row className="form-group">
                <Col md={{ size: 6, offset: 1 }}>
                  <Button type="submit" color="primary">
                    Purchase
                  </Button>
                </Col>
              </Row>
            </LocalForm>
          </div>
          <div className="col">
            <PlacedStockList
              products={this.state.products}
              deleteStock={this.deleteStock}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default PlaceOrder;
