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
            title="Online CSEC {} MCQ Quiz"
            description="Our online math test quiz will assist you to improve your {} skills in a fun interactive way. THe following are taken from CXC past paper questions."
            author="cxcstudyguide"
          />
          <Helmet>
            <meta
              name="keywords"
              content="{}, mcq quiz, csec mcq quiz generator, CAPE exams, mcq, online class , cxc, csec, free cxc past papers, csec study guide, caribbean examination council, cxc guide online, free cxc study notes, cxc exams, csec exams, study, jamaica, caribbean, free cxc past papers, cxc online classes, csec online classes, cxc zoom classes, free cxc lessons, free csec lessons, csec lessons online, cxc Trinidad and tobago, cxc jamaica online classes, cxc jamaica lessons, spanish, cxc barbados, cxc textbooks, free csec, textbooks, free cape, cape, cxc cape, csec, cape, rxheem, Raheem McDonald, iamrxheem, Raheem McDonald UWI, Raheem McDonald Jamaica, CXC study guide, cxc online study guide, cxcstudyguide"
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
              <BreadcrumbItem active>{}</BreadcrumbItem>
            </Breadcrumb>

            <h5>{} MCQ Quiz</h5>

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
                question="What is the meaning of DISCOMBOBULATED?"
                optionOne="shy"
                optionTwo="weird out"
                optionThree="confused and disconcerted."
                optionFour="enlighten"
                correctOption="c"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="The opposite meaning of the word meticulous"
                optionOne="Scant"
                optionTwo="Careful"
                optionThree="Detailed"
                optionFour="Cautious"
                correctOption="a"
                note="Hint: can't explains"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="The opposite meaning of the word meticulous "
                optionOne="Scant"
                optionTwo="Careful"
                optionThree="Detailed"
                optionFour="Cautious"
                correctOption="a"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="Select the correctly spelt word: The concellor gave me ............."
                optionOne="Advse"
                optionTwo="Advice"
                optionThree="Advise"
                optionFour="Advese"
                correctOption="b"
                note="B is spelt correctly"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="In which one of the sentences below is the question sign use properly"
                optionOne="I love you?"
                optionTwo="Talk to me?"
                optionThree="Do you love me?"
                optionFour="I hate you?"
                correctOption="c"
                note="'C' is the correct answer because it's asking a question"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="Please select the correct punctuation"
                optionOne="A text book can be a 'wall' between teacher and class"
                optionTwo="A text book can be a wall 'between' teacher and class"
                optionThree="A text book can be a wall between teacher and 'class'"
                optionFour="between 'book/ can be a wall between teacher and class"
                correctOption="a"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question={
                  <>
                    <p>
                      Choose the suggested answer which is nearest in meaning{" "}
                      <b>(SYNONYMS)</b> to the underlined word.
                    </p>

                    <p>
                      We found it hard to put up with his{" "}
                      <span style={{ textDecoration: "underline" }}>
                        belligerent
                      </span>{" "}
                      attitude.
                    </p>
                  </>
                }
                optionOne="prying"
                optionTwo="destructive"
                optionThree="uncharitable"
                optionFour="quarrelsome"
                correctOption="d"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question={
                  <>
                    <p>
                      Choose the suggested answer which is nearest in meaning{" "}
                      <b>(SYNONYMS)</b> to the underlined word.
                    </p>

                    <p>
                      Mr. Brown did everything to{" "}
                      <span style={{ textDecoration: "underline" }}>
                        thwart
                      </span>{" "}
                      the efforts of the relatives.
                    </p>
                  </>
                }
                optionOne="abuse"
                optionTwo="obstruct"
                optionThree="change"
                optionFour="threaten"
                correctOption="b"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question={
                  <>
                    <p>
                      Choose the suggested answer which is nearest in meaning{" "}
                      <b>(SYNONYMS)</b> to the underlined word.
                    </p>

                    <p>
                      The children were scared by the{" "}
                      <span style={{ textDecoration: "underline" }}>
                        grotesque
                      </span>{" "}
                      designs on the costumes.
                    </p>
                  </>
                }
                optionOne="hideous"
                optionTwo="elaborate"
                optionThree="elaborate"
                optionFour="intricate"
                correctOption="a"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question={
                  <>
                    <p>
                      Choose the suggested answer which is nearest in meaning{" "}
                      <b>(SYNONYMS)</b> to the underlined word.
                    </p>

                    <p>
                      During the rainstorm yesterday,{" "}
                      <span style={{ textDecoration: "underline" }}>
                        incessantly
                      </span>{" "}
                      across the island.
                    </p>
                  </>
                }
                optionOne="noisily"
                optionTwo="furiously"
                optionThree="constantly"
                optionFour="occasionally"
                correctOption="c"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question={
                  <>
                    <p>
                      Choose the suggested answer which is nearest in meaning{" "}
                      <b>(SYNONYMS)</b> to the underlined word.
                    </p>

                    <p>
                      During the final stages of the trial, a new witness was
                      called to{" "}
                      <span style={{ textDecoration: "underline" }}>
                        corroborate
                      </span>{" "}
                      the testimony of the accused.
                    </p>
                  </>
                }
                optionOne="clarify"
                optionTwo="confirm"
                optionThree="conclude"
                optionFour="d"
                correctOption="b"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question={
                  <>
                    <p>
                      Choose the suggested answer which is nearest in meaning{" "}
                      <b>(SYNONYMS)</b> to the underlined word.
                    </p>

                    <p>
                      In some advertisements for jobs, relevant experience is
                      asked for.{" "}
                      <span style={{ textDecoration: "underline" }}></span>{" "}
                    </p>
                  </>
                }
                optionOne="suitable"
                optionTwo="lengthy"
                optionThree="technical"
                optionFour="satisfactory"
                correctOption="a"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question={
                  <>
                    <p>
                      Choose the suggested answer which is nearest in meaning{" "}
                      <b>(SYNONYMS)</b> to the underlined word.
                    </p>

                    <p>
                      After we failed to win, we left with our opponents’{" "}
                      <span style={{ textDecoration: "underline" }}>
                        taunting
                      </span>{" "}
                      voice following us to school.
                    </p>
                  </>
                }
                optionOne="annoying"
                optionTwo="screaming"
                optionThree="laughing"
                optionFour="mocking"
                correctOption="d"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question={
                  <>
                    <p>
                      Choose the suggested answer which is nearest in meaning{" "}
                      <b>(SYNONYMS)</b> to the underlined word.
                    </p>

                    <p>
                      In his speech, the psychologist gave{" "}
                      <span style={{ textDecoration: "underline" }}>tacit</span>{" "}
                      approval to corporal punishment.
                    </p>
                  </>
                }
                optionOne="direct"
                optionTwo="cautious"
                optionThree="clear"
                optionFour="unspoken"
                correctOption="d"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question={
                  <>
                    <p>
                      Choose the suggested answer which is nearest in meaning{" "}
                      <b>(SYNONYMS)</b> to the underlined word.
                    </p>

                    <p>
                      In times of{" "}
                      <span style={{ textDecoration: "underline" }}>
                        calamity
                      </span>{" "}
                      one must strive to remain calm and rational.
                    </p>
                  </>
                }
                optionOne="fortune"
                optionTwo="disaster"
                optionThree="conflict"
                optionFour="attack"
                correctOption="b"
              />
            </MCQ>
          </Container>
        </Layout>
      </>
    )
  }
}

export default Page
