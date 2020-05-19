import React from "react"
import { Link } from "gatsby"
import Img from "react-image"
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
  Button
} from "shards-react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Page = () => (
  <Layout>
    <SEO
      title="Feedback"
      description="Leave your feedback and recommendations here!"
    />

    <Container>
      <Breadcrumb>
        <BreadcrumbItem>
          <a href="/">Home</a>
        </BreadcrumbItem>
        <BreadcrumbItem active>Feedback</BreadcrumbItem>
      </Breadcrumb>

      <Row>
        <Col sm={12} md={8} lg={8}>
          <Img
            className="card-img"
            style={{ width: "100%" }}
            src={[
              "https://blog-assets.freshworks.com/freshdesk/wp-content/uploads/2018/10/Blog-Cover.png",
              "https://cdn2.hubspot.net/hub/145335/file-2349295368-png/5_tips_for_giving_better_feedback_to_your_sales_team.png",
              "data:image/png;base64,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"
            ]}
          />
          <br />
          <div id="disqus_thread"></div>
        </Col>
        <Col sm={12} md={4} lg={4}></Col>
      </Row>
    </Container>
  </Layout>
)

export default Page
