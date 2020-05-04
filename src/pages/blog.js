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
import BlogLayout from "../layouts/blogLayout"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Page = () => (
  <>
    <BlogLayout>
      <SEO title="Blog" description="" />

      <br />
      <Container>
        <Breadcrumb>
          <BreadcrumbItem>
            <a href="/">Home</a>
          </BreadcrumbItem>
          <BreadcrumbItem active>Blog</BreadcrumbItem>
        </Breadcrumb>
      </Container>
    </BlogLayout>
  </>
)

export default Page
