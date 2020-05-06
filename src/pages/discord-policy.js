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

// React device detect
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect"

const Page = () => (
  <>
    <Layout>
      <SEO title="Discord Guidelines" description="" />

      <br />
      <Container>
        <Breadcrumb>
          <BreadcrumbItem>
            <a href="/">Home</a>
          </BreadcrumbItem>
          <BreadcrumbItem active>Discord Guidelines</BreadcrumbItem>
        </Breadcrumb>

        <br />
        <Row>
          <Col sm={12} md={8} lg={8}>
            <img
              className="card-img"
              style={{ width: "100%" }}
              src="https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2019/05/Discord-Featured-796x417.jpg"
            />
            <br />
            <br />
            <small className="text-right ">
              Credit:{" "}
              <a href="https://discord.com/" target="_blank">
                Discord
              </a>
              ,{" "}
              <a
                target="_blank"
                href="https://thenextweb.com/basics/2020/03/19/keep-in-touch-how-to-set-up-discord-server-for-friends-family/"
              >
                TNW
              </a>
            </small>

            <br />
            <br />
            <h5>Our Discord Guidelines</h5>

            <p>
              <a href="https://discord.com/" target="_blank">
                Discord
              </a>{" "}
              is the easiest way to communicate with a large numnber of people
              and is used to join people of different communities, organizations
              and backgrounds. We use Discord to bring together students to
              study, students with the same interest, to share useful resources
              and infomrmation.
            </p>

            <p>
              To foster a a safe environment for students and teachers on our
              Discord servers we encourage everyone to read our guidelines to
              know what is acceptable and what is not. Before you read our
              guidelines, please read{" "}
              <a href="https://discord.com/terms" target="_blank">
                Discord's Terms of Use
              </a>
              .
            </p>
          </Col>
          <Col sm={12} md={4} lg={4}></Col>
        </Row>
      </Container>
    </Layout>
  </>
)

export default Page
