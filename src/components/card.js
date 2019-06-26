import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

const Card = () => {
  return (
    <MDBCol>
      <MDBCard style={{ width: "22rem" }}>
        <MDBCardImage className="img-fluid" src={props.card_image} waves />
        <MDBCardBody>
          <MDBCardTitle>{props.card_title}</MDBCardTitle>
          <MDBCardText>
            {props.card_body_text}
          </MDBCardText>
          <MDBBtn href="#">{props.card_button}</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
}

export default Card;