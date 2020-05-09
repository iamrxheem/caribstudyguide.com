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

import CSECLayout from "../../../../../layouts/CSECLayout"
import Layout from "../../../../../components/layout"
import SEO from "../../../../../components/seo"
import SpanishLayout from "../../../../../layouts/csec/spanishLayout"

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
            title="Contextual Dialogue - CSEC Spanish"
            description=""
            author="cxcstudyguide"
          />
          <Helmet>
            <meta
              name="keywords"
              content="contextual Dialogue, spanish, cxc, csec, free cxc past papers, csec study guide, caribbean examination council, cxc guide online, free cxc study notes, cxc exams, csec exams, study, jamaica, caribbean, free cxc past papers, cxc online classes, csec online classes, cxc zoom classes, free cxc lessons, free csec lessons, csec lessons online, cxc Trinidad and tobago, cxc jamaica online classes, cxc jamaica lessons, cxc barbados, cxc textbooks, free csec, textbooks, free cape, cape, cxc cape, csec, cape"
            />
          </Helmet>

          <br />
          <SpanishLayout active="contextual-dialogue">
            {/* Broswer view */}
            <BrowserView>
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
                <BreadcrumbItem>
                  <a href="/study/csec/spanish/">Spanish</a>
                </BreadcrumbItem>
                <BreadcrumbItem>
                  <a href="/study/csec/spanish/exam-structure/">
                    Exam Structure
                  </a>
                </BreadcrumbItem>
                <BreadcrumbItem active>Contextual Dialogue</BreadcrumbItem>
              </Breadcrumb>
            </BrowserView>

            <MobileView>
              <Breadcrumb>
                <BreadcrumbItem>
                  <a href="/">Home</a>
                </BreadcrumbItem>
                <BreadcrumbItem>
                  <a href="/study/">...</a>
                </BreadcrumbItem>
                <BreadcrumbItem>
                  <a href="/study/csec/">...</a>
                </BreadcrumbItem>
                <BreadcrumbItem>
                  <a href="/study/csec/spanish/">Spanish</a>
                </BreadcrumbItem>
                <BreadcrumbItem>
                  <a href="/study/csec/spanish/exam-structure/">...</a>
                </BreadcrumbItem>
                <BreadcrumbItem active>Cont. Dialogue</BreadcrumbItem>
              </Breadcrumb>
            </MobileView>

            <Container></Container>
          </SpanishLayout>
        </Layout>
      </>
    )
  }
}

export default Page
