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
import { Helmet } from "react-helmet"
import { Zoom, Bounce, Fade, Flip, Rotate, Roll } from "react-reveal"
import Img from "react-image"
import axios from "axios"
import Swal from "sweetalert2"
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

class Page extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: "",
      password: ""
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()

    Swal.fire({
      title: "Error!",
      text: "Do you want to continue",
      icon: "error",
      confirmButtonText: "Cool"
    })

    if (this.state.email == 0 || this.state.password == 0) {
      Swal.fire({
        title: "Hmmm",
        text: "Not allowed yet",
        icon: "error",
        confirmButtonText: "Cool"
      })
    }
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  render() {
    return (
      <>
        <Layout>
          <SEO
            title="CSEC Past Paper and MCQ Solutions"
            description="Download free CSEC MCQ solutions and other materials to help you pass your exams. Share these resources with your friends."
          />
          <Helmet>
            <meta
              name="keywords"
              content="cxc youtube, cxc zoom, zoom, cxc zoom class, cxc learn from home, cxc learn online, cxc help, cxc mcq solutions, cxc past papers, cape mcq answers, free cxc past papers, caribbean exams, english a, english b, spanish, mathematics, social studies, french, CAPE exams, mcq, online class , cxc, csec, free cxc past papers, csec study guide, caribbean examination council, cxc guide online, free cxc study notes, cxc exams, csec exams, study, jamaica, caribbean, free cxc past papers, cxc online classes, csec online classes, cxc zoom classes, free cxc lessons, free csec lessons, csec lessons online, cxc Trinidad and tobago, cxc jamaica online classes, cxc jamaica lessons, cxc barbados, cxc textbooks, free csec, textbooks, free cape, cape, cxc cape, csec, cape, rxheem, Raheem McDonald, iamrxheem, Raheem McDonald UWI, Raheem McDonald Jamaica, CXC study guide, cxc online study guide, cxcstudyguide"
            />
          </Helmet>

          <Container>
            <Breadcrumb>
              <BreadcrumbItem>
                <a href="/">Home</a>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <a href="/resources/">Resources</a>
              </BreadcrumbItem>
              <BreadcrumbItem active>CSEC</BreadcrumbItem>
            </Breadcrumb>

            <Row>
              <Col sm={12} md={8} lg={8}>
                <MobileView>
                  <div
                    className="text-center"
                    style={{ margin: "0 auto", width: "100%" }}
                  >
                    <Fade>
                      <Img
                        className="card-img"
                        style={{ width: "60%", height: "70%" }}
                        src={[
                          "https://46i48l108maaxssg8uyuvr10-wpengine.netdna-ssl.com/wp-content/uploads/2015/10/csec.png",
                          "",
                          ""
                        ]}
                      />
                    </Fade>
                  </div>
                  <br />
                </MobileView>

                <h5>CSEC Resouces</h5>
                <br />

                <p>
                  Share resources such as past paper solutions, MCQ answers and
                  more!
                </p>

                <div id="disqus_thread"></div>
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
