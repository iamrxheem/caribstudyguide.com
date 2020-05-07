import React from "react"
import SlideMenu from "react-slide-menu"
import {
  Alert,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  CardTitle,
  Card,
  CardBody,
  Form,
  FormGroup,
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
  CardFooter,
  Button
} from "shards-react"
import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText
} from "@trendmicro/react-sidenav"
import { Tab, Tabs } from "react-bootstrap"

class CSECLayout extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <>
        <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
          <Tab eventKey="home" title="Home">
            <br />
            <>{this.props.children}</>
          </Tab>
          <Tab eventKey="profile" title="Profile">
            <br />
            <p>Welcome</p>
          </Tab>
        </Tabs>
      </>
    )
  }
}

export default CSECLayout
