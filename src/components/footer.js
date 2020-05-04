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

import MailingListSubscribe from "./mailingListSubscribe"
import SocialMediaIcons from "./socialMediaIcons"

const Footer = props => {
  return (
    <>
      <footer>
        <div className="bg-light">
          <Container>
            <br />
            <Row>
              <Col sm={12} md={4} lg={4}>
                <SocialMediaIcons />
                <br />
                <MailingListSubscribe />
              </Col>
              <Col sm={12} md={4} lg={4}>
                <h5>Title</h5>
                <br />
                <ul className="ul">
                  <li>
                    <a href="/">....</a>
                  </li>
                  <li>
                    <a href="/">....</a>
                  </li>
                  <li>
                    <a href="/">....</a>
                  </li>
                  <li>
                    <a href="/">....</a>
                  </li>
                  <li>
                    <a href="/">....</a>
                  </li>
                  <li>
                    <a href="/">....</a>
                  </li>
                </ul>
              </Col>
              <Col sm={12} md={4} lg={4}>
                <h5>Title</h5>
                <br />
                <ul className="ul">
                  <li>
                    <a href="/">....</a>
                  </li>
                  <li>
                    <a href="/">....</a>
                  </li>
                  <li>
                    <a href="/">....</a>
                  </li>
                  <li>
                    <a href="/">....</a>
                  </li>
                  <li>
                    <a href="/">....</a>
                  </li>
                  <li>
                    <a href="/">....</a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="bg-dark">
          <br />
          <br />
          <Container>
            <Row>
              <Col sm={12} md={4} lg={4}></Col>
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
            <br />
          </Container>
        </div>
        <div className="bg-light">
          <br />
          <Container></Container>
        </div>
      </footer>
    </>
  )
}

export default Footer
