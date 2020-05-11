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

const liStyle = {
  paddingBottom: "15px"
}

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

            <br />
            <br />
            <h6>DO NOT share your personal information </h6>
            <p>
              We strictly prohibit sharing your personal and personally
              identifiable information on our Discord .
            </p>

            <ul>
              <li style={liStyle}>
                Do not share your personally identifiable infomation including
                your name, phone number, date of birth, address, high school etc
              </li>
              <li style={liStyle}>
                Do not attempt to start a personal or ramantic relationship with
                anyone
              </li>
            </ul>

            <p>
              If someone approaches you, let us know and then{" "}
              <a
                target="_blank"
                href="https://support.discord.com/hc/en-us/articles/217916488-Blocking-Privacy-Settings-"
              >
                block them
              </a>
              .
            </p>

            <br />
            <br />
            <h6>DO NOT harass or bully anyone</h6>
            <p>
              Targeting, harassing or bulling on our Discord servers is STRICTLY
              prohibited and result in an instant ban from our severs. This may
              also lead to a ban on using the Discord platform. We promote a
              safe, fun and productive learning environment for our students and
              teachers and will remove anyone violating this rule immediately.
            </p>

            <br />
            <br />
            <h6>Title</h6>
            <p>Description</p>

            <br />
            <br />
            <h6>Title</h6>
            <p>Description</p>

            <br />
            <br />
            <h6>Title</h6>
            <p>Description</p>

            <br />
            <br />
            <h6>Title</h6>
            <p>Description</p>
          </Col>
          <Col sm={12} md={4} lg={4}></Col>
        </Row>
      </Container>
    </Layout>
  </>
)

export default Page
