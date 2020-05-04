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
  Collapse
} from "shards-react"
import Img from "react-image"
import LazyLoad from "react-lazyload"
// React device detect
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect"
import { useStaticQuery, graphql } from "gatsby"

import SocialMediaIcons from "../components/socialMediaIcons"

// CSS import
import "../assets/css/bootswatch.css"
import "../components/layout.css"

class BlogLayout extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render() {
    return (
      <>
        <header>
          <MobileView>
            <SocialMediaIcons />
          </MobileView>

          <Navbar type="dark" theme="primary" expand="md">
            <NavbarBrand href="/">{this.props.siteTitle}</NavbarBrand>
          </Navbar>
        </header>
        <>{this.props.children}</>
        <footer></footer>
      </>
    )
  }
}

export default BlogLayout
