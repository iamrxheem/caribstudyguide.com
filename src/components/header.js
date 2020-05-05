import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

// React device detect
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect"

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

import SocialMediaIcons from "./socialMediaIcons"

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.toggleDropdown = this.toggleDropdown.bind(this)
    this.toggleDropdown2 = this.toggleDropdown2.bind(this)
    this.toggleNavbar = this.toggleNavbar.bind(this)

    this.state = {
      dropdownOpen: false,
      dropdownOpen2: false,
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

  toggleDropdown2() {
    this.setState({
      ...this.state,
      ...{
        dropdownOpen2: !this.state.dropdownOpen2
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
          <Navbar
            type="dark"
            style={{ backgroundColor: "#01C8EF" }}
            theme=""
            expand="md"
          >
            <NavbarBrand href="/">{this.props.siteTitle}</NavbarBrand>

            <NavLink className="ml-auto" active href="/sign-in/">
              <i className="fas fa-user text-white d-md-none"></i>
            </NavLink>

            <NavbarToggler onClick={this.toggleNavbar} />

            <Collapse open={this.state.collapseOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink active href="/">
                    Home
                  </NavLink>
                </NavItem>
                <Dropdown
                  open={this.state.dropdownOpen}
                  toggle={this.toggleDropdown}
                >
                  <DropdownToggle style={{ color: "white" }} nav caret>
                    Study
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>
                      <LazyLoad>
                        <Img
                          style={{ height: "50px", width: "50px" }}
                          src={[
                            "https://46i48l108maaxssg8uyuvr10-wpengine.netdna-ssl.com/wp-content/uploads/2015/10/csec.png",
                            "",
                            ""
                          ]}
                          className="card-img mr-2"
                        />
                      </LazyLoad>
                      CSEC Examinations
                    </DropdownItem>
                    <DropdownItem>
                      <LazyLoad>
                        <Img
                          style={{ height: "50px", width: "50px" }}
                          src={[
                            "https://46i48l108maaxssg8uyuvr10-wpengine.netdna-ssl.com/wp-content/uploads/2015/10/cape.png",
                            "",
                            ""
                          ]}
                          className="card-img mr-3"
                        />
                      </LazyLoad>
                      CAPE Examinations
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>

                {/* Students */}
                <Dropdown
                  open={this.state.dropdownOpen2}
                  toggle={this.toggleDropdown2}
                >
                  <DropdownToggle style={{ color: "white" }} nav caret>
                    Students
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>Scholarships and Financial Aid</DropdownItem>
                    <DropdownItem>Summer Jobs</DropdownItem>
                    <DropdownItem>Coding Camps</DropdownItem>
                    <DropdownItem>Language Camps</DropdownItem>
                    <hr />
                    <DropdownItem>
                      <i
                        className="fas fa-map-pin mr-3"
                        style={{ color: "#394359" }}
                      ></i>
                      Find a local tutor
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
                <NavItem>
                  <NavLink active href="/teachers/">
                    Teachers
                  </NavLink>
                </NavItem>
              </Nav>

              <Nav navbar className="ml-auto">
                <NavItem>
                  <NavLink active href="/blog/">
                    Online Classes
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink active href="/blog/">
                    Blog
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink active href="/join/">
                    Join
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink active href="/FAQ/">
                    FAQ
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink active href="/contact/">
                    Contact
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
          <br />
          <MobileView>
            <SocialMediaIcons />
          </MobileView>
        </header>
      </>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
