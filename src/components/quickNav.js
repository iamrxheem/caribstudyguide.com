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
  Alert,
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

const QuickNav = props => {
  return (
    <>
      <div>
        <Nav fill>
          <NavItem>
            <NavLink href="/study/">Study</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/quiz/">Quiz</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/FAQ/">FAQ</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="mailto:contact@cxcguide.com">Email us</NavLink>
          </NavItem>
        </Nav>
      </div>
    </>
  )
}

export default QuickNav
