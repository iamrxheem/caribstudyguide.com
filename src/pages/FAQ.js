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

            <br />
            <MobileView>
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
                alt="faq image"
              />
            </MobileView>
            <br />

            <Row>
              <Col sm={12} md={8} lg={8}>
                <h5>Frequently Asked Questions</h5>

                <p>
                  Have a question? You can find the answers to the most common
                  questions we get asked by our students. If your question is
                  not then let us know.
                </p>
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
