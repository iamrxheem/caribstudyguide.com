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

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Tab, Tabs } from "react-bootstrap"
import YouTube from "react-youtube"
import uuid from "uuid"

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

        <br />
        <Row>
          <Col sm={12} md={8} lg={8}>
            <Tabs defaultActiveKey="mathematics" id="home-tab">
              <Tab eventKey="mathematics" title="Mathematics">
                <br />

                <>
                  <div class="bulma-tabs">
                    <ul>
                      <li className="mr-3">
                        <YouTube opts={opts} videoId={"oVvq81gf-sU"} />
                      </li>
                      <li className="mr-3">
                        <YouTube opts={opts} videoId={"STcPmKc7JaI"} />
                      </li>
                      <li className="mr-3">
                        <YouTube opts={opts} videoId={"xYhX29gBybE"} />
                      </li>
                      <li className="mr-3">
                        <YouTube opts={opts} videoId={"zTbg5fffPMc"} />
                      </li>
                      <li className="mr-3">
                        <YouTube opts={opts} videoId={"uhn3IN-h44Y"} />
                      </li>
                      <li className="mr-3">
                        <YouTube opts={opts} videoId={"Ag_VqUvUrAU"} />
                      </li>
                      <li className="mr-3">
                        <YouTube opts={opts} videoId={"yuzaHV2wXjI"} />
                      </li>
                    </ul>
                  </div>
                  <br />
                  <br />
                </>
              </Tab>
              <Tab eventKey="chemistry" title="Chemistry">
                <br />
                <br />

                <div class="bulma-tabs">
                  <ul>
                    <li className="mr-3">
                      <YouTube opts={opts} videoId={""} />
                    </li>
                    <li className="mr-3">
                      <YouTube opts={opts} videoId={""} />
                    </li>
                    <li className="mr-3">
                      <YouTube opts={opts} videoId={""} />
                    </li>
                    <li className="mr-3">
                      <YouTube opts={opts} videoId={""} />
                    </li>
                    <li className="mr-3">
                      <YouTube opts={opts} videoId={""} />
                    </li>
                  </ul>
                </div>
                <br />
              </Tab>
              <Tab eventKey="english-a" title="English A">
                <br />

                <>
                  <div class="bulma-tabs">
                    <ul>
                      <li className="mr-3">
                        <YouTube opts={opts} videoId={""} />
                      </li>
                      <li className="mr-3">
                        <YouTube opts={opts} videoId={""} />
                      </li>
                      <li className="mr-3">
                        <YouTube opts={opts} videoId={""} />
                      </li>
                      <li className="mr-3">
                        <YouTube opts={opts} videoId={""} />
                      </li>
                      <li className="mr-3">
                        <YouTube opts={opts} videoId={""} />
                      </li>
                    </ul>
                  </div>
                </>
              </Tab>
            </Tabs>
          </Col>

          <Col sm={12} md={4} lg={4}></Col>
        </Row>
      </Container>
    </Layout>
  </>
)

export default Page
