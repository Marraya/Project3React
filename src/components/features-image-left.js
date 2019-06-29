import React from "react";
import {  MDBRow, MDBCol, MDBIcon, MDBContainer } from "mdbreact";

const FeaturesImageLeft = (props) => {
  return (
    <MDBContainer>
    <section className="my-5 pb-5">
        <h2 className="h1-responsive font-weight-bold text-center my-5">
          {props.features_imageLeft_title}
        </h2>
        <p className="lead grey-text w-responsive text-center mx-auto mb-5">
        {props.features_imageLeft_titleBody}
        </p>

        <MDBRow>
          <MDBCol lg="5" className="text-center text-lg-left">
            <img
              className="img-fluid"
              src={props.features_imageLeft_image}
              alt=""
            />
          </MDBCol>
          <MDBCol lg="7">
            <MDBRow className="mb-3">
              <MDBCol size="1">
                <MDBIcon icon={props.features_imageLeft_firstIcon} size="lg" className="indigo-text" />
              </MDBCol>
              <MDBCol xl="10" md="11" size="10">
                <h5 className="font-weight-bold mb-3">{props.features_imageLeft_firstTitle}</h5>
                <p className="grey-text">
                {props.features_imageLeft_firstText}
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol size="1">
                <MDBIcon icon={props.features_imageLeft_secondIcon} size="lg" className="indigo-text" />
              </MDBCol>
              <MDBCol xl="10" md="11" size="10">
                <h5 className="font-weight-bold mb-3">{props.features_imageLeft_secondTitle}</h5>
                <p className="grey-text">
                {props.features_imageLeft_secondText}
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol size="1">
                <MDBIcon icon={props.features_imageLeft_thirdIcon} size="lg" className="indigo-text" />
              </MDBCol>
              <MDBCol xl="10" md="11" size="10">
                <h5 className="font-weight-bold mb-3">{props.features_imageLeft_thirdTitle}</h5>
                <p className="grey-text">
                {props.features_imageLeft_thirdText}
                </p>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </section>
      </MDBContainer>
  );
}

export default FeaturesImageLeft;