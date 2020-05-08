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
            <CardBody className="alt-card-body">
              <BrowserView>
                <h6>{props.title}</h6>
              </BrowserView>

              <MobileView>
                <br />
                <CardTitle>{props.title}</CardTitle>
              </MobileView>

              <p>{props.description}</p>
              <br />

              <Button theme="light" href={props.start}>
                Start learning
              </Button>
            </CardBody>
          </Card>
        </>
      </Col>
      {/* End subjects */}
    </>
  )
}

export default SubjectPreview
