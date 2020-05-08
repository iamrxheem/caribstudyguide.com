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
            <CardBody className="alt-card-body">
              <Row>
                <Col sm={12} md={4} lg={4}>
                  <CardImg
                    style={{ width: "100%" }}
                    src={props.imgSrc}
                    alt="card image"
                    className="subject-image"
                  />
                </Col>
                <Col sm={12} md={8} lg={8}>
                  <BrowserView>
                    <h6>{props.title}</h6>
                  </BrowserView>

                  <MobileView>
                    <br />
                    <CardTitle>{props.title}</CardTitle>

                    <p>{props.description}</p>
                  </MobileView>

                  <br />
                  <Row>
                    <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                      {/* View for browser */}
                      <BrowserView>
                        <a href={props.start}>Start</a>
                      </BrowserView>

                      {/* View for mobile devices */}
                      <MobileView>
                        <Button theme="light" href={props.start}>
                          Start learning
                        </Button>
                      </MobileView>
                    </Col>
                    <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                      <a href={props.resources}></a>
                    </Col>
                  </Row>
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
