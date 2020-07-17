import React from "react";
import { Button, Label, Col, Row } from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
const isNumber = (val) => !isNaN(+val);

class AddWatchList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      stock: "",
      limitPrice: "",
      touched: {
        stock: false,
        limitPrice: false,
      },
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.deleteProduct = this.deleteProduct.bind(this);
  }

  // ****************Delete Placed Order ***************
  // deleteProduct = (id) => {
  //   console.log(id);
  //   //copy current list item
  //   alert("Confirm Delete stock :" + id);
  //   this.props.deleteProduct(id);
  // };

  // *************** Handle Submit****************
  handleSubmit = (values) => {
    console.log("Current state is: " + JSON.stringify(values));
    this.props.addProduct(values.stock, values.limitPrice);
    this.props.toggle();
  };
  render() {
    return (
      <React.Fragment>
        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
          <Row className="form-group">
            <Label htmlFor="stock" md={2}>
              Stock
            </Label>
            <Col md={3}>
              <Control.text
                model=".stock"
                id="stock"
                name="stock"
                placeholder="Stock Symbol"
                className="form-control"
                validators={{
                  required,
                  minLength: minLength(3),
                  maxLength: maxLength(6),
                }}
              />
              <Errors
                className="text-danger"
                model=".stock"
                show="touched"
                component="div"
                messages={{
                  required: "Required",
                  minLength: "Must be at least 3 characters",
                  maxLength: "Must be 15 characters or less",
                }}
              />
            </Col>

            <Label htmlFor="limitPrice" md={2}>
              Rate
            </Label>
            <Col md={3}>
              <Control.text
                model=".limitPrice"
                id="limitPrice"
                name="limitPrice"
                placeholder="Price"
                className="form-control"
                validators={{
                  required,
                  minLength: minLength(1),
                  maxLength: maxLength(15),
                  isNumber,
                }}
              />
              <Errors
                className="text-danger"
                model=".limitPrice"
                show="touched"
                component="div"
                messages={{
                  required: "Required",
                  minLength: "Must be at least 1 numbers",
                  maxLength: "Must be 15 numbers or less",
                  isNumber: "Must be a number",
                }}
              />
            </Col>

            <Col md={1}>
              <Button type="submit" color="primary">
                Add
              </Button>
            </Col>
          </Row>
        </LocalForm>
      </React.Fragment>
    );
  }
}
export default AddWatchList;
