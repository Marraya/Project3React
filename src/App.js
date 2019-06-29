import React, { Component, Fragment } from "react";
import { Link, withRouter } from "react-router-dom";

import { MDBInput, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon, MDBSideNavItem, MDBSideNavCat, MDBSideNavNav, MDBSideNav, MDBContainer } from "mdbreact";
import "./index.css";
import Routes from "./Routes";
import b11Logo from "./assets/b11_logo.png"
import './App.css'
// import Hub
import { Auth, Hub } from 'aws-amplify'

// function checkUser() {
//   Auth.currentAuthenticatedUser()
//     .then(user => {
      
//       console.log({ user })
//       this.props.userHasAuthenticated(true);
      
//     })
//     .catch(err => console.log(err))
// }

// function signOut() {
//   Auth.signOut()
//     .then(data => {
      
//       this.userHasAuthenticated(false);
//       console.log(data)
//     })
//     .catch(err => console.log(err))
// }



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
      isAuthenticating: true
    };
  }

  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  }

  // componentDidMount() {
  //   // Auth.currentAuthenticatedUser()
  //   // .then(user => {
  //   //   console.log({ user })
  //   //   console.log(user.attributes.email)
  //   //   this.setState({
  //   //     isLoggedIn: true,
  //   //     currentUser: user.attributes.email
  //   //   },function(){
  //   //     console.log(this.state)
  //   //   });
  //   // }) 
  //   // .catch(err => console.log(err))
  // }

  async componentDidMount() {
    try {
      await Auth.currentSession();
      this.userHasAuthenticated(true);
    }
    catch(e) {
      if (e !== 'No current user') {
        alert(e);
      }
    }
  
    this.setState({ isAuthenticating: false });
  }

  componentDidUpdate() {
    // Hub.listen('auth', (data) => {
    //   const { payload } = data
    //   console.log('A new auth event has happened: ', data)
    //    if (payload.event === 'signIn') {
    //      console.log('a user has signed in!')
    //    }
    //    if (payload.event === 'signOut') {
    //      console.log('a user has signed out!')
    //    }
    // })
  }

  handleLogout = async event => {
    await Auth.signOut();
  
    this.userHasAuthenticated(false);
  
    this.props.history.push("/login");
  }
  

  render() {
    
    const specialCaseNavbarStyles = {
      WebkitBoxOrient: "horizontal",
      flexDirection: "row"
    };

    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated
    };

    return (

      !this.state.isAuthenticating &&
        <div className="grey-skin">
          
          <MDBNavbar double expand="md" className="b11-red-nav">
            <MDBNavbarNav left>
              <MDBNavItem className="d-none d-md-inline" style={{ paddingTop: 0 }}>
              <MDBNavbarBrand>
              <Link to="/"><img src={b11Logo} height="30" alt="" /></Link>
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


{this.state.isAuthenticated
  ? <MDBNavItem onClick={this.handleLogout}>       
    <MDBIcon icon="user" className="d-inline-inline" />{" "}
    <div className="d-none d-md-inline">Logout</div>
    </MDBNavItem>
  : <Fragment>
       <MDBNavItem>
              <MDBNavLink to="/login">
                  <MDBIcon icon="user" className="d-inline-inline" />{" "}
                  <div className="d-none d-md-inline">Login</div>
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
              <MDBNavLink to="/signup">
                  <MDBIcon icon="user" className="d-inline-inline" />{" "}
                  <div className="d-none d-md-inline">Sign Up</div>
                </MDBNavLink>
              </MDBNavItem>
    </Fragment>
}
            </MDBNavbarNav>
          </MDBNavbar>
         
          <Routes childProps={childProps} />
          
        </div>
     
    );
  }
}

export default withRouter(App);
