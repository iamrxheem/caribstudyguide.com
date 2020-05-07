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
import axios from "axios"

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

let data = {}

class Page extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}

    this.getUserLocation = this.getUserLocation.bind(this)
  }

  async getUserLocation() {
    axios
      .get(
        "https://api.ipdata.co/es?api-key=13880cb6f8a12a0a002b2f351472ffe7acf8311a123fcac5098b1f50"
      )
      .then(function(response) {
        data = response.data
      })
  }

  componentDidMount() {
    this.getUserLocation()
  }

  componentWillMount() {
    this.getUserLocation()
  }

  render() {
    return (
      <>
        <>
          <Helmet>
            <meta name="keywords" content="your, tags" />
          </Helmet>
          <Layout>
            <SEO title="Your data" description="" />

            <br />
            <Container>
              <Breadcrumb>
                <BreadcrumbItem>
                  <a href="/">Home</a>
                </BreadcrumbItem>
                <BreadcrumbItem active>Your data</BreadcrumbItem>
              </Breadcrumb>

              <Row>
                <Col sm={12} md={4} lg={4}>
                  <h5>Your Data</h5>

                  <p>
                    Do you know what websites can see about you? Here's what we
                    picked up:
                  </p>

                  <div>
                    <p>Your IP Address: {data.ip}</p>
                    <p>Your city: {data.city}</p>
                    <p>You country: {data.country_name}</p>
                    <p>You latitude: {data.latitude}</p>
                    <p>You longitude: {data.longitude}</p>
                    <p>You ISP: {data.carrier}</p>
                  </div>
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
