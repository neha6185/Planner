import React from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  FormFeedback,
} from "reactstrap";
import PlacedStockList from "./PlacedStockList";

class PurchaseStock extends React.Component {
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
    this.handleInputchange = this.handleInputchange.bind(this);
  }
  //***************Validation*******************
  validate(stock, quantity, limitPrice) {
    const errors = {
      stock: "",
      quantity: "",
      limitPrice: "",
    };

    if (this.state.touched.stock) {
      if (stock.length < 3) {
        errors.stock = "Stock name must be at least 3 characters.";
      } else if (stock.length > 5) {
        errors.stock = "Stock name must be 5 or less characters.";
      }
    }

    const reg = /^\d+$/;
    if (this.state.touched.quantity && !reg.test(quantity)) {
      errors.quantity = "Qunatity should contain only numbers.";
    }
    if (this.state.touched.limitPrice && !reg.test(limitPrice)) {
      errors.limitPrice = "Price should contain only numbers.";
    }

    return errors;
  }

  //  ***************** Validate Input if field is touched

  handleBlur = (field) => () => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    });
  };

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

  //*************** Input Change Handled************* */
  handleInputchange = (event) => {
    event.persist();
    const input = event.target.name;
    const value = event.target.value;
    this.setState({
      ...this.state,
      [input]: value,
    });
  };

  // *************** Handle Submit****************
  handleSubmit = (event) => {
    event.persist();
    // console.log("Current state is: " + JSON.stringify(this.state));

    //create new item
    const item = {
      id: this.state.products.length,
      stock: this.state.stock,
      quantity: this.state.quantity,
      limitPrice: this.state.limitPrice,
      orderType: this.state.orderType,
      exchange: this.state.exchange,
    };

    //take a copy of list in the state
    const products = [...this.state.products];
    //add new item in list
    products.push(item);
    //update state and reset new item
    this.setState(
      {
        products: products,
        stock: "",
        quantity: "",
        limitPrice: "",
        orderType: "Market",
        exchange: "NSE",
      },
      () => {
        console.log("Current state is: " + JSON.stringify(this.state));
      }
    );

    event.preventDefault();
  };
  render() {
    const errors = this.validate(
      this.state.stock,
      this.state.quantity,
      this.state.limitPrice
    );
    const isLoggin = this.props.isRegistered;
    if (isLoggin === true) {
      return (
        <div className="container">
          <div className="row">
            <div className="col">
              <h2>Place Order</h2>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Form onSubmit={this.handleSubmit}>
                <FormGroup row>
                  <Label htmlFor="stock" md={2}>
                    Stock
                  </Label>
                  <Col md={10}>
                    <Input
                      type="text"
                      id="stock"
                      name="stock"
                      placeholder="Stock Name"
                      value={this.state.stock}
                      invalid={errors.stock}
                      onBlur={this.handleBlur("stock")}
                      onChange={this.handleInputchange}
                    />
                    <FormFeedback>{errors.stock}</FormFeedback>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor="quantity" md={2}>
                    Quantity
                  </Label>
                  <Col md={10}>
                    <Input
                      type="text"
                      id="quantity"
                      name="quantity"
                      placeholder="No. Of Shares"
                      value={this.state.quantity}
                      invalid={errors.quantity}
                      onBlur={this.handleBlur("quantity")}
                      onChange={this.handleInputchange}
                    />
                    <FormFeedback>{errors.quantity}</FormFeedback>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor="limitPrice" md={2}>
                    Price
                  </Label>
                  <Col md={10}>
                    <Input
                      type="text"
                      id="limitPrice"
                      name="limitPrice"
                      placeholder="Price"
                      value={this.state.limitPrice}
                      invalid={errors.limitPrice}
                      onBlur={this.handleBlur("limitPrice")}
                      onChange={this.handleInputchange}
                    />
                    <FormFeedback>{errors.limitPrice}</FormFeedback>
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label md={2}>OrderType</Label>
                  <Col md={4}>
                    <Input
                      type="select"
                      name="orderType"
                      value={this.state.orderType}
                      onChange={this.handleInputchange}
                    >
                      <option>Market</option>
                      <option>Limit</option>
                    </Input>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label md={2}>Exchange</Label>
                  <Col md={4}>
                    <Input
                      type="select"
                      name="exchange"
                      value={this.state.exchange}
                      onChange={this.handleInputchange}
                    >
                      <option>NSE</option>
                      <option>BSE</option>
                    </Input>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md={{ size: 6, offset: 1 }}>
                    <Button type="submit" color="primary">
                      Purchase
                    </Button>
                  </Col>
                </FormGroup>
              </Form>
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
    } else {
      return (
        <div>
          <p>Please Login to Place Order</p>
        </div>
      );
    }
  }
}
export default PurchaseStock;
