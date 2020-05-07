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
import CSECLayout from "../../layouts/CSECLayout"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import SubjectPreview from "../../common/subjectPreview"

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
          </Container>

          <Container fluid>
            <CSECLayout>
              <Row>
                {/* Subject */}
                <SubjectPreview
                  imgSrc=""
                  title="English A"
                  description=""
                  start=""
                  resources=""
                />

                {/* Subject */}
                <SubjectPreview
                  imgSrc="https://www.stem.org.uk/sites/default/files/blog-images/A%20level%20mathematics.jpg"
                  title="Mathematics"
                  description=""
                  start=""
                  resources=""
                />

                {/* Subject */}
                <SubjectPreview
                  imgSrc="https://pregonesprtt.org/wp-content/uploads/2019/05/Tempest2019.jpg"
                  title="English B"
                  description=""
                  start=""
                  resources=""
                />

                {/* Subject */}
                <SubjectPreview
                  imgSrc=""
                  title="Information Technology"
                  description=""
                  start=""
                  resources=""
                />

                {/* Subject */}
                <SubjectPreview
                  imgSrc=""
                  title="Biology"
                  description=""
                  start=""
                  resources=""
                />

                {/* Subject */}
                <SubjectPreview
                  imgSrc=""
                  title="Chemistry"
                  description=""
                  start=""
                  resources=""
                />

                {/* Subject */}
                <SubjectPreview
                  imgSrc=""
                  title="Physics"
                  description=""
                  start=""
                  resources=""
                />

                {/* Subject */}
                <SubjectPreview
                  imgSrc=""
                  title="Spanish"
                  description=""
                  start=""
                  resources=""
                />

                {/* Subject */}
                <SubjectPreview
                  imgSrc=""
                  title="French"
                  description=""
                  start=""
                  resources=""
                />

                {/* Subject */}
                <SubjectPreview
                  imgSrc=""
                  title="Principles of Business"
                  description=""
                  start=""
                  resources=""
                />

                {/* Subject */}
                <SubjectPreview
                  imgSrc=""
                  title="Principles of Accounts"
                  description=""
                  start=""
                  resources=""
                />

                {/* Subject */}
                <SubjectPreview
                  imgSrc=""
                  title="Social Studies"
                  description=""
                  start=""
                  resources=""
                />

                {/* Subject */}
                <SubjectPreview
                  imgSrc=""
                  title="Caribbean History"
                  description=""
                  start=""
                  resources=""
                />

                {/* Subject */}
                <SubjectPreview
                  imgSrc=""
                  title="Geography"
                  description=""
                  start=""
                  resources=""
                />

                {/* Subject */}
                <SubjectPreview
                  imgSrc=""
                  title="Human and Social Biology"
                  description=""
                  start=""
                  resources=""
                />

                {/* Subject */}
                <SubjectPreview
                  imgSrc=""
                  title="Integrated Science"
                  description=""
                  start=""
                  resources=""
                />

                {/* Subject */}
                <SubjectPreview
                  imgSrc=""
                  title="Office Admistration"
                  description=""
                  start=""
                  resources=""
                />

                {/* Subject */}
                <SubjectPreview
                  imgSrc=""
                  title="Additional Mathematics"
                  description=""
                  start=""
                  resources=""
                />

                {/* Subject */}
                <SubjectPreview
                  imgSrc=""
                  title="Physical Education"
                  description=""
                  start=""
                  resources=""
                />

                {/* Subject */}
                <SubjectPreview
                  imgSrc=""
                  title="Visual Arts"
                  description=""
                  start=""
                  resources=""
                />
              </Row>
            </CSECLayout>
          </Container>
        </Layout>
      </>
    )
  }
}

export default Page
