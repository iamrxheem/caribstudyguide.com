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
  Button,
  CardImg
} from "shards-react"
import { Zoom, Bounce, Fade, Flip, Rotate, Roll } from "react-reveal"
import Img from "react-image"
import axios from "axios"
import Swal from "sweetalert2"
import { Helmet } from "react-helmet"

import CSECLayout from "../../../layouts/CSECLayout"
import Layout from "../../../components/layout"
import SEO from "../../../components/seo"

import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect"

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
            title="CSEC Integrated Science Online Study Guide"
            description="Start studying Integrated Science and prepare for your CSEC exams with our online notes and quizzes made by teachers from around the Caribbean."
            author="cxcstudyguide"
          />
          <Helmet>
            <meta
              name="keywords"
              content="Integrated Science, info tech, cxc, csec, free cxc past papers, csec study guide, caribbean examination council, cxc guide online, free cxc study notes, cxc exams, csec exams, study, jamaica, caribbean, free cxc past papers, cxc online classes, csec online classes, cxc zoom classes, free cxc lessons, free csec lessons, csec lessons online, cxc Trinidad and tobago, cxc jamaica online classes, cxc jamaica lessons, cxc barbados, cxc textbooks, free csec, textbooks, free cape, cape, cxc cape, csec, cape"
            />
          </Helmet>

          <Container>
            <Breadcrumb>
              <BreadcrumbItem>
                <a href="/">Home</a>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <a href="/study/">Study</a>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <a href="/study/csec/">CSEC</a>
              </BreadcrumbItem>
              <BreadcrumbItem active>Integrated Science</BreadcrumbItem>
            </Breadcrumb>
          </Container>

          <Container>
            <CSECLayout></CSECLayout>
          </Container>
        </Layout>
      </>
    )
  }
}

export default Page
