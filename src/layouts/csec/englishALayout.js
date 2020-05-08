import React from "react"

import { Link } from "gatsby"

import {
  Alert,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  CardTitle,
  Card,
  CardBody,
  Form,
  FormGroup,
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
  CardFooter,
  Button,
  CardImg
} from "shards-react"
import { Zoom, Bounce, Fade, Flip, Rotate, Roll } from "react-reveal"
import CSECLayout from "../CSECLayout"

const EnglishALayout = props => {
  return (
    <>
      <Container fluid>
        <CSECLayout>
          <Row>
            <Col sm={12} md={4} lg={4}></Col>
            <Col sm={12} md={8} lg={8}>
              <Card>
                <CardBody className="alt-card-body">
                  <>{props.children}</>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </CSECLayout>
      </Container>
    </>
  )
}

export default EnglishALayout
