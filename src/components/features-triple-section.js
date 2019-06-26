import React from "react";
import {  MDBRow, MDBCol, MDBIcon } from "mdbreact";

const FeaturesTriple = (props) => {
  return (
      <section className="text-center my-5">
        <h2 className="h1-responsive font-weight-bold my-5">
          {props.features_triple_title}
        </h2>
        <p className="lead grey-text w-responsive mx-auto mb-5">
          {props.features_triple_body}
        </p>
        <MDBRow>
          <MDBCol md="4">
            <MDBIcon icon={props.features_first_icon} size="3x" className="red-text" />
            <h5 className="font-weight-bold my-4">{props.first_triple_title}</h5>
            <p className="grey-text mb-md-0 mb-5">
            {props.first_triple_body}
            </p>
          </MDBCol>
          <MDBCol md="4">
            <MDBIcon icon={props.features_second_icon} size="3x" className="cyan-text" />
            <h5 className="font-weight-bold my-4">{props.second_triple_title}</h5>
            <p className="grey-text mb-md-0 mb-5">
            {props.second_triple_body}
            </p>
          </MDBCol>
          <MDBCol md="4">
            <MDBIcon far icon={props.features_third_icon} size="3x" className="orange-text" />
            <h5 className="font-weight-bold my-4">{props.third_triple_title}</h5>
            <p className="grey-text mb-md-0 mb-5">
            {props.third_triple_body}
            </p>
          </MDBCol>
        </MDBRow>
      </section>
  );
}

export default FeaturesTriple;