import React from "react"
import { Link } from "gatsby"

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
import Obfuscate from "react-obfuscate"
import { Zoom, Bounce, Fade, Flip, Rotate, Roll } from "react-reveal"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Page = () => (
  <>
    <Layout>
      <SEO title="" description="" />

      <br />
      <Container>
        <Breadcrumb>
          <BreadcrumbItem>
            <a href="/">Home</a>
          </BreadcrumbItem>
          <BreadcrumbItem active></BreadcrumbItem>
        </Breadcrumb>

        <Row>
          <Col sm={12} md={6} lg={6}>
            <Zoom>
              <figure>
                <img
                  style={{ width: "100%" }}
                  className="card-img"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQGE_8uwjJ43p1vHlwEhlvg0l2ZwcfigCZJx1xlvit__FlvfXC9&usqp=CAU"
                />
              </figure>
            </Zoom>
            <br />
          </Col>
          <Col sm={12} md={6} lg={6}>
            <h5>Contact Us</h5>

            <p>
              We're happy you'd like to react out to us. The mose effecive way
              to reach out to us is to send us an email. Our email address is:
            </p>

            <ul className="ul">
              <li>
                <Obfuscate
                  email="contact@cxcguide.com"
                  headers={{
                    cc: "",
                    bcc: "",
                    subject: "Inquiry",
                    body: ""
                  }}
                />
              </li>
            </ul>

            <p>
              You can also use the mail option by clicking the mail button
              located at the lower right corner of the screen. Alternatively,
              you can reach out to us on any one of our social media platforms.
            </p>

            <ul className="ul">
              <li>
                <a
                  target="_blank"
                  href="https://www.instagram.com/cxcstudyguide/"
                >
                  <i
                    style={{ color: "#8a3ab9" }}
                    className="fab fa-instagram fa-lg mr-2"
                  ></i>
                  Instagram
                </a>
              </li>

              <li>
                <a
                  target="_blank"
                  href="https://www.youtube.com/channel/UC0eO_ApReknTjj50B7_LQyw"
                >
                  <i
                    style={{ color: "red" }}
                    className="fab fa-youtube fa-lg mr-2"
                  ></i>
                  Youtube
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Layout>
  </>
)

export default Page
