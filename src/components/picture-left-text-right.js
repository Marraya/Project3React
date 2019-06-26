import React from "react";
import {  MDBRow, MDBCol, MDBCardBody, MDBIcon, MDBBtn, MDBView, MDBMask } from "mdbreact";

const PictureLeftTextRight = (props) => {
  return (
    <section className="my-5">
        <MDBRow>
          <MDBCol lg="5" className="mb-lg-0 mb-5">
            <img
              src={props.pictureLefttextRight_image}
              alt=""
              className="img-fluid rounded z-depth-1"
            />
          </MDBCol>
          <MDBCol lg="7">
            <MDBRow className="mb-3">
              <MDBCol md="1" size="2">
                <MDBIcon far icon={props.pictureLefttextRight_icon1} size="2x" className={props.pictureLefttextRight_icon1_color} />
              </MDBCol>
              <MDBCol md="11" size="10">
                <h5 className="font-weight-bold mb-3">{props.pictureLefttextRight_title1}</h5>
                <p className="grey-text">
                {props.pictureLefttextRight_body1}
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol md="1" size="2">
                <MDBIcon icon={props.pictureLefttextRight_icon2} size="2x" className={props.pictureLefttextRight_icon2_color} />
              </MDBCol>
              <MDBCol md="11" size="10">
                <h5 className="font-weight-bold mb-3">{props.pictureLefttextRight_title2}</h5>
                <p className="grey-text">
                {props.pictureLefttextRight_body2}
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol md="1" size="2">
                <MDBIcon far icon={props.pictureLefttextRight_icon3} size="2x" className={props.pictureLefttextRight_icon3_color} />
              </MDBCol>
              <MDBCol md="11" size="10">
                <h5 className="font-weight-bold mb-3">{props.pictureLefttextRight_title3}</h5>
                <p className="grey-text">
                {props.pictureLefttextRight_body3}
                </p>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </section>
  );
}

export default PictureLeftTextRight;