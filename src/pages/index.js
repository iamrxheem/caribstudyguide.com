import React from "react"
import { Link } from "gatsby"

import {
  Alert,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
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
  Button
} from "shards-react"
import { Zoom, Bounce, Fade, Flip, Rotate, Roll } from "react-reveal"
import Img from "react-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Carousel from "react-bootstrap/Carousel"
import HomeCarousel from "../components/homeCarousel"

import { Tab, Tabs } from "react-bootstrap"
import YouTube from "react-youtube"
import uuid from "uuid"

// React device detect
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect"

const opts = {
  height: "170",
  width: "300",
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 0
  }
}

const Page = () => (
  <>
    <Layout>
      <SEO title="Home" description="" />

      <br />
      <Container>
        <Breadcrumb>
          <BreadcrumbItem>
            <a href="/">Home</a>
          </BreadcrumbItem>
          <BreadcrumbItem active></BreadcrumbItem>
        </Breadcrumb>

        {/* Carausel */}
        <HomeCarousel />

        {/* Quick Videos */}
        <h5>Quick Videos</h5>

        <br />
        <Row>
          <Col sm={12} md={8} lg={8}>
            <Tabs defaultActiveKey="spanish" id="home-tab">
              <Tab eventKey="spanish" title="Spanish">
                <br />
                <>
                  <div class="bulma-tabs">
                    <ul>
                      <li className="mr-3">
                        <YouTube opts={opts} videoId={"ISMd8oShzrA"} />
                      </li>
                      <li className="mr-3">
                        <YouTube opts={opts} videoId={"WvnBAQFsmu0"} />
                      </li>
                      <li className="mr-3">
                        <YouTube opts={opts} videoId={"mQCnwMkmYLs"} />
                      </li>
                      <li className="mr-3">
                        <YouTube opts={opts} videoId={"J1tQCJfVEVA"} />
                      </li>
                      <li className="mr-3">
                        <YouTube opts={opts} videoId={"OoY4Vi8R-NY"} />
                      </li>
                    </ul>
                  </div>

                  <br />
                  <p>
                    <p>
                      The CSEC Spanish syllabus is design to allow students to
                      develop the competence to listen, speak, read and write in
                      Spanish and interpret aspects of the culture
                    </p>
                  </p>
                  <Button
                    href="/study/csec/english-a/"
                    style={{
                      backgroundColor: "#01C8EF",
                      borderColor: "#01C8EF"
                    }}
                  >
                    See full course
                  </Button>
                </>
              </Tab>
              <Tab eventKey="mathematics" title="Mathematics">
                <br />

                <>
                  <div class="bulma-tabs">
                    <ul>
                      <li className="mr-3">
                        <YouTube opts={opts} videoId={"xYhX29gBybE"} />
                      </li>
                      <li className="mr-3">
                        <YouTube opts={opts} videoId={"STcPmKc7JaI"} />
                      </li>
                      <li className="mr-3">
                        <YouTube opts={opts} videoId={"oVvq81gf-sU"} />
                      </li>
                      <li className="mr-3">
                        <YouTube opts={opts} videoId={"zTbg5fffPMc"} />
                      </li>
                      <li className="mr-3">
                        <YouTube opts={opts} videoId={"uhn3IN-h44Y"} />
                      </li>
                    </ul>
                  </div>
                  <br />
                  <p>
                    The Mathematics syllabus explains general and unifying
                    concepts that facilitate the study of Mathematics as a
                    coherent subject rather than as a set of unrelated topics.
                  </p>
                  <Button
                    href="/study/csec/mathematics/"
                    style={{
                      backgroundColor: "#01C8EF",
                      borderColor: "#01C8EF"
                    }}
                  >
                    See full course
                  </Button>
                </>
              </Tab>
              <Tab eventKey="chemistry" title="Chemistry">
                <br />

                <div class="bulma-tabs">
                  <ul>
                    <li className="mr-3">
                      <YouTube opts={opts} videoId={"j87n0OtxLCI"} />
                    </li>
                    <li className="mr-3">
                      <YouTube opts={opts} videoId={"HRz-jH4CAy8"} />
                    </li>
                    <li className="mr-3">
                      <YouTube opts={opts} videoId={"fN8kH9Vvqo0"} />
                    </li>
                    <li className="mr-3">
                      <YouTube opts={opts} videoId={"DM38Ht1vo0o"} />
                    </li>
                    <li className="mr-3">
                      <YouTube opts={opts} videoId={"7JZBUuaQlOA"} />
                    </li>
                  </ul>
                </div>
                <br />
                <p>
                  The study of Chemistry involves an investigation into chemical
                  reactions and processes. The discipline seeks to explain and
                  predict events at the atomic and molecular level.
                </p>
                <Button
                  href="/study/csec/chemistry/"
                  style={{
                    backgroundColor: "#01C8EF",
                    borderColor: "#01C8EF"
                  }}
                >
                  See full course
                </Button>
              </Tab>
            </Tabs>
          </Col>

          <Col sm={12} md={4} lg={4}></Col>
        </Row>

        <br />
        <br />

        <Row>
          <Col sm={12} md={4} lg={4}>
            <div
              className="text-center"
              style={{ margin: "0 auto", width: "100%" }}
            >
              <Zoom>
                <Img
                  style={{ width: "60%" }}
                  src={[
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSGSixrI1wMw6QojpM-hn7mnOa4C3rrjUPZIV2Db8gEvPcjSs0P&usqp=CAU",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT_S9DUg_S9CHf-DxgcNbxYzZmibzud95wxTQslnreREOxA1ch1&usqp=CAU",
                    "https://cdn.iconscout.com/icon/free/png-512/laptop-user-1-1179329.png"
                  ]}
                />
              </Zoom>

              <br />
              <h5>Sign Up</h5>

              <p>Sign up to track your progress, get daily updates</p>

              <Button>Sign Up</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  </>
)

export default Page
