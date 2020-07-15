import React, { Component } from "react";
import {
  Button,
  Col,
  Row,
  Card,
  CardTitle,
  CardBody,
  CardSubtitle,
  CardFooter,
} from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";
import { Link } from "react-router-dom";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
const isNumber = (val) => !isNaN(+val);

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: this.props.users,
      email: "",
      password: "",
      isRegistered: false,
      touched: {
        email: false,
        password: false,
      },
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  authenticateUser(values) {
    // const email=  values.email;
    // const pwd = values.pwd;
    // const user = this.state.users.filter(user => user.email === email);
  }

  handleSubmit = (values) => {
    console.log("Current state is: " + JSON.stringify(values));
    this.authenticateUser(values);
    // this.props.addProduct(values.stock, values.limitPrice);
  };
  render() {
    return (
      <div className="container container-size">
        <div className="row">
          <div className="col">
            <Card className="card-login">
              <CardTitle>
                <h4 className="welcome">Welcome !</h4>
              </CardTitle>
              <CardSubtitle>
                <h5 className="login-ac"> Log in to your account !</h5>
              </CardSubtitle>
              <CardBody>
                <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                  <div className="row justify-content-center form-group">
                    <div className="col-11">
                      <Control.text
                        model=".email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        className="form-control"
                        validators={{
                          required,
                          minLength: minLength(3),
                          maxLength: maxLength(6),
                        }}
                      />
                      <Errors
                        className="text-danger"
                        model=".email"
                        show="touched"
                        component="div"
                        messages={{
                          required: "Required",
                          minLength: "Must be at least 3 characters",
                          maxLength: "Must be 15 characters or less",
                        }}
                      />
                    </div>
                  </div>
                  <div className="row justify-content-center form-group">
                    <div className="col-11">
                      <Control.text
                        model=".password"
                        id="password"
                        name="password"
                        placeholder="Password"
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
                        model=".password"
                        show="touched"
                        component="div"
                        messages={{
                          required: "Required",
                          minLength: "Must be at least 1 numbers",
                          maxLength: "Must be 15 numbers or less",
                          isNumber: "Must be a number",
                        }}
                      />
                    </div>
                  </div>
                  <div className="row justify-content-center form-group">
                    <div className="col-11 mt-3">
                      <Button
                        type="submit"
                        color="primary"
                        className="loginButton"
                      >
                        Log In
                      </Button>
                    </div>
                  </div>
                </LocalForm>
                <h6>
                  New User?{" "}
                  <Link to="/registerUser" className="signUp">
                    Sign Up
                  </Link>
                </h6>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
