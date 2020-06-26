import React from "react";
import { Card, CardImg, CardFooter } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container-fluid home-container">
      {/* <Jumbotron fluid> */}
      <div className="row">
        <div className="col mt-5">
          <h2>Plan Future: What’s in your wallet?</h2>
        </div>
      </div>

      <div
        className="row"
        style={{
          marginTop: 100,
          alignItems: "center",
          marginLeft: 100,
          marginRight: 100,
        }}
      >
        <div className="col">
          <Card style={{ backgroundColor: "#0d47a1", borderColor: "primary " }}>
            <CardImg
              src="images/pie2.jpg"
              alt="Expenses"
              className="align-self-center homeImg"
            />
            <CardFooter>
              <Link to="/budget" className="nav-link">
                <i className="fa fa-money fa-lg" />
                Budget
              </Link>
            </CardFooter>
          </Card>
        </div>

        <div className="col ">
          <Card style={{ backgroundColor: "#0d47a1", borderColor: "primary " }}>
            <CardImg
              src="images/graph.png"
              alt="Portfolio"
              className="align-self-center homeImg"
            />
            <CardFooter>
              <Link to="/portfolio" className="nav-link">
                <i className="fa fa-eye fa-lg" />
                WatchList
              </Link>
            </CardFooter>
          </Card>
        </div>

        <div className="col ">
          <Card style={{ backgroundColor: "#0d47a1", borderColor: "primary " }}>
            <CardImg
              src="images/todo.jpg"
              alt="To-do"
              className="align-self-center homeImg"
            />
            <CardFooter>
              <Link to="/todo" className="nav-link">
                <i className="fa fa-list fa-lg" />
                My Tasks
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
      {/* </Jumbotron> */}
    </div>
  );
}

export default Home;
