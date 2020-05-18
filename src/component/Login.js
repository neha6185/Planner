import React from "react";
import { Button, Form, Label, Input } from "reactstrap";

function Login(props) {
  return (
    <div className="container ">
      <div className="row m-1">
        <div className="col">
          <h2>Login</h2>
        </div>
      </div>

      <Form className="form-group">
        <div className="row m-2">
          <div className="col-md-2">
            <Label>UserName :</Label>
          </div>
          <div className="col-md-6">
            <Input type="text" placeholder="Username" />
          </div>
        </div>
        <div className="row m-2">
          <div className="col-md-2">
            <Label>Password :</Label>
          </div>
          <div className="col-md-6">
            <Input type="password" placeholder="Password" />
          </div>
        </div>

        {props.isRegistered === false && (
          <div className="row m-2">
            <div className="col-md-2">
              <Label>Confirm Password:</Label>
            </div>
            <div className="col-md-6">
              <Input type="password" placeholder="Confirm Password" />
            </div>
          </div>
        )}

        <div className="row m-4">
          <div className="col-md-5">
            <Button type="submit">
              {props.isRegistered ? "Login" : "Register"}
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
}
export default Login;
