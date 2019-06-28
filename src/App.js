import React, { Component } from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import { MDBInput, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon, MDBSideNavItem, MDBSideNavCat, MDBSideNavNav, MDBSideNav, MDBContainer } from "mdbreact";
import "./index.css";
import Routes from "./Routes";
import b11Logo from "./assets/b11_logo.png"
import './App.css'
// import Hub
import { Auth, Hub } from 'aws-amplify'

function checkUser() {
  Auth.currentAuthenticatedUser()
    .then(user => console.log({ user }))
    .catch(err => console.log(err))
}

function signOut() {
  Auth.signOut()
    .then(data => console.log(data))
    .catch(err => console.log(err))
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      currentUser: ""
    };
  }

  // handleToggleClickA = () => {
  //   this.setState({
  //     toggleStateA: !this.state.toggleStateA
  //   });
  // };

  componentDidMount() {
    Auth.currentAuthenticatedUser()
    .then(user => {
      console.log({ user })
      console.log(user.attributes.email)
      this.setState({
        isLoggedIn: true,
        currentUser: user.attributes.email
      },function(){
        console.log(this.state)
      });
    }) 
    .catch(err => console.log(err))
  }

  componentDidUpdate() {
    Hub.listen('auth', (data) => {
      const { payload } = data
      console.log('A new auth event has happened: ', data)
       if (payload.event === 'signIn') {
         console.log('a user has signed in!')
       }
       if (payload.event === 'signOut') {
         console.log('a user has signed out!')
       }
    })
  }

  render() {
    
    const specialCaseNavbarStyles = {
      WebkitBoxOrient: "horizontal",
      flexDirection: "row"
    };

    const currentUserEmail = this.state.currentUser

    return (
        <div className="grey-skin">
          
          <MDBNavbar double expand="md" className="b11-red-nav">
            <MDBNavbarNav left>
              <MDBNavItem className="d-none d-md-inline" style={{ paddingTop: 0 }}>
              <MDBNavbarBrand>
              <img src={b11Logo} height="30" alt="" />
              </MDBNavbarBrand>
              </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right style={specialCaseNavbarStyles}>
              <MDBNavItem active>
                <MDBNavLink to="/">
                  <MDBIcon icon="envelope" className="d-inline-inline" />{" "}
                  <div className="d-none d-md-inline">Home</div>
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/survey">
                  <MDBIcon far icon="comments" className="d-inline-inline" />{" "}
                  <div className="d-none d-md-inline">Survey</div>
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/website">
                  <MDBIcon icon="user" className="d-inline-inline" />{" "}
                  <div className="d-none d-md-inline">Generated Website</div>
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/test">
                  <MDBIcon icon="user" className="d-inline-inline" />{" "}
                  <div className="d-none d-md-inline">Database Test</div>
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/nextstep">
                  <MDBIcon icon="user" className="d-inline-inline" />{" "}
                  <div className="d-none d-md-inline">Next Step</div>
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
               
                  <MDBIcon icon="user" className="d-inline-inline" />{" "}
                  <button onClick={() => Auth.federatedSignIn()}>Sign In</button>
              </MDBNavItem>
              <MDBNavItem>
               
                  <MDBIcon icon="user" className="d-inline-inline" />{" "}
                  <button onClick={signOut}>Sign Out</button>
              </MDBNavItem>
              <MDBNavItem>
               
                  <MDBIcon icon="user" className="d-inline-inline" />{" "}
                  <button onClick={checkUser}>Check User</button>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBNavbar>
         
          <Routes />
          
        </div>
     
    );
  }
}

export default App;
