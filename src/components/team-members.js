import React from "react";
import {  MDBRow, MDBCol, MDBCard, MDBAvatar, MDBCardBody, MDBIcon } from "mdbreact";

const TeamMembers = (props) => {
  return (
    <MDBCard className="my-5 px-5 pb-5 text-center">
        <MDBCardBody>
          <h2 className="h1-responsive font-weight-bold my-5">
            {props.teamMembers_title}
          </h2>
          <p className="grey-text w-responsive mx-auto mb-5">
          {props.teamMembers_titleBody}
          </p>
          <MDBRow>
            <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
              <MDBAvatar
                tag="img"
                src={props.teamMembers_memberPicture1}
                className="rounded-circle z-depth-1 img-fluid"
                alt="Sample avatar"
              />
              <h5 className="font-weight-bold mt-4 mb-3">{props.teamMembers_person1_name}</h5>
              <p className={props.teamMembers_person1_position_textcolor}>{props.teamMembers_person1_position}</p>
              <p className="grey-text">
              {props.teamMembers_person1_text}
              </p>
              <ul className="list-unstyled mb-0">
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="facebook-f" className={props.teamMembers_iconColor} />
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="twitter" className={props.teamMembers_iconColor} />
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="instagram" className={props.teamMembers_iconColor} />
                </a>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
              <MDBAvatar
                tag="img"
                src={props.teamMembers_memberPicture2}
                className="rounded-circle z-depth-1 img-fluid"
                alt="Sample avatar"
              />
              <h5 className="font-weight-bold mt-4 mb-3">{props.teamMembers_person2_name}</h5>
              <p className={props.teamMembers_person2_position_textcolor}>{props.teamMembers_person2_position}</p>
              <p className="grey-text">
              {props.teamMembers_person2_text}
              </p>
              <ul className="list-unstyled mb-0">
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="facebook-f" className={props.teamMembers_iconColor} />
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="instagram" className={props.teamMembers_iconColor} />
                </a>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
              <MDBAvatar
                tag="img"
                src={props.teamMembers_memberPicture3}
                className="rounded-circle z-depth-1 img-fluid"
                alt="Sample avatar"
              />
              <h5 className="font-weight-bold mt-4 mb-3">{props.teamMembers_person3_name}</h5>
              <p className={props.teamMembers_person3_position_textcolor}>{props.teamMembers_person3_position}</p>
              <p className="grey-text">
              {props.teamMembers_person3_text}
              </p>
              <ul className="list-unstyled mb-0">
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="facebook-f" className={props.teamMembers_iconColor} />
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="instagram" className={props.teamMembers_iconColor} />
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="dribbble" className={props.teamMembers_iconColor} />
                </a>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
              <MDBAvatar
                tag="img"
                src={props.teamMembers_memberPicture4}
                className="rounded-circle z-depth-1 img-fluid"
                alt="Sample avatar"
              />
              <h5 className="font-weight-bold mt-4 mb-3">{props.teamMembers_person4_name}</h5>
              <p className={props.teamMembers_person4_position_textcolor}>{props.teamMembers_person4_position}</p>
              <p className="grey-text">
              {props.teamMembers_person4_text}
              </p>
              <ul className="list-unstyled mb-0">
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="facebook-f" className={props.teamMembers_iconColor} />
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="github" className={props.teamMembers_iconColor} />
                </a>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
  );
}

export default TeamMembers;