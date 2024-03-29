import React from "react";
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCardTitle, MDBIcon } from "mdbreact";

const Jumbotron = (props) => {
  return (
   
      <MDBRow className>
        <MDBCol >
          <MDBJumbotron style={{ padding: 0 }}>
            <MDBCol className="text-white text-center py-5 px-4 my-5" style={{ backgroundImage: `url(https://ceafitness.com/wp-content/uploads/2019/06/Jumbotron2.jpg)` }}>
              <MDBCol className="py-5">
                <MDBCardTitle className="h1-responsive pt-3 m-5 font-bold">{props.jumbotron_title}</MDBCardTitle>
                <p className="mx-5 mb-5">{props.jumbotron_text}
                </p>
                <MDBBtn outline color="white" className="mb-5"><MDBIcon icon="clone" className="mr-2"></MDBIcon> {props.jumbotron_button}</MDBBtn>
              </MDBCol>
            </MDBCol>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    
  )
}

export default Jumbotron;