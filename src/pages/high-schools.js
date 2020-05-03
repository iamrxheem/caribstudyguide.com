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

import Layout from "../components/layout"
import SEO from "../components/seo"

const Page = () => (
  <>
    <Layout>
      <SEO title="High Schools" description="" />

      <br />
      <Container>
        <Breadcrumb>
          <BreadcrumbItem>
            <a href="/">Home</a>
          </BreadcrumbItem>
          <BreadcrumbItem active>High Schools</BreadcrumbItem>
        </Breadcrumb>
      </Container>
    </Layout>
  </>
)

export default Page
