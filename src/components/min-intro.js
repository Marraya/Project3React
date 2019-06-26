import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBMask, MDBRow, MDBCol,  MDBBtn, MDBView, MDBContainer, MDBFormInline } from "mdbreact";

class MinimalisticIntro extends Component {
  state = {
    collapsed: false
  };

  handleTogglerClick = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    const navStyle = { marginTop: "0rem" };
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.handleTogglerClick}
      />
    );
    return (
      <>
        <MDBView src={`https://static.kent.ac.uk/nexus/ems/611.jpg`}>
          <MDBMask className="rgba-black-light d-flex justify-content-center align-items-center">
            <MDBContainer>
              <MDBRow>
                <MDBCol md="12" className="mb-4 white-text text-center">
                  <h1 className={this.props.company_title_style}>{this.props.company_title}</h1>
                  <hr className="hr-light my-4" />
                  <h5 className="text-uppercase mb-4 white-text "><strong>Photography & design</strong></h5>
                  <MDBBtn outline color="white">portfolio</MDBBtn>
                  <MDBBtn outline color="white">About me</MDBBtn>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>
      </>
    );
  }
}

export default MinimalisticIntro;