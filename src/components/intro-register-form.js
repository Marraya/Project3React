import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBMask, MDBRow, MDBCol, MDBIcon,
  MDBBtn, MDBView, MDBContainer, MDBCard, MDBCardBody, MDBInput, MDBFormInline } from "mdbreact";
import "../index.css";

class IntroRegisterForm extends Component {
  render() {

    return (
      <div id="classicformpage">
       <MDBView>
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <MDBContainer>
              <MDBRow>
                <div className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5">
                  <h1 className="h1-responsive font-weight-bold">
                    {this.props.IntroRegisterForm_title}{" "}
                  </h1>
                  <hr className={this.props.IntroRegisterForm_divider} />
                  <h6 className="mb-4">
                  {this.props.IntroRegisterForm_text}
                  </h6>
                  <MDBBtn outline color= {this.props.IntroRegisterForm_button_outline}>
                  {this.props.IntroRegisterForm_button}
                  </MDBBtn>
                </div>
                <MDBCol md="6" xl="5" className="mb-4">
                  <MDBCard id="classic-card">
                    <MDBCardBody className="z-depth-2 white-text">
                      <h3 className="text-center">
                        <MDBIcon icon= {this.props.IntroRegisterForm_registerArea_icon} /> {this.props.IntroRegisterForm_registerArea_title}
                      </h3>
                      <hr className= {this.props.IntroRegisterForm_registerArea_divider} />
                      <MDBInput label= {this.props.IntroRegisterForm_registerArea_nameField} icon="user" />
                      <MDBInput label= {this.props.IntroRegisterForm_registerArea_emailField} icon="envelope" />
                      <MDBInput
                        label= {this.props.IntroRegisterForm_registerArea_passwordField}
                        icon="lock"
                        type="password"
                      />
                      <div className="text-center mt-4 black-text">
                        <MDBBtn color= {this.props.IntroRegisterForm_registerArea_buttonColor}> {this.props.IntroRegisterForm_registerArea_button}</MDBBtn>
                        <hr className= {this.props.IntroRegisterForm_registerArea_divider} />
                        <div className="text-center d-flex justify-content-center white-label">
                          <a href="#!" className="p-2 m-2">
                            <MDBIcon fab icon="twitter" className= {this.props.IntroRegisterForm_registerArea_iconColor} />
                          </a>
                          <a href="#!" className="p-2 m-2">
                            <MDBIcon fab icon="linkedin-in" className={this.props.IntroRegisterForm_registerArea_iconColor} />
                          </a>
                          <a href="#!" className="p-2 m-2">
                            <MDBIcon fab icon="instagram" className={this.props.IntroRegisterForm_registerArea_iconColor} />
                          </a>
                        </div>
                      </div>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>
      </div>
    );
  }
}

export default IntroRegisterForm;