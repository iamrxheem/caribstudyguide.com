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
        title="Online CSEC and CAPE Quizzes"
        description="Prepare for your CXC multiple choice exams with our online quizzes."
      />
      <Helmet>
        <meta
          name="keywords"
          content="quiz, caribbean exams, english a, english b, spanish, mathematics, social studies, french, CAPE exams, mcq, online class , cxc, csec, free cxc past papers, csec study guide, caribbean examination council, cxc guide online, free cxc study notes, cxc exams, csec exams, study, jamaica, caribbean, free cxc past papers, cxc online classes, csec online classes, cxc zoom classes, free cxc lessons, free csec lessons, csec lessons online, cxc Trinidad and tobago, cxc jamaica online classes, cxc jamaica lessons, cxc barbados, cxc textbooks, free csec, textbooks, free cape, cape, cxc cape, csec, cape, cxcstudyguide, Raheem McDonald, rxheem, iamrxheem"
        />
      </Helmet>

      <br />
      <Container>
        <Breadcrumb>
          <BreadcrumbItem>
            <a href="/">Home</a>
          </BreadcrumbItem>
          <BreadcrumbItem active>Quiz</BreadcrumbItem>
        </Breadcrumb>

        <Row>
          <Col sm={12} md={8} lg={8}>
            <MobileView>
              <Img
                className="card-img"
                style={{ width: "100%" }}
                src={[
                  "https://blog.malwarebytes.com/wp-content/uploads/2018/12/shutterstock_1214717467-900x506.jpg",
                  "https://spacepsm.org/wp-content/uploads/2018/05/%E9%A6%96%E9%A1%B5%E9%85%8D%E5%9B%BE-01-1-800x480.png",
                  "https://www.talentlms.com/blog/wp-content/uploads/2019/05/online-learning-assessments.png",
                  "https://spacepsm.org/wp-content/uploads/2018/05/%E9%A6%96%E9%A1%B5%E9%85%8D%E5%9B%BE-01-1-800x480.png",
                  "https://46i48l108maaxssg8uyuvr10-wpengine.netdna-ssl.com/wp-content/uploads/2015/10/csec.png",
                  "",
                  ""
                ]}
              />

              <br />
              <br />
              <br />
            </MobileView>

            <h5>Online Quizzes</h5>

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
                        ""
                      ]}
                    />
                  </Fade>

                  <br />
                  <br />
                  <h5>CSEC Quizzes</h5>

                  <p>
                    Our CSEC quizzes are taken from the most recent past papers
                    to help you practice your exams.
                  </p>

                  <Button href="/quiz/csec/">View Quizzes</Button>
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
                  <h5>CAPE Quizzes</h5>

                  <p>
                    Brush up on yoour MCQ skills with our CAPE online quizzes
                    taken from past papers done over the last ten years.
                  </p>

                  <Button href="/quiz/cape/">View Quizzes</Button>
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
