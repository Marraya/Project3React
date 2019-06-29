import React, { Component } from 'react';
import axios from 'axios';
import MinimalistIntro from "../components/minimalist-intro";
import CommerceCategories from "../components/commerce-categories";
import Jumbotron from "../components/jumbotron";
import CommerceItems from "../components/commerce-items";
import CommerceContact from "../components/commerce-contact";
import Card from "../components/card";
import FeaturesTriple from "../components/features-triple-section";
import FeaturesImageLeft from "../components/features-image-left";
import IntroPictureRight from "../components/intro-picture-right";
import IntroRegisterForm from "../components/intro-register-form";
import TitleSection from "../components/title-section";
import TriplePictureSection from "../components/triple-picture-section";
import PictureLeftTextRight from "../components/picture-left-text-right";
import CallToAction from "../components/call-to-action";
import TeamMembers from "../components/team-members";
import FeaturesTextRight from "../components/features-text-right";
import { MDBInput, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon, MDBSideNavItem, MDBSideNavCat, MDBSideNavNav, MDBSideNav, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import PricingPlans from "../components/pricing-plans";
import { Auth, Hub } from 'aws-amplify'
import { API, Storage } from "aws-amplify";


class Website extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      // client: null,
      business: "",
      website: "",
      industry: "",
      image_scrape: [],
      profiles: []
    };
  }

  async componentDidMount() {
    if (!this.props.isAuthenticated) {
      return;
    }

    try {
      const loadedProfile = await this.getClient();
      // const { business, website, industry } = generatedClient;
      console.log(loadedProfile[0])
      this.setState({
        business: loadedProfile[0].business,
        website: loadedProfile[0].website,
        industry: loadedProfile[0].industry,
      },
      console.log(this.state));
    } catch (e) {
      alert(e);
    }
    this.setState({ isLoading: false 
    }, console.log(this.state));
  }

  getClient() {
    return API.get("clients", `/`);
    // ${this.props.match.params.id}
  }

  render() {
    
    const userIndustry = this.state.industry
    let intro;
    let section1;
    let section2;
    let section3;
    let section4;
    let section5;
    let section6;
    let section7;
    let contact;

    if (userIndustry === "business") {
      intro = <MinimalistIntro
      minimalist_intro={this.state.business}
      minimalist_intro_business_info="Your business info will go here"
      minimalist_intro_shop_button="Shop Now"
      minimalist_intro_contact_button="Contact Us"
      ></MinimalistIntro>
      section1 = <FeaturesTriple
      features_triple_title="Services section"
      features_triple_body="Write a little something about your business here."
      features_first_icon="chart-area"
      first_triple_title="Sercives1"
      first_triple_body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      features_second_icon="book"
      second_triple_title="Services2"
      second_triple_body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      features_third_icon="comments"
      third_triple_title="Services3"
      third_triple_body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      >
      </FeaturesTriple>
      section2 = <CallToAction
      callToAction_backgroundImage=
      "url(https://mdbootstrap.com/img/Photos/Others/img%20%2832%29.jpg)"
      CallToAction_subtitle_color="White"
      CallToAction_subtitle_text="CTA"
      CallToAction_title="Call To Action"
      CallToAction_bodyText="This is a call to action for your business"
      CallToAction_buttonColor="white"
      CallToAction_buttonText="Button"
      >
      </CallToAction>
      section7 = <PictureLeftTextRight
      pictureLefttextRight_image="https://mdbootstrap.com/img/Photos/Others/screens-section.jpg"
      pictureLefttextRight_icon1="share"
      pictureLefttextRight_icon1_color="indigo-text"
      pictureLefttextRight_title1="Feature 1"
      pictureLefttextRight_body1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      pictureLefttextRight_icon2="share"
      pictureLefttextRight_icon2_color="indigo-text"
      pictureLefttextRight_title2="Feature 2"
      pictureLefttextRight_body2="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      pictureLefttextRight_icon3="share"
      pictureLefttextRight_icon3_color="indigo-text"
      pictureLefttextRight_title3="Feature 3"
      pictureLefttextRight_body3="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      >
      </PictureLeftTextRight>
      section4 = <TriplePictureSection
      triplePictureSection_image1="https://mdbootstrap.com/img/Photos/Others/images/58.jpg"
      triplePictureSection_title1="Title 1"
      triplePictureSection_body1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      triplePictureSection_button1_color="indigo"
      triplePictureSection_button1="View Project"
      triplePictureSection_image2="https://mdbootstrap.com/img/Photos/Others/project4.jpg"
      triplePictureSection_title2="Title 2"
      triplePictureSection_body2="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      triplePictureSection_button2_color="indigo"
      triplePictureSection_button2="View Project"
      triplePictureSection_image3="https://mdbootstrap.com/img/Photos/Others/images/88.jpg"
      triplePictureSection_title3="Title 3"
      triplePictureSection_body3="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      triplePictureSection_button3="View Project"
      triplePictureSection_button3_color="indigo"
      ></TriplePictureSection>
        section3 = <FeaturesImageLeft
        features_imageLeft_title="Information About The Business"
        features_imageLeft_titleBody="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        features_imageLeft_image="https://mdbootstrap.com/img/Photos/Others/images/83.jpg"
        features_imageLeft_firstIcon="book"
        features_imageLeft_firstTitle="Title 1"
        features_imageLeft_firstText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        features_imageLeft_secondIcon="calendar"
        features_imageLeft_secondTitle="Title 2"
        features_imageLeft_secondText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        features_imageLeft_thirdIcon="pen"
        features_imageLeft_thirdTitle="Title 3"
        features_imageLeft_thirdText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      ></FeaturesImageLeft>
        section5 = <Jumbotron
        jumbotron_title="Jumbotron Title Here"
        jumbotron_text=""
        jumbotron_button="View More"
        ></Jumbotron>
      
      section6 = <TitleSection
      titlesection_title="Write Something Here"
      titlesection_body="Here is some information about your product"
      ></TitleSection>

      contact = <CommerceContact
      commerce_contact_title="Contact Us"
      commerce_contact_description="Write a description for contact here"
      >
      </CommerceContact>
    }
    else if (userIndustry === "ecommerce") {
      intro = <MinimalistIntro
      minimalist_intro={this.state.business}
      minimalist_intro_business_info="Your business info will go here"
      minimalist_intro_shop_button="Shop Now"
      minimalist_intro_contact_button="Contact Us"
      ></MinimalistIntro>
      section1 = <CommerceCategories
      commerce_categories="Choose A Category"
      commerce_category1="Category 1"
      commerce_category2="Category 2"
      commerce_category3="Category 3"
      commerce_category4="Category 4"
      ></CommerceCategories>
      section2 = <CallToAction
      callToAction_backgroundImage=
      "url(https://mdbootstrap.com/img/Photos/Others/img%20%2832%29.jpg)"
      CallToAction_subtitle_color="White"
      CallToAction_subtitle_text="CTA"
      CallToAction_title="Call To Action"
      CallToAction_bodyText="This is a call to action for your business"
      CallToAction_buttonColor="white"
      CallToAction_buttonText="Button"
      ></CallToAction>
      section3 = <CommerceItems
      commerce_items_title="Our Best Sellers"
      commerce_items_description="A short description of your products"
      commerce_items_category="Your Category"
      commerce_items_itemName="Your Items"
      ></CommerceItems>
      section5 = <Jumbotron
        jumbotron_title="Jumbotron Title Here"
        jumbotron_text=""
        jumbotron_shopbutton="Shop Now"
        ></Jumbotron>
      // section4 = <PricingPlans
      // pricing_picture1="urlhttps://mdbootstrap.com/img/Photos/Others/pricing-table%20(6).jpg"
      // pricing_picture2="urlhttps://mdbootstrap.com/img/Photos/Others/pricing-table%20(6).jpg"
      // pricing_picture3="urlhttps://mdbootstrap.com/img/Photos/Others/pricing-table%20(6).jpg"
      // ></PricingPlans>
      contact = <CommerceContact
      commerce_contact_title="Contact Us"
      commerce_contact_description="Write a description for contact here"
      >
      </CommerceContact>
    }
    else if (userIndustry === "restaurant") {
      intro = <MinimalistIntro
      minimalist_intro={this.state.business}
      minimalist_intro_business_info="Your business info will go here"
      minimalist_intro_shop_button="Shop Now"
      minimalist_intro_contact_button="Contact Us"
      ></MinimalistIntro>
      section1 = <FeaturesImageLeft
        features_imageLeft_title="Try Our Delicious Food Today"
        features_imageLeft_titleBody="Come to one of our locations and try the best food you've had in your life."
        features_imageLeft_image="https://mdbootstrap.com/img/Photos/Others/images/83.jpg"
        features_imageLeft_firstIcon="utensils"
        features_imageLeft_firstTitle="Delicious"
        features_imageLeft_firstText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        features_imageLeft_secondIcon="utensils"
        features_imageLeft_secondTitle="Nutritious"
        features_imageLeft_secondText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        features_imageLeft_thirdIcon="utensils"
        features_imageLeft_thirdTitle="Decadent"
        features_imageLeft_thirdText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      >
      </FeaturesImageLeft>
      section2 = <CallToAction
      callToAction_backgroundImage=
      "url(https://mdbootstrap.com/img/Photos/Others/img%20%2832%29.jpg)"
      CallToAction_subtitle_color="White"
      CallToAction_subtitle_text="CTA"
      CallToAction_title="Call To Action"
      CallToAction_bodyText="This is a call to action for your business"
      CallToAction_buttonColor="white"
      CallToAction_buttonText="Button"
      ></CallToAction>
      section3 = <FeaturesTextRight></FeaturesTextRight>
      section4 = <Jumbotron
        jumbotron_title="Jumbotron Title Here"
        jumbotron_text=""
        jumbotron_shopbutton="Shop Now"
        ></Jumbotron>
      contact = <CommerceContact
      commerce_contact_title="Contact Us"
      commerce_contact_description="Write a description for contact here"
      >
      </CommerceContact>
    }
    else {
      intro = <h1> Nothing </h1>
    }

    console.log(intro)

    
    return (
      
    <main style={{backgroundColor:'white'}}>
      <div>
        {intro}
      </div>

  <MDBRow>
    <MDBCol>
      {section1}
      </MDBCol>
  </MDBRow>



  <MDBRow>
    <MDBCol>
      {section2}
      </MDBCol>
  </MDBRow>



  <MDBRow>
    <MDBCol>
      {section3}      
    </MDBCol>
  </MDBRow>



  <MDBRow>
    <MDBCol>
      {section4}      
    </MDBCol>
  </MDBRow>



  <MDBRow>
    <MDBCol>
      {section5}      
    </MDBCol>
  </MDBRow>



  <MDBRow>
    <MDBCol>
      {section6}      
    </MDBCol>
  </MDBRow>

  <MDBRow>
    <MDBCol>
      {section7}      
    </MDBCol>
  </MDBRow>

  <MDBRow>
    <MDBCol>
      {contact}      
    </MDBCol>
  </MDBRow>

    </main>
    );
  }
}
export default Website