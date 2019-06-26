import React, { Component } from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardGroup, MDBContainer, MDBFormInline, MDBInput, MDBMask, MDBView, MDBBtn } from "mdbreact";
import redWall from "../assets/red_wall.jpg";
import "./home.css";


class Survey extends Component {
  constructor() {
    super();
    this.state = {
      company: "",
      website: "",
      industry: ""
    };
  }

  
  onClick = nr => () => {
    this.setState({
      industry: nr
    },function(){
      console.log(this.state)
      console.log(this.state.industry)
    });
  }

  handleInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    }, function() {
      console.log(this.state)
    })
  }

  sendForm = () => {
    fetch('https://some/url', {
      method: 'POST',
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        message: this.state.message
      })
    })
    .then(res => res.json())
    .catch(err => console.log(err));
  }
 
render() {
return (
  <hero>

<MDBView src={redWall}>
<MDBMask overlay="black-light" className="flex-center flex-column text-white text-center">
    <MDBCard color="primary-color" text="white" className="text-center p-3">
      <blockquote className="blockquote mb-0">
      <div className="form-group">
      <label htmlFor="formGroupExampleInput">What is the name of your business?</label>
      <MDBInput
        type="text"
        className="form-control"
        id="formGroupExampleInput"
        name="company"
        value={this.state.company}
        onInput={this.handleInput}
      />
    </div>
    <div className="form-group">
      <label htmlFor="formGroupExampleInput">Do you have a website?</label>
      <MDBInput
        type="text"
        className="form-control"
        id="formGroupExampleInput"
        name="website"
        value={this.state.website}
        onInput={this.handleInput}
      />
    </div>
      <p>What industry is your business?</p>
      <MDBFormInline>
        <MDBInput gap onClick={this.onClick(1)} checked={this.state.industry===1 ? true : false} label="Business" type="radio" id="radio1" />
        <MDBInput gap onClick={this.onClick(2)} checked={this.state.industry===2 ? true : false} label="E-Commerce" type="radio" id="radio2" />
        <MDBInput gap onClick={this.onClick(3)} checked={this.state.industry===3 ? true : false} label="Restaurant" type="radio" id="radio3" />
      </MDBFormInline>
      <footer className="blockquote-footer">
      <div className="text-center">
              <MDBBtn>Submit</MDBBtn>
            </div>
        </footer>
      </blockquote>
    </MDBCard>
  </MDBMask>
  </MDBView>
  </hero>
);
};
}

export default Survey;

