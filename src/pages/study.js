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

const Page = () => (
  <>
    <Layout>
      <SEO title="Start Studying" description="" />

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
            <br />

            <Img
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
                  <Zoom>
                    <Img
                      className="card-img"
                      style={{ width: "60%", height: "70%" }}
                      src={[
                        "https://46i48l108maaxssg8uyuvr10-wpengine.netdna-ssl.com/wp-content/uploads/2015/10/csec.png",
                        "",
                        ""
                      ]}
                    />
                  </Zoom>

                  <br />
                  <br />
                  <h5>CSEC Examinations</h5>

                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
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
                  <Zoom>
                    <Img
                      className="card-img"
                      style={{ width: "60%", height: "70%" }}
                      src={[
                        "https://46i48l108maaxssg8uyuvr10-wpengine.netdna-ssl.com/wp-content/uploads/2015/10/cape.png",
                        "",
                        ""
                      ]}
                    />
                  </Zoom>

                  <br />
                  <br />
                  <h5>CAPE Examinations</h5>

                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
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
