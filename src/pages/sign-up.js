import React from "react"
import { Link } from "gatsby"

import {
  Alert,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  Form,
  Card,
  CardBody,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormInput,
  Collapse,
  Breadcrumb,
  BreadcrumbItem,
  Row,
  Col,
  Container,
  Button,
  FormGroup,
  FormSelect,
  CardFooter
} from "shards-react"
import { Zoom, Bounce, Fade, Flip, Rotate, Roll } from "react-reveal"
import Img from "react-image"
import feather from "feather-icons"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Carousel from "react-bootstrap/Carousel"
import HomeCarousel from "../components/homeCarousel"
import PastPaperSlider from "../components/pastPaperSlider"
import { Helmet } from "react-helmet"
import { Tab, Tabs } from "react-bootstrap"
import YouTube from "react-youtube"
import uuid from "uuid"
import $ from "jquery"

// React device detect
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect"

const countries = [
  "Anguilla",
  "Antigua and Barbuda",
  "Barbados",
  "Belize",
  "British Virgin Islands",
  "Cayman Islands",
  "Dominica",
  "Grenada",
  "Guyana",
  "Jamaica",
  "Montserrat",
  "Saba",
  "St Kitts and Nevis",
  "Saint Lucia",
  "St Vincent and the Grenadines",
  "Trinidad and Tobago",
  "Turks and Caicos Islands",
  "United States of America",
  "United Kingdom"
]

let data = null

class Page extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  componentDidMount() {
    $.get(
      "https://api.ipdata.co?api-key=13880cb6f8a12a0a002b2f351472ffe7acf8311a123fcac5098b1f50",
      function(response) {
        data = response
        $("#response").html(JSON.stringify(response, null, 4))
      },
      "jsonp"
    )
  }

  render() {
    return (
      <>
        <>
          <Helmet>
            <meta name="keywords" content="your, tags" />
          </Helmet>
          <Layout>
            <SEO title="Sign up" description="" />

            <br />
            <Container>
              <Breadcrumb>
                <BreadcrumbItem>
                  <a href="/">Home</a>
                </BreadcrumbItem>
                <BreadcrumbItem active>Sign up</BreadcrumbItem>
              </Breadcrumb>

              <br />
              <Row>
                <Col sm={12} md={4} lg={4}>
                  <Card>
                    <CardBody>
                      <Form>
                        <h5>Sign Up</h5>
                        <br />

                        <FormGroup>
                          <label htmlFor="#firstName">Full Name</label>
                          <FormInput
                            id="firstName"
                            name="firstName"
                            type="text"
                            placeholder="Enter your full name"
                          />
                        </FormGroup>
                        <FormGroup>
                          <label htmlFor="#email">Email</label>
                          <FormInput
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Enter your email"
                          />
                        </FormGroup>

                        <FormGroup>
                          <label htmlFor="#country">Country</label>
                          <FormSelect>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                          </FormSelect>
                        </FormGroup>
                      </Form>
                    </CardBody>
                    <CardFooter>
                      <a className="" href="/help/login/">
                        I already have an account
                      </a>
                    </CardFooter>
                  </Card>
                </Col>
                <Col sm={12} md={8} lg={8}></Col>
              </Row>
            </Container>
          </Layout>
        </>
      </>
    )
  }
}

export default Page
