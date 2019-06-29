import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBMask, MDBRow, MDBCol,  MDBBtn, MDBView, MDBContainer, MDBFormInline } from "mdbreact";

class MinimalistIntro extends Component {
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
        <MDBView className="mask flex-center" src={this.props.minimalist_intro_picture} fixed>
          <MDBMask className="rgba-white-light d-flex justify-content-center align-items-center">
            <MDBContainer>
              <MDBRow className="mask flex-center rgba-black-strong">
                <MDBCol md="12" className="mb-4 white-text text-center">
                  <h1 class="display-3 mb-0 pt-md-5 pt-5 white-text font-weight-bold">{this.props.minimalist_intro}</h1>
                  <hr className="hr-light my-4" />
                  <h5 className="text-uppercase pt-md-5 pt-sm-2 pt-5 pb-md-5 pb-sm-3 pb-5 white-text font-weight-bold">{this.props.minimalist_intro_business_info}</h5>
                  <MDBBtn className="white btn-light-blue" size="lg">{this.props.minimalist_intro_shop_button}</MDBBtn>
                  <MDBBtn className="white btn-indigo" size="lg" >{this.props.minimalist_intro_contact_button}</MDBBtn>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>
      </>
    );
  }
}

export default MinimalistIntro;