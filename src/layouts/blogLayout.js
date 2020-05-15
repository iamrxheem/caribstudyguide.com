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
  Container,
  Row,
  Col
} from "shards-react"
import Img from "react-image"
import ReactGA from "react-ga"
import Layout from "../components/layout"
import Ads from "../components/ads"

// React device detect
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect"

import { useStaticQuery, graphql } from "gatsby"

class BlogLayout extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <>
        <Layout>
          <Container>
            <Row>
              <Col sm={12} md={8} lg={8}>
                <>{this.props.children}</>
              </Col>
              <Col sm={12} md={4} lg={4}>
                <Ads />
              </Col>
            </Row>
          </Container>
        </Layout>
      </>
    )
  }
}

export default BlogLayout
