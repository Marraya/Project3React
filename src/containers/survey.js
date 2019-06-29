import React, { Component } from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardGroup, MDBContainer, MDBFormInline, MDBInput, MDBMask, MDBView, MDBBtn } from "mdbreact";
import redWall from "../assets/red_wall.jpg";
import LoaderButton from "../components/LoaderButton";
import axios from 'axios';
import "./home.css";

import { API } from "aws-amplify";
import { Auth } from 'aws-amplify';


class Survey extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: null,
      business: "",
      website: "",
      industry: "",
      currentUser: ""
    };
  }

  validateForm() {
    return this.state.business.length > 0 && this.state.industry.length > 0;
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

  sendForm = async event => {

    event.preventDefault();

    console.log(`Form Submitted:`);
    console.log(`Business Name: ${this.state.business}`);
    console.log(`Website URL: ${this.state.website}`);
    console.log(`Industry: ${this.state.industry}`);

    this.setState({ isLoading: true });

    Auth.currentAuthenticatedUser()
    .then(user => {
      console.log({ user })
      console.log(user.attributes.email)
      this.setState({
        currentUser: user.attributes.email
      },function(){
        console.log(this.state)
      });
    }) 
    .catch(err => console.log(err))

    try {
      await this.createNewWebsite({
        business: this.state.business,
        industry: this.state.industry,
        website: this.state.website,
      });
      this.props.history.push("/website");
    } catch (e) {
      alert(e);
      this.setState({ isLoading: false });
    }
  }

  createNewWebsite(newClient) {
    return API.post("clients", "/", {
      body: newClient
    });
  }

  // axios.post('http://localhost:4000/client/add', newClientProfile)
  // .then(res => console.log(res.data));

  // this.setState({ isLoading: true });
  // }
 
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
        name="business"
        value={this.state.business}
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
        <MDBInput gap onClick={this.onClick('business')} checked={this.state.industry==='business' ? true : false} label="Business" type="radio" id="radio1" />
        <MDBInput gap onClick={this.onClick('ecommerce')} checked={this.state.industry==='ecommerce' ? true : false} label="E-Commerce" type="radio" id="radio2" />
        <MDBInput gap onClick={this.onClick('restaurant')} checked={this.state.industry==='restaurant' ? true : false} label="Restaurant" type="radio" id="radio3" />
      </MDBFormInline>
      <footer className="blockquote-footer">
      {/* <div className="text-center">
              <MDBBtn onClick={this.sendForm}>Submit</MDBBtn>
            </div> */}

            <LoaderButton
            block
            bsStyle="primary"
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
            onClick={this.sendForm}
            isLoading={this.state.isLoading}
            text="Generate Your Website"
            loadingText="Generating…"
          />
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

