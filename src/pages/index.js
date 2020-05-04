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
                  <>
                    <p></p>
                  </>
                </>
              </Tab>
              <Tab eventKey="chemistry" title="Chemistry">
                <br />
                <>
                  <>
                    <p></p>
                  </>
                </>
              </Tab>
              <Tab eventKey="english-a" title="English A">
                <br />
                <>
                  <>
                    <p></p>
                  </>
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
