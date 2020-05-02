import { Link } from "gatsby"
import PropTypes from "prop-types"
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
        <>
          <Navbar type="dark" theme="info" expand="md">
            <NavbarBrand href="/">{this.props.siteTitle}</NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} />

            <Collapse open={this.state.collapseOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink active href="/">
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink active href="/">
                    Disabled
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
                    <DropdownItem> CSEC</DropdownItem>
                    <DropdownItem> CAPE</DropdownItem>

                    <hr />
                    <DropdownItem>I'm studying something else</DropdownItem>
                  </DropdownMenu>
                </Dropdown>

                {/* For students */}
                <Dropdown
                  open={this.state.dropdownOpen2}
                  toggle={this.toggleDropdown2}
                >
                  <DropdownToggle style={{ color: "white" }} nav caret>
                    For Students
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>Scholarships</DropdownItem>
                    <DropdownItem>Local Summer Jobs</DropdownItem>
                    <DropdownItem></DropdownItem>
                    <DropdownItem></DropdownItem>
                    <DropdownItem></DropdownItem>
                    <DropdownItem></DropdownItem>
                    <hr />
                    <DropdownItem>
                      <i
                        className="fas fa-map-pin mr-3"
                        style={{ color: "red" }}
                      ></i>
                      Find a local tutor
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </Nav>

              <Nav navbar className="ml-auto">
                <NavLink active href="/join/">
                  Join
                </NavLink>
                <NavLink active href="/FAQ/">
                  FAQ
                </NavLink>
                <NavLink active href="/contact/">
                  Contact
                </NavLink>
              </Nav>
            </Collapse>
          </Navbar>
        </>
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
