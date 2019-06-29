import React from "react";
import {  MDBRow, MDBCol, MDBCard, MDBIcon, MDBBtn  } from "mdbreact";

const CallToAction = (props) => {
  return (
    <section className="text-center my-5">
    <MDBRow className="text-center">
      <MDBCol md="12" className="mb-4 text-center">
        <MDBCard
          className="card card-image"
          style={{
            backgroundImage: props.callToAction_backgroundImage
          }}
        >
          <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded">
            <div>
              <h6 className={props.CallToAction_subtitle_color}>
                <MDBIcon icon="plane" />
                <strong> {props.CallToAction_subtitle_text}</strong>
              </h6>
              <h3 className="py-3 font-weight-bold">
                <strong>{props.CallToAction_title}</strong>
              </h3>
              <p className="pb-3">
              {props.CallToAction_bodyText}
              </p>
              <MDBBtn color={props.CallToAction_buttonColor} rounded size="md">
                <MDBIcon far icon="clone" className="left" /> {props.CallToAction_buttonText}
              </MDBBtn>
            </div>
          </div>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  </section>
  );
}

export default CallToAction;