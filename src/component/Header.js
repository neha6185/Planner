import React from "react";
import { Nav, Navbar, NavbarToggler, Collapse, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
    };
    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  render() {
    return (
      <React.Fragment>
        <Navbar sticky="top" expand="md">
          <div className="container-fluid">
            <NavbarToggler onClick={this.toggleNav} />
            <Collapse
              isOpen={this.state.isNavOpen}
              navbar
              className="row navBar"
            >
              {/* <img
                // src="https://cdn1.iconfinder.com/data/icons/business-management-and-growth-1-6/65/11-512.png"
                src="https://cdn1.iconfinder.com/data/icons/accounting-26/64/money-income-growth-coin-graph-512.png"
                alt="cash-icon"
                className="icon"
              /> */}
              <NavLink className="planner col-2" to="/home">
                <h1>P𝖑ånner</h1>
              </NavLink>

              {/* <img
                  src="https://www.clipartmax.com/png/middle/67-677318_we-pay-cash-money-bag-icon-blue.png"
                  width="60"
                /> */}
              {/* <NavLink className="planner col-1 mt-1 ml-1" to="/home">
                <h4>ℙLåℕℕℰℜ</h4>
                <img
                  src="https://cdn4.iconfinder.com/data/icons/business-bicolor-2/512/payment-512.png"
                  width="76"
                  alt="cash-icon"
                />
              </NavLink> */}

              <span className="col-8 d-flex justify-content-center">
                <NavLink className="nav-link mr-4" to="/budget">
                  Budget
                </NavLink>
                <NavLink className="nav-link mr-4" to="/portfolio">
                  WatchList
                </NavLink>
                <NavLink className="nav-link mr-4" to="/todo">
                  My Tasks
                </NavLink>
              </span>
              <NavLink className="login ml-auto" to="/login">
                <span>Logⅈn</span>
              </NavLink>
            </Collapse>
          </div>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default Header;
