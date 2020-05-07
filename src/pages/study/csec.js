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
import CSECLayout from "../../layouts/CSECLayout"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

class Page extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <>
        <CSECLayout>
          <Layout>
            <SEO
              title="Free CSEC Online Study Guides and Notes"
              description=""
              author="cxcstudyguide"
            />

            <Container>
              <Breadcrumb>
                <BreadcrumbItem>
                  <a href="/">Home</a>
                </BreadcrumbItem>
                <BreadcrumbItem>
                  <a href="/study">Study</a>
                </BreadcrumbItem>
                <BreadcrumbItem active>CSEC</BreadcrumbItem>
              </Breadcrumb>

              <br />
              <Row>
                <Col sm={12} md={8} lg={8}></Col>

                <Col sm={12} md={4} lg={4}></Col>
              </Row>
            </Container>
          </Layout>
        </CSECLayout>
      </>
    )
  }
}

export default Page
