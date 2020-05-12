import React from "react"
import { Link } from "gatsby"

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
  Button,
  Form,
  FormGroup
} from "shards-react"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import SEO from "../components/seo"

class Page extends React.Component {
  constructor(props) {
    super(props)

    this.state = { email: "" }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ email: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()
  }

  render() {
    return (
      <>
        <SEO
          title="Mailing List"
          description="Join our mailing list to get weekly study notes, flash cards and past paper solution."
        />
        <Helmet>
          <meta
            name="keywords"
            content="mailing list, emails, caribbean exams, english a, english b, spanish, mathematics, social studies, french, CAPE exams, mcq, online class , cxc, csec, free cxc past papers, csec study guide, caribbean examination council, cxc guide online, free cxc study notes, cxc exams, csec exams, study, jamaica, caribbean, free cxc past papers, cxc online classes, csec online classes, cxc zoom classes, free cxc lessons, free csec lessons, csec lessons online, cxc Trinidad and tobago, cxc jamaica online classes, cxc jamaica lessons, cxc barbados, cxc textbooks, free csec, textbooks, free cape, cape, cxc cape, csec, cape, cxcstudyguide, Raheem McDonald, rxheem, iamrxheem"
          />
        </Helmet>

        <Layout>
          <Container>
            <Breadcrumb>
              <BreadcrumbItem>
                <a href="/">Home</a>
              </BreadcrumbItem>
              <BreadcrumbItem active>Mailing List</BreadcrumbItem>
            </Breadcrumb>

            <Row>
              <Col sm={12} md={4} lg={4}>
                <h5>Mailing List</h5>
                <p>
                  Join our mailing list to get weekly study notes, flash cards
                  and past paper solution.
                </p>

                <div className="form" id="mc_embed_signup">
                  <Form
                    action="https://cxcguide.us18.list-manage.com/subscribe/post?u=11c71b70324980ffe7d8500a6&amp;id=3c1d97be12"
                    method="post"
                    id="mc-embedded-subscribe-form"
                    name="mc-embedded-subscribe-form"
                    className="validate"
                    target="_blank"
                    novalidate
                  >
                    <div id="mc_embed_signup_scroll">
                      <FormGroup>
                        <FormInput
                          type="email"
                          value=""
                          value={this.state.email}
                          onChange={this.handleChange}
                          name="EMAIL"
                          className=""
                          id="mce-EMAIL"
                          placeholder="Enter your email"
                          required
                        />

                        <div
                          style={{ position: "absolute", left: "-5000px" }}
                          aria-hidden="true"
                        >
                          <input
                            type="text"
                            name="b_11c71b70324980ffe7d8500a6_3c1d97be12"
                            tabindex="-1"
                            value=""
                          />
                        </div>
                      </FormGroup>
                      <div class="clear">
                        <Button
                          style={{ width: "100px" }}
                          type="submit"
                          value="Subscribe"
                          name="subscribe"
                          id="mc-embedded-subscribe"
                        >
                          Sign up
                        </Button>
                      </div>
                    </div>
                  </Form>
                </div>
              </Col>
              <Col sm={12} md={8} lg={8}></Col>
            </Row>
          </Container>
        </Layout>
      </>
    )
  }
}

export default Page
