import React from "react";
import {  MDBRow, MDBCol, MDBCardBody, MDBIcon, MDBBtn, MDBView, MDBMask } from "mdbreact";

const TitleSection = (props) => {
    return (
      <section className="text-center my-5">
        <h2 className="h1-responsive font-weight-bold my-5">
          {props.titlesection_title}
        </h2>
        <p className="grey-text w-responsive mx-auto mb-5">
        {props.titlesection_body}
        </p>
        </section>
         );
        }

        export default TitleSection;