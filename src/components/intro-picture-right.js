import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBMask, MDBRow, MDBCol, MDBBtn,   MDBView, MDBContainer, MDBFormInline } from "mdbreact";
import "../index.css";

class IntroPictureRight extends Component {
  state = {
    collapsed: false
  };

  handleTogglerClick = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.handleTogglerClick}
      />
    );
    return (
      <div id="apppage">
        <MDBView>
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <MDBContainer>
              <MDBRow>
                <div className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5">
                  <h1 className="h1-responsive font-weight-bold mt-sm-5">
                    {this.props.introPictureRight_title}{" "}
                  </h1>
                  <hr className={this.props.introPictureRight_divider} />
                  <h6 className="mb-4">
                  {this.props.introPictureRight_text}
                  </h6>
                  <MDBBtn color={this.props.introPictureRight_button1_color}>{this.props.introPictureRight_button1}</MDBBtn>
                  <MDBBtn outline color={this.props.introPictureRight_button2_outlineColor}>
                  {this.props.introPictureRight_button2}
                  </MDBBtn>
                </div>
                <MDBCol md="6" xl="5" className="mt-xl-5">
                  <img
                    src={this.props.introPictureRight_image}
                    alt=""
                    className="img-fluid"
                  />
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>
      </div>
    );
  }
}

export default IntroPictureRight;