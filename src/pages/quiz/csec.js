import React from "react"
import { Link } from "gatsby"

import {
  Alert,
  Badge,
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
import { Helmet } from "react-helmet"
import { Zoom, Bounce, Fade, Flip, Rotate, Roll } from "react-reveal"
import Img from "react-image"
import axios from "axios"
import Swal from "sweetalert2"
import CSECLayout from "../../layouts/CSECLayout"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import SubjectPreview from "../../common/subjectPreview"

import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect"

class Page extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      triedUnavailableQuiz: false
    }

    this.onSelect = this.onSelect.bind(this)
  }

  onSelect(event) {
    event.preventDefault()

    if (this.state.triedUnavailableQuiz) {
      Swal.fire("I'm pretty sure you can read.")
    } else {
      Swal.fire(
        "Hmm ..",
        "This quiz isn't available yet. You can check back later.",
        "question"
      )

      this.setState({ triedUnavailableQuiz: true })
    }
  }

  render() {
    return (
      <>
        <Layout>
          <SEO
            title="Online CSEC Quizzes"
            description="Prepare for your CSEC exams with our multiple choice quizzes."
            author="cxcstudyguide"
          />
          <Helmet>
            <meta
              name="keywords"
              content="quizzes, quiz, online quiz, caribbean exams, english a, english b, spanish, mathematics, social studies, french, CAPE exams, mcq, online class , cxc, csec, free cxc past papers, csec study guide, caribbean examination council, cxc guide online, free cxc study notes, cxc exams, csec exams, study, jamaica, caribbean, free cxc past papers, cxc online classes, csec online classes, cxc zoom classes, free cxc lessons, free csec lessons, csec lessons online, cxc Trinidad and tobago, cxc jamaica online classes, cxc jamaica lessons, cxc barbados, cxc textbooks, free csec, textbooks, free cape, cape, cxc cape, csec, cape, rxheem, Raheem McDonald, iamrxheem, Raheem McDonald UWI, Raheem McDonald Jamaica, CXC study guide, cxc online study guide, cxcstudyguide"
            />
          </Helmet>

          <br />
          <Container>
            <Breadcrumb>
              <BreadcrumbItem>
                <a href="/">Home</a>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <a href="/quiz/">Quiz</a>
              </BreadcrumbItem>
              <BreadcrumbItem active>CSEC</BreadcrumbItem>
            </Breadcrumb>
          </Container>

          <Container>
            <Row>
              <Col sm={12} md={8} lg={8}>
                <img
                  src="https://d1klenmqvfdv9g.cloudfront.net/wp-content/uploads/2018/11/Create-Quizzes-Easily-with-a-WordPress-Form-Plugin.jpg"
                  className="card-img"
                  style={{ width: "100%" }}
                />

                <br />
                <br />
                <h5>CSEC Quizzes</h5>

                <br />
                <ul className="ul">
                  {/* Subject */}
                  <li>
                    <i
                      style={{ color: "#FF08D7" }}
                      className="fas fa-angle-right mr-2"
                    ></i>
                    <a href="/quiz/csec/biology/">Biology</a>
                  </li>

                  {/* Subject */}
                  <li>
                    <i
                      style={{ color: "#FF08D7" }}
                      className="fas fa-angle-right mr-2"
                    ></i>
                    <a href="/quiz/csec/pob/">Principles of Business</a>
                  </li>

                  <li>
                    <i
                      style={{ color: "#FF08D7" }}
                      className="fas fa-angle-right mr-2"
                    ></i>
                    <a href="/quiz/csec/economics/">Economics</a>
                  </li>

                  <li>
                    <i
                      style={{ color: "#FF08D7" }}
                      className="fas fa-angle-right mr-2"
                    ></i>
                    <a href="/quiz/csec/mathematics/">Mathematics</a>
                  </li>

                  {/* Subject */}
                  <li>
                    <i
                      style={{ color: "#FF08D7" }}
                      className="fas fa-angle-right mr-2"
                    ></i>
                    <a href="/quiz/csec/english-a/">English A</a>
                    <Badge pill theme="warning" className="ml-2">
                      Incomplete
                    </Badge>
                  </li>

                  {/* Subject */}
                  <li>
                    <i
                      style={{ color: "#FF08D7" }}
                      className="fas fa-angle-right mr-2"
                    ></i>
                    <a onClick={this.onSelect} href="/quiz/csec/english-b/">
                      English B
                    </a>
                    <Badge pill theme="danger" className="ml-3">
                      Not available
                    </Badge>
                  </li>

                  {/* Subject */}
                  <li>
                    <i
                      style={{ color: "#FF08D7" }}
                      className="fas fa-angle-right mr-2"
                    ></i>
                    <a onClick={this.onSelect} href="/quiz/csec/spanish/">
                      Spanish
                    </a>
                    <Badge pill theme="danger" className="ml-3">
                      Not available
                    </Badge>
                  </li>

                  {/* Subject */}
                  <li>
                    <i
                      style={{ color: "#FF08D7" }}
                      className="fas fa-angle-right mr-2"
                    ></i>
                    <a onClick={this.onSelect} href="/quiz/csec/french/">
                      French
                    </a>
                    <Badge pill theme="danger" className="ml-3">
                      Not available
                    </Badge>
                  </li>

                  {/* Subject */}
                  <li>
                    <i
                      style={{ color: "#FF08D7" }}
                      className="fas fa-angle-right mr-2"
                    ></i>
                    <a
                      onClick={this.onSelect}
                      href="/quiz/csec/information-technology/"
                    >
                      Information Technology
                    </a>
                    <Badge pill theme="danger" className="ml-3">
                      Not available
                    </Badge>
                  </li>

                  {/* Subject */}
                  <li>
                    <i
                      style={{ color: "#FF08D7" }}
                      className="fas fa-angle-right mr-2"
                    ></i>
                    <a onClick={this.onSelect} href="/quiz/csec/chemistry/">
                      Chemistry
                    </a>
                    <Badge pill theme="danger" className="ml-3">
                      Not available
                    </Badge>
                  </li>

                  {/* Subject */}
                  <li>
                    <i
                      style={{ color: "#FF08D7" }}
                      className="fas fa-angle-right mr-2"
                    ></i>
                    <a onClick={this.onSelect} href="/quiz/csec/physics/">
                      Physics
                    </a>
                    <Badge pill theme="danger" className="ml-3">
                      Not available
                    </Badge>
                  </li>

                  {/* Subject */}
                  <li>
                    <i
                      style={{ color: "#FF08D7" }}
                      className="fas fa-angle-right mr-2"
                    ></i>
                    <a onClick={this.onSelect} href="/quiz/csec/poa/">
                      Principles of Accounts
                    </a>
                    <Badge pill theme="danger" className="ml-3">
                      Not available
                    </Badge>
                  </li>

                  {/* Subject */}
                  <li>
                    <i
                      style={{ color: "#FF08D7" }}
                      className="fas fa-angle-right mr-2"
                    ></i>
                    <a
                      onClick={this.onSelect}
                      href="/quiz/csec/social-studies/"
                    >
                      Social Studies
                    </a>
                    <Badge pill theme="danger" className="ml-3">
                      Not available
                    </Badge>
                  </li>

                  {/* Subject */}
                  <li>
                    <i
                      style={{ color: "#FF08D7" }}
                      className="fas fa-angle-right mr-2"
                    ></i>
                    <a
                      onClick={this.onSelect}
                      href="/quiz/csec/caribbean-hiistory/"
                    >
                      Caribbean History
                    </a>
                    <Badge pill theme="danger" className="ml-3">
                      Not available
                    </Badge>
                  </li>

                  {/* Subject */}
                  <li>
                    <i
                      style={{ color: "#FF08D7" }}
                      className="fas fa-angle-right mr-2"
                    ></i>
                    <a onClick={this.onSelect} href="/quiz/csec/geography/">
                      Geography
                    </a>
                    <Badge pill theme="danger" className="ml-3">
                      Not available
                    </Badge>
                  </li>

                  {/* Subject */}
                  <li>
                    <i
                      style={{ color: "#FF08D7" }}
                      className="fas fa-angle-right mr-2"
                    ></i>
                    <a onClick={this.onSelect} href="/quiz/csec/hsb/">
                      Human and Social Biology
                    </a>
                    <Badge pill theme="danger" className="ml-3">
                      Not available
                    </Badge>
                  </li>

                  {/* Subject */}
                  <li>
                    <i
                      style={{ color: "#FF08D7" }}
                      className="fas fa-angle-right mr-2"
                    ></i>
                    <a
                      onClick={this.onSelect}
                      href="/quiz/csec/integrated-science/"
                    >
                      Integrated Science
                    </a>
                    <Badge pill theme="danger" className="ml-3">
                      Not available
                    </Badge>
                  </li>

                  {/* Subject */}
                  <li>
                    <i
                      style={{ color: "#FF08D7" }}
                      className="fas fa-angle-right mr-2"
                    ></i>
                    <a
                      onClick={this.onSelect}
                      href="/quiz/csec/official-administration/"
                    >
                      Office Administration
                    </a>
                    <Badge pill theme="danger" className="ml-3">
                      Not available
                    </Badge>
                  </li>
                </ul>
              </Col>
              <Col sm={12} md={4} lg={4}></Col>
            </Row>
          </Container>
        </Layout>
      </>
    )
  }
}

export default Page
