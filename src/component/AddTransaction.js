import React, { Component } from "react";
import {
  Col,
  Row,
  Button,
  Label,
  Card,
  CardHeader,
  CardBody,
} from "reactstrap";
import { Control, Form, Errors } from "react-redux-form";
import DatePickerComponent from "./DatePickerComponent";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
const isNumber = (val) => !isNaN(+val);
const dateformat = (val) => {

  var bits = val.split('/');
  var d = new Date(bits[2], bits[1] - 1, bits[0]);
  // alert(d && (d.getMonth() + 1) == bits[1]);
  return d && (d.getMonth() + 1) == bits[1];
}

  
 

function AddTransaction(props) {
  // alert(JSON.stringify(props));
  // alert(props.items);
  return (
   
      <div className="row">
        <AddTransactionForm
          addExpense={props.addExpense}
          resetTransactionForm={props.resetTransactionForm}
          toggle={props.toggle}
        />
      </div>
    
  );
}
class AddTransactionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      date: new Date(),
      merchant: "",
      item: "",
      amount: 0,
      transactiontype: "",
      touched: {
        date: false,
        merchant: false,
        amount: false,
      },
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (values) => {
    console.log("Current state is: " + JSON.stringify(values));
    this.props.addExpense(
      values.date,
      values.merchant,
      values.item,
      values.amount,
      values.transactiontype
    );
   
    this.props.resetTransactionForm();
    this.props.toggle();

  };

  render() {
    return (
      <div className="container ">
        <div className="row m-1">
          <div className="col ">
            <Card
              style={{ backgroundColor: "#e3f2fd", borderColor: "primary " }}
            >
              <CardHeader>Add Transactions</CardHeader>
              <CardBody>
                <Form
                  model="transactionForm"
                  onSubmit={(values) => this.handleSubmit(values)}
                >
                  {/* <Row className="form-group">
                    <Label htmlFor="date" md={3}>
                      Date
                    </Label>
                    <Col md={9}>
                    <Control.select
                      model=".date"
                      id="date"
                      name="date"
                      type="text"
                      placeholder="mm/dd/yyyy"
                      component={DatePickerComponent}
                      className="form-control" 
                      dateFormat="YYYY-MM-DD"
                    />
                   <DatePicker
                      onChange={(date) => this.setSelectedDate(date)}
                    /> 
                    </Col>
                  </Row>*/}
                  <Row className="form-group">
                    <Label htmlFor="date" md={3}>
                      Date
                    </Label>
                    <Col md={9}>
                      <Control.text
                        model=".date"
                        id="date"
                        name="date"
                        placeholder="dd/mm/yyyy"
                        className="form-control"
                        validators={{
                          required,
                          dateformat,
                        }}
                      />
                      <Errors
                        className="text-danger"
                        model=".date"
                        show="touched"
                        component="div"
                        messages={{
                          required: "Required",
                          dateformat: "Invalid Date",
                        }}
                      />
                    </Col>
                  </Row>
                  <Row className="form-group">
                    <Label htmlFor="merchant" md={3}>
                      Merchant
                    </Label>
                    <Col md={9}>
                      <Control.text
                        model=".merchant"
                        id="merchant"
                        name="merchant"
                        placeholder="Merchant Name"
                        className="form-control"
                        validators={{
                          required,
                          minLength: minLength(3),
                          maxLength: maxLength(15),
                        }}
                      />
                      <Errors
                        className="text-danger"
                        model=".merchant"
                        show="touched"
                        component="div"
                        messages={{
                          required: "Required",
                          minLength: "Must be at least 3 characters",
                          maxLength: "Must be 15 characters or less",
                        }}
                      />
                    </Col>
                  </Row>
                  <Row className="form-group">
                    <Label md={3}>Item</Label>
                    <Col md={9}>
                      <Control.select
                        model=".item"
                        name="item"
                        className="form-control"
                      >
                        <option>Choose Transaction Type</option>
                        <option>Income</option>
                        <option>Charity</option>
                        <option>Savings</option>
                        <option>Rent</option>
                        <option>Water</option>
                        <option>Electricity</option>
                        <option>Trash</option>
                        <option>Internet</option>
                        <option>Maintenance</option>
                        <option>Gas</option>
                        <option>Groceries</option>
                        <option>Restaurants</option>
                        <option>Clothing</option>
                        <option>Phone</option>
                        <option>Cosmetics</option>
                        <option>Child Care</option>
                        <option>Entertainment</option>
                        <option>Health Care</option>
                        <option>Insurance</option>
                        <option>Credit Card</option>
                        <option>Loan</option>
                        <option>Others</option>
                      </Control.select>
                    </Col>
                  </Row>

                  <Row className="form-group">
                    <Label htmlFor="amount" md={3}>
                      Amount
                    </Label>
                    <Col md={9}>
                      <Control.text
                        model=".amount"
                        id="amount"
                        name="amount"
                        placeholder="$ "
                        type="text"
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
                        model=".amount"
                        show="touched"
                        component="div"
                        messages={{
                          required: "Required",
                          minLength: "Must be at least 1 number",
                          maxLength: "Must be 15 numbers or less",
                          isNumber: "Must be a number",
                        }}
                      />
                    </Col>
                  </Row>
                  <Row className="form-group">
                    <Label md={3}>Card</Label>
                    <Col md={9}>
                      <Control.select
                        model=".transactiontype"
                        name="transactiontype"
                        className="form-control"
                      >
                        <option>Select</option>
                        <option>Credit</option>
                        <option>Debit</option>
                      </Control.select>
                    </Col>
                  </Row>

                  <Row className="form-group">
                    <Col md={{ size: 6, offset: 1 }}>
                      <Button type="submit" color="primary">
                        Add Transaction
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}
export default AddTransaction;
