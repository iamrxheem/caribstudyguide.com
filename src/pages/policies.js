import React from "react"
import { Link } from "gatsby"

import {
  Alert,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  CardTitle,
  Card,
  CardBody,
  Form,
  FormGroup,
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
  CardFooter,
  Button
} from "shards-react"
import { Zoom, Bounce, Fade, Flip, Rotate, Roll } from "react-reveal"
import Img from "react-image"
import axios from "axios"
import Swal from "sweetalert2"

import Layout from "../components/layout"
import SEO from "../components/seo"

const liStyle = {
  paddingBottom: "15px"
}

class Page extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <>
        <Layout>
          <SEO
            title="Our Policies"
            description="Log in to your account or sign up to get started."
          />

          <Container>
            <Breadcrumb>
              <BreadcrumbItem>
                <a href="/">Home</a>
              </BreadcrumbItem>
              <BreadcrumbItem active>Our Policies</BreadcrumbItem>
            </Breadcrumb>

            <br />
            <Row>
              <Col sm={12} md={8} lg={8}>
                <h5>Our Policies</h5>

                <p>
                  Our policies are designed to ensure that we provide a safe
                  learning environment for students and teachers, and to ensure
                  to we comply with laws governing the Caribbean territories.
                </p>

                <p>
                  Play your part and educate yourself on how we expect you to
                  behave on our site and platforms, the laws governing the
                  contents of our website and other useful infomrmation.
                </p>

                <ul>
                  <li style={liStyle}>
                    <a href="/privacy/">Privacy Policy</a>
                  </li>
                  <li style={liStyle}>
                    <a href="/terms/">Terms of Use</a>
                  </li>
                  <li style={liStyle}>
                    <a href="/tutor-policy/">Tutor Policy</a>
                  </li>
                  <li style={liStyle}>
                    <a href="/content-sharing-policy/">
                      Content Sharing Policy
                    </a>
                  </li>
                  <li style={liStyle}>
                    <a href="/discord-policy/">Discord Guidelines</a>
                  </li>
                </ul>
              </Col>

              <Col sm={12} md={4} lg={4}></Col>
            </Row>
          </Container>
        </Layout>
      </>
    )
  }
}

export default Page
