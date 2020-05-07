import React from "react"
import {
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

// React device detect
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect"

import MailingListSubscribe from "./mailingListSubscribe"
import SocialMediaIcons from "./socialMediaIcons"

const Footer = props => {
  return (
    <>
      <br />
      <footer>
        <div className="bg-light">
          <Container>
            <br />
            <Row>
              <Col sm={12} md={4} lg={4}>
                <br />
                <SocialMediaIcons />
                <br />

                <MailingListSubscribe />
              </Col>
              <MobileView>
                <Col sm={12} md={4} lg={4}>
                  <br className="d-sm-block" />
                  <h5>Popular CSEC Subjects</h5>
                  <br />
                  <ul className="ul">
                    <li>
                      <a href="/study/csec/">Mathematics</a>
                    </li>
                    <li>
                      <a href="/study/csec/">English A</a>
                    </li>
                    <li>
                      <a href="/study/csec/">Information Technology</a>
                    </li>
                    <li>
                      <a href="/study/csec/">Chemistry</a>
                    </li>
                    <li>
                      <a href="/study/csec/">Spanish</a>
                    </li>
                    <li>
                      <a href="/study/csec/">Geography</a>
                    </li>
                    <li>
                      <a href="/study/csec/">Biology</a>
                    </li>
                    <li>
                      <a href="/study/csec/">Physics</a>
                    </li>
                    <li>
                      <a href="/study/csec/">English B</a>
                    </li>
                  </ul>
                </Col>
              </MobileView>
              <Col sm={12} md={4} lg={4}>
                <br className="d-sm-block" />
                <h5>Popular CAPE Subjects</h5>
                <br />
                <ul className="ul">
                  <li>
                    <a href="/study/cape/">Communication Studies</a>
                  </li>
                  <li>
                    <a href="/study/cape/">Spanish</a>
                  </li>
                  <li>
                    <a href="/study/cape/">Computer Science</a>
                  </li>
                  <li>
                    <a href="/study/cape/">Caribbean History</a>
                  </li>
                  <li>
                    <a href="/study/cape/">Information Technology</a>
                  </li>
                  <li>
                    <a href="/study/cape/">Law</a>
                  </li>
                  <li>
                    <a href="/study/cape/">French</a>
                  </li>
                </ul>
              </Col>
              <Col sm={12} md={4} lg={4}>
                <br className="d-sm-block" />
                <h5>
                  Recent
                  <i
                    className="fas fa-blog ml-2"
                    style={{ color: "#FF8C42" }}
                  ></i>{" "}
                  Posts
                </h5>
                <br />
                <ul className="ul">
                  <li>
                    <a href="/blog/">
                      <i
                        className="fas fa-rss mr-2"
                        style={{ color: "#F75C03" }}
                      ></i>
                      Top 15 University Degrees
                    </a>
                  </li>
                  <li>
                    <a href="/blog/">
                      <i
                        className="fas fa-rss mr-2"
                        style={{ color: "#F75C03" }}
                      ></i>
                      Top 10 Spanish Vocabulary
                    </a>
                  </li>
                  <li>
                    <a href="/blog/">
                      <i
                        className="fas fa-rss mr-2"
                        style={{ color: "#F75C03" }}
                      ></i>
                      French for Beginners
                    </a>
                  </li>
                  <li>
                    <a href="/blog/">
                      <i
                        className="fas fa-rss mr-2"
                        style={{ color: "#F75C03" }}
                      ></i>
                      10 Time Managemnt Techniques
                    </a>
                  </li>
                  <li>
                    <a href="/blog/">
                      <i
                        className="fas fa-rss mr-2"
                        style={{ color: "#F75C03" }}
                      ></i>
                      Most Profitable Degrees and Requirements
                    </a>
                  </li>
                  <li>
                    <a href="/blog/">
                      <i
                        className="fas fa-rss mr-2"
                        style={{ color: "#F75C03" }}
                      ></i>
                      How to Pass Your Math Exam
                    </a>
                  </li>
                  <li>
                    <a href="/blog/">
                      <i
                        className="fas fa-rss mr-2"
                        style={{ color: "#F75C03" }}
                      ></i>
                      Student Life Off Campus
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
          <br />
        </div>
        <div className="bg-dark">
          <br />
          <br />
          <Container>
            <Row>
              <Col sm={12} md={4} lg={4}>
                <br className="d-sm-none" />
                <h5 style={{ color: "white" }}>React Out</h5>
                <br />
                <ul className="ul">
                  <li>
                    <a className="link-dark" style={{ color: "" }} href="/">
                      Contact & Support
                    </a>
                  </li>
                  <li>
                    <a className="link-dark" style={{ color: "" }} href="/">
                      Live Chat
                    </a>
                  </li>
                  <li>
                    <a className="link-dark" style={{ color: "" }} href="/">
                      Knowledge Base
                    </a>
                  </li>
                  <li>
                    <a className="link-dark" style={{ color: "" }} href="/FAQ/">
                      Frequently Asked Questions
                    </a>
                  </li>
                  <li>
                    <a className="link-dark" style={{ color: "" }} href="/">
                      Press & Notices
                    </a>
                  </li>
                </ul>
              </Col>
              <Col sm={12} md={4} lg={4}>
                <br className="d-sm-none" />
                <h5 style={{ color: "white" }}>Related Links</h5>

                <br />
                <ul className="ul">
                  <li>
                    <a
                      target="_blank"
                      className="link-dark"
                      href="https://www.cxc.org/"
                    >
                      Caribbean Examinations Council
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      className="link-dark"
                      href="https://cxc-store.com/"
                    >
                      CXC Store
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      className="link-dark"
                      href="http://moe.gov.jm/"
                    >
                      Ministry of Education, Jamaica
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      className="link-dark"
                      href="http://www.moe.gov.tt/"
                    >
                      Ministry of Education, Trinidad and Tobago
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      className="link-dark"
                      href="http://www.mes.gov.bb/"
                    >
                      Ministry of Education, Barbados
                    </a>
                  </li>

                  <li>
                    <a
                      target="_blank"
                      className="link-dark"
                      href="https://www.mona.uwi.edu/"
                    >
                      The University of the West Indies at Mona
                    </a>
                  </li>
                </ul>
              </Col>
              <Col sm={12} md={4} lg={4}>
                <br className="d-sm-none" />
                <h5 style={{ color: "white" }}>Disclaimers and Policies</h5>
                <br />
                <ul className="ul">
                  <li>
                    <a
                      className="link-dark"
                      style={{ color: "" }}
                      href="/policies/"
                    >
                      Policies
                    </a>
                  </li>
                  <li>
                    <a
                      className="link-dark"
                      style={{ color: "" }}
                      href="/privacy/"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      className="link-dark"
                      style={{ color: "" }}
                      href="/terms/"
                    >
                      Terms of Use
                    </a>
                  </li>
                  <li>
                    <a
                      className="link-dark"
                      style={{ color: "" }}
                      href="/tutor-policy/"
                    >
                      Tutor Policy
                    </a>
                  </li>
                  <li>
                    <a
                      className="link-dark"
                      style={{ color: "" }}
                      href="/content-sharing-policy/"
                    >
                      Content Sharing Policy
                    </a>
                  </li>
                  <li>
                    <a
                      className="link-dark"
                      style={{ color: "" }}
                      href="/discord-policy/"
                    >
                      Discord Guidelines & Terms
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
          <br />
        </div>
        <div className="bg-light text-center">
          <Container>
            <br />
            <br />
            <p>&copy; 2020 CXC Study Guide. All rights reserved.</p>
            <br />
          </Container>
        </div>
      </footer>
    </>
  )
}

export default Footer
