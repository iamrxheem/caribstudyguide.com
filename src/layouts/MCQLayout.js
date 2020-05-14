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
import { Tab, Tabs } from "react-bootstrap"

// Ads
import Ads from "../components/ads"

class MCQLayout extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <>
        <Row>
          <Col sm={12} md={9} lg={9}>
            <>{this.props.children}</>
          </Col>
          <Col sm={12} md={3} lg={3}>
            <Ads />
          </Col>
        </Row>
      </>
    )
  }
}

export default MCQLayout
