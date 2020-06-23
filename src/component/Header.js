import React from "react";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  Jumbotron,
} from "reactstrap";
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
        <Navbar  sticky="top" expand="md">
          <div className="container-fluid">
            <NavbarToggler onClick={this.toggleNav} />
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/home">
                    <i className="fa fa-home fa-lg" /> Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/budget">
                    <i className="fa fa-money fa-lg" /> Budget
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/portfolio">
                    <i className="fa fa-eye fa-lg" /> WatchList
                  </NavLink>
                </NavItem>
                
                <NavItem>
                  <NavLink className="nav-link" to="/todo">
                    <i className="fa fa-list fa-lg" /> My Tasks
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/login">
                    <i className="fa fa-sign-in fa-lg" /> Login
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default Header;
