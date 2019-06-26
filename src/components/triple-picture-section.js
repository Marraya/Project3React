import React from "react";
import {  MDBRow, MDBCol, MDBCardBody, MDBIcon, MDBBtn, MDBView, MDBMask } from "mdbreact";

const TriplePictureSection = (props) => {
  return (
    <section className="text-center my-5">
      <MDBRow className="text-center">
        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
          <MDBView className="overlay rounded z-depth-1" waves>
            <img
              src={props.triplePictureSection_image1}
              alt=""
              className="img-fluid"
            />
            <a href="#!">
              <MDBMask overlay="white-slight" />
            </a>
          </MDBView>
          <MDBCardBody className="pb-0">
            <h4 className="font-weight-bold my-3">{props.triplePictureSection_title1}</h4>
            <p className="grey-text">
            {props.triplePictureSection_body1}
            </p>
            <MDBBtn color={props.triplePictureSection_button1_color} size="sm">
              <MDBIcon far icon="clone" className="left" /> {props.triplePictureSection_button1}
            </MDBBtn>
          </MDBCardBody>
        </MDBCol>
        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
          <MDBView className="overlay rounded z-depth-1" waves>
            <img
              src={props.triplePictureSection_image2}
              alt=""
              className="img-fluid"
            />
            <a href="#!">
              <MDBMask overlay="white-slight" />
            </a>
          </MDBView>
          <MDBCardBody className="pb-0">
            <h4 className="font-weight-bold my-3">{props.triplePictureSection_title2}</h4>
            <p className="grey-text">
            {props.triplePictureSection_body2}
            </p>
            <MDBBtn color={props.triplePictureSection_button2_color} size="sm">
              <MDBIcon far icon="clone" className="left" /> {props.triplePictureSection_button2}
            </MDBBtn>
          </MDBCardBody>
        </MDBCol>
        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
          <MDBView className="overlay rounded z-depth-1" waves>
            <img
              src={props.triplePictureSection_image3}
              alt=""
              className="img-fluid"
            />
            <a href="#!">
              <MDBMask overlay="white-slight" />
            </a>
          </MDBView>
          <MDBCardBody className="pb-0">
            <h4 className="font-weight-bold my-3">{props.triplePictureSection_title3}</h4>
            <p className="grey-text">
            {props.triplePictureSection_body3}
            </p>
            <MDBBtn color="indigo" size="sm">
              <MDBIcon far icon="clone" className="left" /> {props.triplePictureSection_button3}
            </MDBBtn>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </section>
  );
}

export default TriplePictureSection;