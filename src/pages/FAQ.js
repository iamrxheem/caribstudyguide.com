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
import Collapsible from "react-collapsible"
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react"

// React device detect
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect"

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
            title="Frequently Asked Questions"
            description="Have a question? You can find the answers to the most common questions we get asked by our students. If your question is not then let us know."
          />

          <Container>
            <Breadcrumb>
              <BreadcrumbItem>
                <a href="/">Home</a>
              </BreadcrumbItem>
              <BreadcrumbItem active>Frequently Asked Questions</BreadcrumbItem>
            </Breadcrumb>

            <Row>
              <Col sm={12} md={8} lg={8}>
                <br />

                <Zoom>
                  <Img
                    className="card-img"
                    style={{ width: "100%" }}
                    src={[
                      "https://nativemsg.com/wp-content/uploads/2018/07/nativeMsg-FAQ.jpg",
                      "https://www.superoffice.com/blog/wp-content/uploads/2016/09/how-to-build-faq-section-750x400.jpg",
                      "https://cdn.searchenginejournal.com/wp-content/uploads/2018/09/25-of-the-Best-Examples-of-Effective-FAQ-Pages.png",
                      "https://cdn.pixabay.com/photo/2017/11/10/16/45/faq-2936798_960_720.png",
                      "https://www.signify.com/b-dam/signify/en-us/brands/bodine/technical/faq/faq-thumbnail.jpg",
                      ""
                    ]}
                    alt="frequently asked question image"
                  />
                  <br />
                  <span>
                    Credit:{" "}
                    <a
                      href="https://nativemsg.com/blog/chatbot-faq-questions-you-may-not-be-asking-but-need-to-know/"
                      target="_blank"
                    >
                      nativeMsg.com
                    </a>
                  </span>
                </Zoom>

                <br />
                <br />
                <br />
                <h5>Frequently Asked Questions</h5>

                <p>
                  Have a question? You can find the answers to the most common
                  questions we get asked by our students. If your question is
                  not then let us know.
                </p>

                <ul className="ul">
                  {/* Question */}
                  <li>
                    <Collapsible
                      open
                      trigger={
                        <>
                          <i
                            style={{ color: "#F07966" }}
                            className="fas fa-caret-right mr-3"
                          ></i>
                          <a href="">
                            What's this website about and when will it be ready?
                          </a>
                        </>
                      }
                    >
                      <br />
                      <p>
                        CXC Online Study Guide is an online hub for free study
                        notes, MCQ quizes, exercises and online classes for all
                        CSEC and CAPE subjects.
                      </p>

                      <p>
                        Our website is still in the development phase and will
                        be launched in <b>September, 2020</b>. If you'd like to
                        receive updates in you email then join our{" "}
                        <a href="" target="_blank">
                          mailing list
                        </a>{" "}
                        or <a href="mailto:contact@cxcguide.com">email us</a>{" "}
                        your queries .
                      </p>
                    </Collapsible>
                  </li>

                  {/* Question */}
                  <li>
                    <Collapsible
                      open
                      trigger={
                        <>
                          <i
                            style={{ color: "#F07966" }}
                            className="fas fa-caret-right mr-3"
                          ></i>
                          <a href="">
                            Is this company affiliated with the Caribbean
                            Examination Council?
                          </a>
                        </>
                      }
                    >
                      <br />
                      <p>
                        No, we are not affiliated nor are we a representative of
                        CXC. We are an independent group of teachers and
                        students.
                      </p>
                    </Collapsible>
                  </li>

                  {/* Question */}
                  <li>
                    <Collapsible
                      open
                      trigger={
                        <>
                          <i
                            style={{ color: "#F07966" }}
                            className="fas fa-caret-right mr-3"
                          ></i>
                          <a href="">Whare are we based?</a>
                        </>
                      }
                    >
                      <br />
                      <p>
                        We are a community of students and teachers from around
                        the Caribbean. However, we mainly operate in Kingston,
                        Jamaica.
                      </p>

                      <Fade>
                        <img
                          style={{ width: "100%" }}
                          src="https://jajamaica.org/wp-content/uploads/2018/08/map-jamaica-counties.png"
                        />
                      </Fade>
                      <br />
                    </Collapsible>
                  </li>

                  {/* Question */}
                  <li>
                    <Collapsible
                      open
                      trigger={
                        <>
                          <i
                            style={{ color: "#F07966" }}
                            className="fas fa-caret-right mr-3"
                          ></i>
                          <a href="">Is the website free to use?</a>
                        </>
                      }
                    >
                      <br />
                      <p>Yes, the website is completely free to use!</p>
                    </Collapsible>
                  </li>

                  {/* Question */}
                  <li>
                    <Collapsible
                      open
                      trigger={
                        <>
                          <i
                            style={{ color: "#F07966" }}
                            className="fas fa-caret-right mr-3"
                          ></i>
                          <a href="">Am I required to sign up?</a>
                        </>
                      }
                    >
                      <br />
                      <p>
                        No, registering on our website is completely optional.
                        However, if you sign up you will be able to{" "}
                      </p>
                      <ul>
                        <li style={{ paddingBottom: "20px" }}>
                          Access to hundreds of quizzes and downloadable
                          handouts
                        </li>
                        <li style={{ paddingBottom: "20px" }}>
                          Get access to our online Discord server, Google
                          Classroom and Whatsapp study groups where you can get
                          extra resources and assitance with your SBA or IA.
                        </li>
                        <li style={{ paddingBottom: "20px" }}>
                          Get virtual awards for milestones and accomplishments
                        </li>
                        <li style={{ paddingBottom: "20px" }}>
                          Customize the website to show the subjects that you're
                          studying
                        </li>
                      </ul>

                      <b>
                        Note: Our website is still in the development phase so
                        you will not be able to register at this time.
                      </b>
                    </Collapsible>
                  </li>

                  {/* Question */}
                  <li>
                    <Collapsible
                      open
                      trigger={
                        <>
                          <i
                            style={{ color: "#F07966" }}
                            className="fas fa-caret-right mr-3"
                          ></i>
                          <a href="">
                            How do I get access to the materials to download?
                          </a>
                        </>
                      }
                    >
                      <br />

                      <p>
                        In order to download material you will be required to
                        sign up on our website.
                      </p>
                    </Collapsible>
                  </li>

                  {/* Question*/}
                  <li>
                    <Collapsible
                      open
                      trigger={
                        <>
                          <i
                            style={{ color: "#F07966" }}
                            className="fas fa-caret-right mr-3"
                          ></i>
                          <a href="">How do I join the online classes?</a>
                        </>
                      }
                    >
                      <br />

                      <MobileView>
                        <Bounce>
                          <img
                            src="https://www.ecampusnews.com/files/2020/04/online-class-pandemic.jpg"
                            className="card-img"
                          />
                        </Bounce>
                        <br />
                        <br />
                      </MobileView>

                      <p>
                        At this time our online classes are only available to
                        users who register or follow us on social media. We do
                        this to better protect our users as we monitor and vet
                        who we allow in our groups.
                      </p>
                    </Collapsible>
                  </li>

                  {/* Question*/}
                  <li>
                    <Collapsible
                      open
                      trigger={
                        <>
                          <i
                            style={{ color: "#F07966" }}
                            className="fas fa-caret-right mr-3"
                          ></i>
                          <a href="">
                            How do I join the Whatsapp study groups?
                          </a>
                        </>
                      }
                    >
                      <br />
                      <p>
                        At this time the Whatsapp groups are only available to
                        users who register or follow us on social media. We do
                        this to better protect our users as we monitor and vet
                        who we allow in our groups.
                      </p>
                    </Collapsible>
                  </li>

                  {/* Question*/}
                  <li>
                    <Collapsible
                      open
                      trigger={
                        <>
                          <i
                            style={{ color: "#F07966" }}
                            className="fas fa-caret-right mr-3"
                          ></i>
                          <a href="">
                            Is there a YouTube channel with the classes?
                          </a>
                        </>
                      }
                    >
                      <br />
                      <p>
                        You can subscribe to our Youtube channe{" "}
                        <a
                          href="https://www.youtube.com/channel/UC0eO_ApReknTjj50B7_LQyw"
                          target="_blank"
                        >
                          here
                        </a>
                        .
                      </p>
                    </Collapsible>
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
