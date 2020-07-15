import React from "react";
import { Card, CardImg, CardFooter } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container-fluid home-container">
      <div className="row">
        <div className="col mt-5">
          <h3 className="what">
            What’s In Your <span className="wallet">Wallet</span> ?
          </h3>
          <img
            src="https://cdn1.iconfinder.com/data/icons/accounting-26/64/balance-scale-tax-money-business-512.png"
            width="180"
            alt="cash-icon"
          />
          {/* <h4 className="plan-future">
            <img
              src="https://cdn1.iconfinder.com/data/icons/business-management-and-growth-1-6/65/11-512.png"
              width="30"
              alt="cash-icon"
            />
            {"  "}
            Let's Plan Future{"  "}
            <img
              src="https://cdn1.iconfinder.com/data/icons/business-management-and-growth-1-6/65/11-512.png"
              width="30"
              alt="cash-icon"
            />
          </h4> */}
        </div>
      </div>
      <div
        className="row"
        style={{
          marginTop: 70,
          alignItems: "center",
          marginLeft: 100,
          marginRight: 100,
        }}
      >
        <div className="col-12 col-lg-4 mb-2 box">
          <Card style={{ backgroundColor: "#29aab6", borderColor: "primary" }}>
            <CardImg
              src="https://cdn.mydollarplan.com/wp-content/uploads/2011/02/Pie-Chart.jpg"
              alt="Expenses"
              className="align-self-center homeImg"
            />
            <Link to="/budget" className="nav-link card-footer mt-1 mb-1">
              <i className="fa fa-money fa-lg" /> {"  "} Budget
            </Link>
          </Card>
        </div>
        <div className="col-12 col-lg-4 mb-2 box">
          <Card style={{ backgroundColor: "#107983", borderColor: "primary" }}>
            <CardImg
              src="https://media.ycharts.com/charts/d10a7141799f6642aaca8dbde7faa5c3.png"
              alt="Portfolio"
              className="align-self-center homeImg"
            />
            <Link to="/portfolio" className="nav-link card-footer mt-1 mb-1">
              <i className="fa fa-eye fa-lg" /> {"  "}
              WatchList
            </Link>
          </Card>
        </div>
        <div className="col-12 col-lg-4 mb-lg-2 mb-5 box">
          <Card style={{ backgroundColor: "#004d79", borderColor: "primary" }}>
            <CardImg
              src="https://d12y7sg0iam4lc.cloudfront.net/s/img/marketing/top-todo-app/to-do-list.png"
              alt="To-do"
              className="align-self-center homeImg"
            />
            <Link to="/todo" className="nav-link card-footer mt-1 mb-1">
              <i className="fa fa-list fa-lg" /> {"  "}
              My Tasks
            </Link>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Home;
