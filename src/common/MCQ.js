import React from "react"
import MCQItem from "./MCQItem"
import Ads from "../components/ads"
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
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect"
import LazyLoad from "react-lazyload"

const CustomRightArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType }
  } = rest
  // onMove means if dragging or swiping in progress.
  return (
    <>
      <Button id="next-button" onClick={() => onClick()}>
        Next
      </Button>
    </>
  )
}

const MCQ = props => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }

  return (
    <>
      <Row>
        <Col sm={12} md={8} lg={8}>
          <LazyLoad>
            <Carousel
              customLeftArrow={<CustomRightArrow />}
              ssr={false}
              responsive={responsive}
              infinite={true}
              arrows={true}
              partialVisible={true}
              swipeable={true}
              dots={true}
              showDots={false}
              style={{ height: "auto" }}
            >
              {props.children}
            </Carousel>
          </LazyLoad>
        </Col>
        <Col sm={12} md={4} lg={4}>
          <Ads />
        </Col>
      </Row>
    </>
  )
}

export default MCQ
