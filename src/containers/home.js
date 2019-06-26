import React, { Component } from "react";
import { MDBMask, MDBView } from 'mdbreact';
import "./home.css"
import redWall from "../assets/red_wall.jpg"

class Home extends Component {
  render() {
    return (
      <hero>
      <MDBView src={redWall}>
            <MDBMask overlay="black-light" className="flex-center flex-column text-white text-center">
              <h2 className="b11-intro-title">Your New Website</h2>
              <h3>5 Minutes Or Less</h3>
              <br />
              <p>We know you're busy. Give us 5 minutes to show you what we can do.</p>
            </MDBMask>
            <div class="ocean">
            <div class="wave"></div>
            <div class="wave"></div>
            </div>
      </MDBView>
      </hero>
    )
  }
}
export default Home