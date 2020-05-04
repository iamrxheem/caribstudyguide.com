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
import "bootstrap/dist/css/bootstrap.css"
import "shards-ui/dist/css/shards.css"
import "../components/layout.css"

class BlogLayout extends React.Component {
  constructor(props) {
    super(props)

    this.toggleDropdown = this.toggleDropdown.bind(this)
    this.toggleNavbar = this.toggleNavbar.bind(this)

    this.state = {
      dropdownOpen: false,
      collapseOpen: false
    }
  }

  toggleDropdown() {
    this.setState({
      ...this.state,
      ...{
        dropdownOpen: !this.state.dropdownOpen
      }
    })
  }

  toggleNavbar() {
    this.setState({
      ...this.state,
      ...{
        collapseOpen: !this.state.collapseOpen
      }
    })
  }

  render() {
    return (
      <>
        <header>
          <MobileView>
            <SocialMediaIcons />
          </MobileView>

          <Navbar
            type="dark"
            style={{ backgroundColor: "#01C8EF" }}
            theme=""
            expand="md"
          >
            <NavbarBrand href="/">
              <MobileView>
                <i className="fas fa-long-arrow-alt-left mr-2"></i>
                Back to Online Study Guide
              </MobileView>
              <BrowserView>
                <i className="fas fa-long-arrow-alt-left mr-2"></i>Back to Study
                Guide
              </BrowserView>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} />

            <Collapse open={this.state.collapseOpen} navbar>
              <Nav navbar className="ml-auto">
                <Dropdown
                  open={this.state.dropdownOpen}
                  toggle={this.toggleDropdown}
                >
                  <DropdownToggle
                    style={{ color: "white" }}
                    nav
                    caret
                  ></DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem></DropdownItem>
                    <DropdownItem></DropdownItem>
                  </DropdownMenu>
                </Dropdown>
                <NavItem>
                  <NavLink active href="/">
                    ...
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink active href="/">
                    ...
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink active href="/">
                    ...
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink active href="/">
                    ...
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink active href="/">
                    Contact
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </header>
        <>{this.props.children}</>
        <footer>
          <div className="bg-dark">
            <br />

            <br />
          </div>
          <div className="bg-light text-center">
            <br />
            <br />
            <p>&copy; 2020 CXC Study Guide. All rights reserved.</p>
            <br />
          </div>
        </footer>
      </>
    )
  }
}

export default BlogLayout
