import React, { Component } from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import { MDBInput, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon, MDBSideNavItem, MDBSideNavCat, MDBSideNavNav, MDBSideNav, MDBContainer } from "mdbreact";
import "./index.css";
import Routes from "./Routes";
import b11Logo from "./assets/b11_logo.png"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleStateA: false
    };
  }

  handleToggleClickA = () => {
    this.setState({
      toggleStateA: !this.state.toggleStateA
    });
  };

  render() {
    const mainStyle = {
      paddingTop: "4rem"
    };

    const specialCaseNavbarStyles = {
      WebkitBoxOrient: "horizontal",
      flexDirection: "row"
    };

    return (
        <div className="grey-skin">
          <MDBSideNav
            logo="https://mdbootstrap.com/img/logo/mdb-transparent.png"
            triggerOpening={this.state.toggleStateA}
            bg="https://mdbootstrap.com/img/Photos/Others/sidenav4.jpg"
            mask="strong"
            hidden
          >
            <li>
              <ul className="social">
                <li>
                  <a href="#!">
                    <MDBIcon fab icon="facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <MDBIcon fab icon="pinterest" />
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <MDBIcon fab icon="google-plus-g" />
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <MDBIcon fab icon="twitter" />
                  </a>
                </li>
              </ul>
            </li>
            <MDBInput
              type="text"
              default="Search"
              style={{
                color: "#fff",
                padding: "0 10px 8px 30px",
                boxSizing: "border-box"
              }}
            />
            <MDBSideNavNav>
              <MDBSideNavCat
                name="Submit blog"
                id="submit-blog-cat"
                icon="chevron-right"
              >
                <MDBSideNavItem>Submit listing</MDBSideNavItem>
                <MDBSideNavItem>Registration form</MDBSideNavItem>
              </MDBSideNavCat>
              <MDBSideNavCat
                iconRegular
                name="Instruction"
                id="instruction-cat"
                icon="hand-pointer"
              >
                <MDBSideNavItem>For bloggers</MDBSideNavItem>
                <MDBSideNavItem>For authors</MDBSideNavItem>
              </MDBSideNavCat>
              <MDBSideNavCat name="About" id="about-cat" icon="eye">
                <MDBSideNavItem>Instruction</MDBSideNavItem>
                <MDBSideNavItem>Monthly meetings</MDBSideNavItem>
              </MDBSideNavCat>
              <MDBSideNavCat
                name="Contact me"
                id="contact-me-cat"
                icon="envelope"
              >
                <MDBSideNavItem>FAQ</MDBSideNavItem>
                <MDBSideNavItem>Write a message</MDBSideNavItem>
              </MDBSideNavCat>
            </MDBSideNavNav>
          </MDBSideNav>
          <MDBNavbar double expand="md" className="b11-red-nav">
            <MDBNavbarNav left>
              <MDBNavItem>
                <div
                  onClick={this.handleToggleClickA}
                  key="sideNavToggleA"
                  style={{
                    lineHeight: "32px",
                    marginRight: "1em",
                    verticalAlign: "middle"
                  }}
                >
                  <MDBIcon icon="bars" color="white" size="2x" style={{ marginTop: 5 }} />
                </div>
              </MDBNavItem>
              <MDBNavItem className="d-none d-md-inline" style={{ paddingTop: 0 }}>
              <MDBNavbarBrand>
              <img src={b11Logo} height="30" alt="" />
              </MDBNavbarBrand>
              </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right style={specialCaseNavbarStyles}>
              <MDBNavItem active>
                <MDBNavLink to="#!">
                  <MDBIcon icon="envelope" className="d-inline-inline" />{" "}
                  <div className="d-none d-md-inline">Contact</div>
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="#!">
                  <MDBIcon far icon="comments" className="d-inline-inline" />{" "}
                  <div className="d-none d-md-inline">Support</div>
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="#!">
                  <MDBIcon icon="user" className="d-inline-inline" />{" "}
                  <div className="d-none d-md-inline">Account</div>
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    <div className="d-none d-md-inline">Dropdown</div>
                  </MDBDropdownToggle>
                  <MDBDropdownMenu right>
                    <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                    <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                    <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                    <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBNavbar>
          <main>
          <Routes />
          </main>
        </div>
     
    );
  }
}

export default App;
