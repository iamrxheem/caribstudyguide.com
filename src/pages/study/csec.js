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
import Img from "react-image"
import axios from "axios"
import Swal from "sweetalert2"
import CSECLayout from "../../layouts/CSECLayout"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect"

class Page extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <>
        <Layout>
          <SEO
            title="Free CSEC Online Study Guides and Notes"
            description=""
            author="cxcstudyguide"
          />

          <Container>
            <Breadcrumb>
              <BreadcrumbItem>
                <a href="/">Home</a>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <a href="/study">Study</a>
              </BreadcrumbItem>
              <BreadcrumbItem active>CSEC</BreadcrumbItem>
            </Breadcrumb>
          </Container>

          <br />
          <Container fluid>
            <CSECLayout>
              <Row>
                {/* Subject */}
                <Col sm={12} md={4} lg={4}>
                  <>
                    <Card>
                      <CardImg
                        style={{ width: "100%" }}
                        src="https://www.stem.org.uk/sites/default/files/blog-images/A%20level%20mathematics.jpg"
                        alt="card image"
                      />
                      <CardBody>
                        <CardTitle>Title</CardTitle>
                        <p>Description</p>

                        <br />
                        <Row>
                          <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                            {/* View for browser */}
                            <BrowserView>
                              <a href="/study/csec/">Start </a>
                            </BrowserView>

                            {/* View for mobile devices */}
                            <MobileView>
                              <a href="/study/csec/">Start learning</a>
                            </MobileView>
                          </Col>
                          <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                            <a href="/study/csec/">Resources</a>
                          </Col>
                        </Row>
                      </CardBody>
                    </Card>
                  </>
                </Col>
                {/* End subjects */}

                {/* Subject */}
                <Col sm={12} md={4} lg={4}>
                  <br className="d-md-none" />

                  <>
                    <Card>
                      <CardImg
                        style={{ width: "100%" }}
                        src="https://www.stem.org.uk/sites/default/files/blog-images/A%20level%20mathematics.jpg"
                        alt="card image"
                      />
                      <CardBody>
                        <CardTitle>Title</CardTitle>
                        <p>Description</p>

                        <br />
                        <Row>
                          <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                            {/* View for browser */}
                            <BrowserView>
                              <a href="/study/csec/">Start </a>
                            </BrowserView>

                            {/* View for mobile devices */}
                            <MobileView>
                              <a href="/study/csec/">Start learning</a>
                            </MobileView>
                          </Col>
                          <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                            <a href="/study/csec/">Resources</a>
                          </Col>
                        </Row>
                      </CardBody>
                    </Card>
                  </>
                </Col>
                {/* End subjects */}

                {/* Subject */}
                <Col sm={12} md={4} lg={4}>
                  <br className="d-md-none" />

                  <>
                    <Card>
                      <CardImg
                        style={{ width: "100%" }}
                        src="https://www.stem.org.uk/sites/default/files/blog-images/A%20level%20mathematics.jpg"
                        alt="card image"
                      />
                      <CardBody>
                        <CardTitle>Title</CardTitle>
                        <p>Description</p>

                        <br />
                        <Row>
                          <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                            {/* View for browser */}
                            <BrowserView>
                              <a href="/study/csec/">Start </a>
                            </BrowserView>

                            {/* View for mobile devices */}
                            <MobileView>
                              <a href="/study/csec/">Start learning</a>
                            </MobileView>
                          </Col>
                          <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                            <a href="/study/csec/">Resources</a>
                          </Col>
                        </Row>
                      </CardBody>
                    </Card>
                  </>
                </Col>
                {/* End subjects */}

                {/* Subject */}
                <Col sm={12} md={4} lg={4}>
                  <br />
                  <>
                    <Card>
                      <CardImg
                        style={{ width: "100%" }}
                        src="https://www.stem.org.uk/sites/default/files/blog-images/A%20level%20mathematics.jpg"
                        alt="card image"
                      />
                      <CardBody>
                        <CardTitle>Title</CardTitle>
                        <p>Description</p>

                        <br />
                        <Row>
                          <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                            {/* View for browser */}
                            <BrowserView>
                              <a href="/study/csec/">Start </a>
                            </BrowserView>

                            {/* View for mobile devices */}
                            <MobileView>
                              <a href="/study/csec/">Start learning</a>
                            </MobileView>
                          </Col>
                          <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                            <a href="/study/csec/">Resources</a>
                          </Col>
                        </Row>
                      </CardBody>
                    </Card>
                  </>
                </Col>
                {/* End subjects */}

                {/* Subject */}
                <Col sm={12} md={4} lg={4}>
                  <br />
                  <>
                    <Card>
                      <CardImg
                        style={{ width: "100%" }}
                        src="https://www.stem.org.uk/sites/default/files/blog-images/A%20level%20mathematics.jpg"
                        alt="card image"
                      />
                      <CardBody>
                        <CardTitle>Title</CardTitle>
                        <p>Description</p>

                        <br />
                        <Row>
                          <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                            {/* View for browser */}
                            <BrowserView>
                              <a href="/study/csec/">Start </a>
                            </BrowserView>

                            {/* View for mobile devices */}
                            <MobileView>
                              <a href="/study/csec/">Start learning</a>
                            </MobileView>
                          </Col>
                          <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                            <a href="/study/csec/">Resources</a>
                          </Col>
                        </Row>
                      </CardBody>
                    </Card>
                  </>
                </Col>
                {/* End subjects */}

                {/* Subject */}
                <Col sm={12} md={4} lg={4}>
                  <br />
                  <>
                    <Card>
                      <CardImg
                        style={{ width: "100%" }}
                        src="https://www.stem.org.uk/sites/default/files/blog-images/A%20level%20mathematics.jpg"
                        alt="card image"
                      />
                      <CardBody>
                        <CardTitle>Title</CardTitle>
                        <p>Description</p>

                        <br />
                        <Row>
                          <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                            {/* View for browser */}
                            <BrowserView>
                              <a href="/study/csec/">Start </a>
                            </BrowserView>

                            {/* View for mobile devices */}
                            <MobileView>
                              <a href="/study/csec/">Start learning</a>
                            </MobileView>
                          </Col>
                          <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                            <a href="/study/csec/">Resources</a>
                          </Col>
                        </Row>
                      </CardBody>
                    </Card>
                  </>
                </Col>
                {/* End subjects */}

                {/* Subject */}
                <Col sm={12} md={4} lg={4}>
                  <br />
                  <>
                    <Card>
                      <CardImg
                        style={{ width: "100%" }}
                        src="https://www.stem.org.uk/sites/default/files/blog-images/A%20level%20mathematics.jpg"
                        alt="card image"
                      />
                      <CardBody>
                        <CardTitle>Title</CardTitle>
                        <p>Description</p>

                        <br />
                        <Row>
                          <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                            {/* View for browser */}
                            <BrowserView>
                              <a href="/study/csec/">Start </a>
                            </BrowserView>

                            {/* View for mobile devices */}
                            <MobileView>
                              <a href="/study/csec/">Start learning</a>
                            </MobileView>
                          </Col>
                          <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                            <a href="/study/csec/">Resources</a>
                          </Col>
                        </Row>
                      </CardBody>
                    </Card>
                  </>
                </Col>
                {/* End subjects */}

                {/* Subject */}
                <Col sm={12} md={4} lg={4}>
                  <br />
                  <>
                    <Card>
                      <CardImg
                        style={{ width: "100%" }}
                        src="https://www.stem.org.uk/sites/default/files/blog-images/A%20level%20mathematics.jpg"
                        alt="card image"
                      />
                      <CardBody>
                        <CardTitle>Title</CardTitle>
                        <p>Description</p>

                        <br />
                        <Row>
                          <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                            {/* View for browser */}
                            <BrowserView>
                              <a href="/study/csec/">Start </a>
                            </BrowserView>

                            {/* View for mobile devices */}
                            <MobileView>
                              <a href="/study/csec/">Start learning</a>
                            </MobileView>
                          </Col>
                          <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                            <a href="/study/csec/">Resources</a>
                          </Col>
                        </Row>
                      </CardBody>
                    </Card>
                  </>
                </Col>
                {/* End subjects */}

                {/* Subject */}
                <Col sm={12} md={4} lg={4}>
                  <br />
                  <>
                    <Card>
                      <CardImg
                        style={{ width: "100%" }}
                        src="https://www.stem.org.uk/sites/default/files/blog-images/A%20level%20mathematics.jpg"
                        alt="card image"
                      />
                      <CardBody>
                        <CardTitle>Title</CardTitle>
                        <p>Description</p>

                        <br />
                        <Row>
                          <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                            {/* View for browser */}
                            <BrowserView>
                              <a href="/study/csec/">Start </a>
                            </BrowserView>

                            {/* View for mobile devices */}
                            <MobileView>
                              <a href="/study/csec/">Start learning</a>
                            </MobileView>
                          </Col>
                          <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                            <a href="/study/csec/">Resources</a>
                          </Col>
                        </Row>
                      </CardBody>
                    </Card>
                  </>
                </Col>
                {/* End subjects */}

                {/* Subject */}
                <Col sm={12} md={4} lg={4}>
                  <br />
                  <>
                    <Card>
                      <CardImg
                        style={{ width: "100%" }}
                        src="https://www.stem.org.uk/sites/default/files/blog-images/A%20level%20mathematics.jpg"
                        alt="card image"
                      />
                      <CardBody>
                        <CardTitle>Title</CardTitle>
                        <p>Description</p>

                        <br />
                        <Row>
                          <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                            {/* View for browser */}
                            <BrowserView>
                              <a href="/study/csec/">Start </a>
                            </BrowserView>

                            {/* View for mobile devices */}
                            <MobileView>
                              <a href="/study/csec/">Start learning</a>
                            </MobileView>
                          </Col>
                          <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                            <a href="/study/csec/">Resources</a>
                          </Col>
                        </Row>
                      </CardBody>
                    </Card>
                  </>
                </Col>
                {/* End subjects */}
              </Row>
            </CSECLayout>
          </Container>
        </Layout>
      </>
    )
  }
}

export default Page
