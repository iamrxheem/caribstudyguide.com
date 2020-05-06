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
  Button
} from "shards-react"
import { Zoom, Bounce, Fade, Flip, Rotate, Roll } from "react-reveal"
import Img from "react-image"
import axios from "axios"
import Swal from "sweetalert2"

import Layout from "../components/layout"
import SEO from "../components/seo"

class Page extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: "",
      password: ""
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()

    Swal.fire({
      title: "Error!",
      text: "Do you want to continue",
      icon: "error",
      confirmButtonText: "Cool"
    })

    if (this.state.email == 0 || this.state.password == 0) {
      Swal.fire({
        title: "Hmmm",
        text: "Email or password cannot be blank",
        icon: "error",
        confirmButtonText: "Cool"
      })
    }
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  render() {
    return (
      <>
        <Layout>
          <SEO
            title="Log in"
            description="Log in to your account or sign up to get started."
          />

          <Container>
            <Breadcrumb>
              <BreadcrumbItem>
                <a href="/">Home</a>
              </BreadcrumbItem>
              <BreadcrumbItem active>Log in</BreadcrumbItem>
            </Breadcrumb>

            <br />
            <Row>
              <Col sm={12} md={8} lg={8}></Col>

              <Col sm={12} md={4} lg={4}>
                <Card>
                  <CardBody>
                    <CardTitle>Log in</CardTitle>

                    <br />

                    <Form>
                      <FormGroup>
                        <label htmlFor="#email">Email</label>
                        <FormInput
                          onChange={this.handleChange}
                          id="email"
                          name="email"
                          placeholder="Enter your email"
                        />
                      </FormGroup>
                      <FormGroup>
                        <label htmlFor="#password">Password</label>
                        <FormInput
                          onChange={this.handleChange}
                          type="password"
                          id="#password"
                          name="password"
                          placeholder="Password"
                        />
                      </FormGroup>

                      <br />
                      <Button onClick={this.handleSubmit}>Log in</Button>
                    </Form>
                  </CardBody>
                  <CardFooter>
                    <a className="" href="/help/login/">
                      I need help logging in
                    </a>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Container>
        </Layout>
      </>
    )
  }
}

export default Page
