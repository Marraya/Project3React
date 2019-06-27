import React, { Component } from 'react';
import axios from 'axios';
import MinimalistIntro from "../components/minimalist-intro";
import IntroPictureRight from "../components/intro-picture-right";
import IntroRegisterForm from "../components/intro-register-form";
import { MDBInput, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon, MDBSideNavItem, MDBSideNavCat, MDBSideNavNav, MDBSideNav, MDBContainer } from "mdbreact";


class Website extends React.Component {
  constructor() {
    super();
    this.state = {
      business: "",
      website: "",
      industry: "",
      image_scrape: [],
    };
  }

  componentDidMount() {
    axios.get('http://localhost:4000/client')
        .then(res => {

          var clientBusiness = res.data[0].client_business;
          var clientWebsite = res.data[0].client_website;
          var clientIndustry = res.data[0].client_industry;

          console.log(res.data[0])
          this.setState({
            business: clientBusiness,
            website: clientWebsite,
            industry: clientIndustry
            }, function() {
              console.log(this.state)
            })
            
          var industryChoice = {
          
          client_industry: this.state.industry

        }
            axios.post('http://localhost:4000/client/scrape', industryChoice)
        .then(res => {

         console.log(res.data)
         console.log(res.data.images_results)
         var imageScrapeArray = res.data.images_results;
         
        //  for (var i = 25; i < res.data.images_results.length; i++) {
        //        imageScrapeArray.push(res.data.images_results[i]);
        //  }

         console.log(imageScrapeArray)


         this.setState({
          image_scrape: imageScrapeArray
          }, function() {
            console.log(this.state)
            console.log(this.state.image_scrape[0].original)
          })

        })
        .catch(function (error){
            console.log(error);
        })
        })
        .catch(function (error){
            console.log(error);
        })

        console.log(this.state)

        // second axios call for Scrape response


 }


  render() {
    
    const userIndustry = this.state.industry
    let intro;

    console.log(userIndustry)

    if (userIndustry === "business") {
      intro = <IntroPictureRight
      introPictureRight_title=""
      introPictureRight_divider="hr-light" //this is the divider color and style
      introPictureRight_text=""
      introPictureRight_button1=""
      introPictureRight_button1_color=""
      introPictureRight_button2=""
      introPictureRight_button2_outlineColor=""
      introPictureRight_image=""
      ></IntroPictureRight>
    }
    else if (userIndustry === "ecommerce") {
      intro = <MinimalistIntro
      minimalist_intro={this.state.business}
      minimalist_intro_business_info="Your business info will go here"
      minimalist_intro_shop_button="Shop Now"
      minimalist_intro_contact_button="Contact Us"
      ></MinimalistIntro>
    }
    else if (userIndustry === "restaurant") {
      intro = <MinimalistIntro
      minimalist_intro={this.state.business}
      minimalist_intro_business_info="Your business info will go here"
      minimalist_intro_shop_button="Shop Now"
      minimalist_intro_contact_button="Contact Us"
      ></MinimalistIntro>
    }
    else {
      intro = <h1> Nothing </h1>
    }

    console.log(intro)
    return (

      
      <div>
        {intro}
      </div>

    );
  }
}
export default Website