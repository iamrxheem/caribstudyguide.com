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
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect"

const SubjectPreview = props => {
  return (
    <>
      {/* Subject */}
      <Col sm={12} md={6} lg={6}>
        <br />

        <>
          <Card>
            <CardImg
              style={{ width: "100%" }}
              src={props.imgSrc}
              alt="card image"
              className="subject-image"
            />
            <CardBody>
              {/* Mobile view */}
              <MobileView>
                <CardTitle>{props.title}</CardTitle>
              </MobileView>

              {/* Browser view */}
              <BrowserView>
                <h6>{props.title}</h6>
              </BrowserView>
              <p>{props.description}</p>

              <br />
              <Row>
                <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                  {/* View for browser */}
                  <BrowserView>
                    <a href={props.start}>Start</a>
                  </BrowserView>

                  {/* View for mobile devices */}
                  <MobileView>
                    <a href={props.start}>Start learning</a>
                  </MobileView>
                </Col>
                <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                  <a href={props.resources}>Resources</a>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </>
      </Col>
      {/* End subjects */}
    </>
  )
}

export default SubjectPreview
