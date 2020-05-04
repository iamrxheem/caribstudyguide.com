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
  Breadcrumb,
  BreadcrumbItem,
  Row,
  Col,
  Container,
  Button
} from "shards-react"

// React device detect
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect"

const SocialMediaIcons = props => {
  return (
    <>
      <Nav fill={isMobile}>
        <NavItem>
          <NavLink target="_blank" href="/">
            <i
              style={{ color: "#8a3ab9" }}
              className="fab fa-instagram fa-lg"
            ></i>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink target="_blank" href="/">
            <i style={{ color: "red" }} className="fab fa-youtube fa-lg"></i>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink target="_blank" href="/">
            <i
              style={{ color: "#00acee" }}
              className="fab fa-twitter fa-lg"
            ></i>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink target="_blank" href="/">
            <i
              style={{ color: "#0084FF" }}
              className="fab fa-facebook-messenger fa-lg"
            ></i>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink target="_blank" href="/">
            <i style={{ color: "grey" }} className="fas fa-envelope fa-lg"></i>
          </NavLink>
        </NavItem>
      </Nav>
    </>
  )
}

export default SocialMediaIcons
