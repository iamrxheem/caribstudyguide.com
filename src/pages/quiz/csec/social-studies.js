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
import { Helmet } from "react-helmet"
import { Zoom, Bounce, Fade, Flip, Rotate, Roll } from "react-reveal"
import Img from "react-image"
import axios from "axios"
import Swal from "sweetalert2"
import CSECLayout from "../../../layouts/CSECLayout"
import Layout from "../../../components/layout"
import SEO from "../../../components/seo"
import SubjectPreview from "../../../common/subjectPreview"
import { v4 as uuidv4 } from "uuid"

import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect"
import MCQ from "../../../common/MCQ"
import MCQItem from "../../../common/MCQItem"

let data = {}

class Page extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      questions: {}
    }
  }

  render() {
    return (
      <>
        <Layout>
          <SEO
            title="Online CSEC Social Studies MCQ Quiz"
            description="Our online math test quiz will assist you to improve your Social Studies skills in a fun interactive way. THe following are taken from CXC past paper questions."
            author="cxcstudyguide"
          />
          <Helmet>
            <meta
              name="keywords"
              content="social studies, mcq quiz, csec mcq quiz generator, CAPE exams, mcq, online class , cxc, csec, free cxc past papers, csec study guide, caribbean examination council, cxc guide online, free cxc study notes, cxc exams, csec exams, study, jamaica, caribbean, free cxc past papers, cxc online classes, csec online classes, cxc zoom classes, free cxc lessons, free csec lessons, csec lessons online, cxc Trinidad and tobago, cxc jamaica online classes, cxc jamaica lessons, spanish, cxc barbados, cxc textbooks, free csec, textbooks, free cape, cape, cxc cape, csec, cape, rxheem, Raheem McDonald, iamrxheem, Raheem McDonald UWI, Raheem McDonald Jamaica, CXC study guide, cxc online study guide, cxcstudyguide"
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
              <BreadcrumbItem>
                <a href="/quiz/csec/">CSEC</a>
              </BreadcrumbItem>
              <BreadcrumbItem active>Social Studies</BreadcrumbItem>
            </Breadcrumb>

            <h5>Social Studies MCQ Quiz</h5>

            <p>
              Select the correct answer from the options below. Swipe right if
              you need to see the previous question.
            </p>

            <br />
            <MCQ>
              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="Which of the following groups would be MAINLY responsible for the socialization of the child in the Caribbean nuclear family?"
                optionOne=""
                optionTwo=""
                optionThree=""
                optionFour=""
                correctOption=""
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question=""
                optionOne=""
                optionTwo=""
                optionThree=""
                optionFour=""
                correctOption=""
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question=""
                optionOne=""
                optionTwo=""
                optionThree=""
                optionFour=""
                correctOption=""
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question=""
                optionOne=""
                optionTwo=""
                optionThree=""
                optionFour=""
                correctOption=""
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question=""
                optionOne=""
                optionTwo=""
                optionThree=""
                optionFour=""
                correctOption=""
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question=""
                optionOne=""
                optionTwo=""
                optionThree=""
                optionFour=""
                correctOption=""
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question=""
                optionOne=""
                optionTwo=""
                optionThree=""
                optionFour=""
                correctOption=""
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question=""
                optionOne=""
                optionTwo=""
                optionThree=""
                optionFour=""
                correctOption=""
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question=""
                optionOne=""
                optionTwo=""
                optionThree=""
                optionFour=""
                correctOption=""
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question=""
                optionOne=""
                optionTwo=""
                optionThree=""
                optionFour=""
                correctOption=""
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question=""
                optionOne=""
                optionTwo=""
                optionThree=""
                optionFour=""
                correctOption=""
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question=""
                optionOne=""
                optionTwo=""
                optionThree=""
                optionFour=""
                correctOption=""
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question=""
                optionOne=""
                optionTwo=""
                optionThree=""
                optionFour=""
                correctOption=""
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question=""
                optionOne=""
                optionTwo=""
                optionThree=""
                optionFour=""
                correctOption=""
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question=""
                optionOne=""
                optionTwo=""
                optionThree=""
                optionFour=""
                correctOption=""
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question=""
                optionOne=""
                optionTwo=""
                optionThree=""
                optionFour=""
                correctOption=""
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question=""
                optionOne=""
                optionTwo=""
                optionThree=""
                optionFour=""
                correctOption=""
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question=""
                optionOne=""
                optionTwo=""
                optionThree=""
                optionFour=""
                correctOption=""
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question=""
                optionOne=""
                optionTwo=""
                optionThree=""
                optionFour=""
                correctOption=""
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question=""
                optionOne=""
                optionTwo=""
                optionThree=""
                optionFour=""
                correctOption=""
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question=""
                optionOne=""
                optionTwo=""
                optionThree=""
                optionFour=""
                correctOption=""
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question=""
                optionOne=""
                optionTwo=""
                optionThree=""
                optionFour=""
                correctOption=""
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question=""
                optionOne=""
                optionTwo=""
                optionThree=""
                optionFour=""
                correctOption=""
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question=""
                optionOne=""
                optionTwo=""
                optionThree=""
                optionFour=""
                correctOption=""
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question=""
                optionOne=""
                optionTwo=""
                optionThree=""
                optionFour=""
                correctOption=""
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question=""
                optionOne=""
                optionTwo=""
                optionThree=""
                optionFour=""
                correctOption=""
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question=""
                optionOne=""
                optionTwo=""
                optionThree=""
                optionFour=""
                correctOption=""
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question=""
                optionOne=""
                optionTwo=""
                optionThree=""
                optionFour=""
                correctOption=""
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question=""
                optionOne=""
                optionTwo=""
                optionThree=""
                optionFour=""
                correctOption=""
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question=""
                optionOne=""
                optionTwo=""
                optionThree=""
                optionFour=""
                correctOption=""
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question=""
                optionOne=""
                optionTwo=""
                optionThree=""
                optionFour=""
                correctOption=""
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question=""
                optionOne=""
                optionTwo=""
                optionThree=""
                optionFour=""
                correctOption=""
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question=""
                optionOne=""
                optionTwo=""
                optionThree=""
                optionFour=""
                correctOption=""
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question=""
                optionOne=""
                optionTwo=""
                optionThree=""
                optionFour=""
                correctOption=""
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question=""
                optionOne=""
                optionTwo=""
                optionThree=""
                optionFour=""
                correctOption=""
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question=""
                optionOne=""
                optionTwo=""
                optionThree=""
                optionFour=""
                correctOption=""
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question=""
                optionOne=""
                optionTwo=""
                optionThree=""
                optionFour=""
                correctOption=""
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question=""
                optionOne=""
                optionTwo=""
                optionThree=""
                optionFour=""
                correctOption=""
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question=""
                optionOne=""
                optionTwo=""
                optionThree=""
                optionFour=""
                correctOption=""
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question=""
                optionOne=""
                optionTwo=""
                optionThree=""
                optionFour=""
                correctOption=""
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question=""
                optionOne=""
                optionTwo=""
                optionThree=""
                optionFour=""
                correctOption=""
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question=""
                optionOne=""
                optionTwo=""
                optionThree=""
                optionFour=""
                correctOption=""
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question=""
                optionOne=""
                optionTwo=""
                optionThree=""
                optionFour=""
                correctOption=""
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question=""
                optionOne=""
                optionTwo=""
                optionThree=""
                optionFour=""
                correctOption=""
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question=""
                optionOne=""
                optionTwo=""
                optionThree=""
                optionFour=""
                correctOption=""
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question=""
                optionOne=""
                optionTwo=""
                optionThree=""
                optionFour=""
                correctOption=""
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question=""
                optionOne=""
                optionTwo=""
                optionThree=""
                optionFour=""
                correctOption=""
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question=""
                optionOne=""
                optionTwo=""
                optionThree=""
                optionFour=""
                correctOption=""
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question=""
                optionOne=""
                optionTwo=""
                optionThree=""
                optionFour=""
                correctOption=""
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question=""
                optionOne=""
                optionTwo=""
                optionThree=""
                optionFour=""
                correctOption=""
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question=""
                optionOne=""
                optionTwo=""
                optionThree=""
                optionFour=""
                correctOption=""
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question=""
                optionOne=""
                optionTwo=""
                optionThree=""
                optionFour=""
                correctOption=""
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question=""
                optionOne=""
                optionTwo=""
                optionThree=""
                optionFour=""
                correctOption=""
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question=""
                optionOne=""
                optionTwo=""
                optionThree=""
                optionFour=""
                correctOption=""
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question=""
                optionOne=""
                optionTwo=""
                optionThree=""
                optionFour=""
                correctOption=""
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question=""
                optionOne=""
                optionTwo=""
                optionThree=""
                optionFour=""
                correctOption=""
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question=""
                optionOne=""
                optionTwo=""
                optionThree=""
                optionFour=""
                correctOption=""
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question=""
                optionOne=""
                optionTwo=""
                optionThree=""
                optionFour=""
                correctOption=""
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question=""
                optionOne=""
                optionTwo=""
                optionThree=""
                optionFour=""
                correctOption=""
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question=""
                optionOne=""
                optionTwo=""
                optionThree=""
                optionFour=""
                correctOption=""
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question=""
                optionOne=""
                optionTwo=""
                optionThree=""
                optionFour=""
                correctOption=""
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question=""
                optionOne=""
                optionTwo=""
                optionThree=""
                optionFour=""
                correctOption=""
              />
            </MCQ>
          </Container>
        </Layout>
      </>
    )
  }
}

export default Page
