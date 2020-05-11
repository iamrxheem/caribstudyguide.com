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
import { Helmet } from "react-helmet"
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Page = () => (
  <>
    <Layout>
      <SEO
        title="Study CSEC and CAPE Online"
        description="Start studying online today for your CSEC and CAPE exams. Explore online study notes, classes, quizes and exercises."
      />
      <Helmet>
        <meta
          name="keywords"
          content="caribbean exams, english a, english b, spanish, mathematics, social studies, french, CAPE exams, mcq, online class , cxc, csec, free cxc past papers, csec study guide, caribbean examination council, cxc guide online, free cxc study notes, cxc exams, csec exams, study, jamaica, caribbean, free cxc past papers, cxc online classes, csec online classes, cxc zoom classes, free cxc lessons, free csec lessons, csec lessons online, cxc Trinidad and tobago, cxc jamaica online classes, cxc jamaica lessons, cxc barbados, cxc textbooks, free csec, textbooks, free cape, cape, cxc cape, csec, cape, cxcstudyguide, Raheem McDonald, rxheem, iamrxheem"
        />
      </Helmet>

      <br />
      <Container>
        <Breadcrumb>
          <BreadcrumbItem>
            <a href="/">Home</a>
          </BreadcrumbItem>
          <BreadcrumbItem active>Start Studying</BreadcrumbItem>
        </Breadcrumb>

        <Row>
          <Col sm={12} md={8} lg={8}>
            <MobileView>
              <br />
              <Img
                className="card-img"
                style={{ width: "100%" }}
                src={[
                  "https://www.how-to-study.com/images/study-skills-assessments.jpg",
                  "",
                  "",
                  ""
                ]}
              />

              <br />
              <br />
              <br />
            </MobileView>

            <h5>Start Studying</h5>

            <p>
              Let's get started! Select your your course or level from the list
              of options below.
            </p>

            <Row>
              <Col sm={12} md={6} lg={6}>
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

                  <br />
                  <br />
                  <h5>CSEC Examinations</h5>

                  <p>
                    Get access to hundreds of study notes, downloadabe handouts
                    and much more with our CSEC guides and quizzes.
                  </p>

                  <Button href="/study/csec/">Start Studying</Button>
                </div>
              </Col>

              <Col sm={12} md={6} lg={6}>
                <br className="d-md-none" />
                <br className="d-md-none" />
                <br className="d-md-none" />
                <div
                  className="text-center"
                  style={{ margin: "0 auto", width: "100%" }}
                >
                  <Bounce>
                    <Img
                      className="card-img"
                      style={{ width: "60%", height: "70%" }}
                      src={[
                        "https://46i48l108maaxssg8uyuvr10-wpengine.netdna-ssl.com/wp-content/uploads/2015/10/cape.png",
                        "",
                        ""
                      ]}
                    />
                  </Bounce>

                  <br />
                  <br />
                  <h5>CAPE Examinations</h5>

                  <p>
                    Your CAPE examinations are important and we've brought
                    together materials from teachers and students from across
                    the Caribbean.
                  </p>

                  <Button href="/study/cape/">Start Studying</Button>
                </div>
              </Col>
            </Row>
          </Col>
          <Col sm={12} md={4} lg={4}></Col>
        </Row>
      </Container>
    </Layout>
  </>
)

export default Page
