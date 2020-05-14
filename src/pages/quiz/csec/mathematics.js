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
import { v4 as uuidv4 } from "uuid"
import { Helmet } from "react-helmet"
import { Zoom, Bounce, Fade, Flip, Rotate, Roll } from "react-reveal"
import Img from "react-image"
import axios from "axios"
import Swal from "sweetalert2"
import CSECLayout from "../../../layouts/CSECLayout"

import Layout from "../../../components/layout"
import SEO from "../../../components/seo"
import SubjectPreview from "../../../common/subjectPreview"
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

  componentWillMount() {
    this.getQuestions()
  }

  async getQuestions() {
    await axios
      .get("https://api.npoint.io/27d9083118b83c0be4d1")
      .then(function(response) {
        data = response.data
      })
      .catch(function(error) {
        // handle error
        alert(error)
      })
  }

  render() {
    return (
      <>
        <Layout>
          <SEO
            title="Online CSEC Mathematics MCQ Quiz"
            description="Our online math test quiz will assist you to improve your maths kills in a fun interactive way. THe following are taken from past paper questions."
            author="cxcstudyguide"
          />
          <Helmet>
            <meta
              name="keywords"
              content="mcq quiz, csec mcq quiz generator, mathematics, social studies, french, CAPE exams, mcq, online class , cxc, csec, free cxc past papers, csec study guide, caribbean examination council, cxc guide online, free cxc study notes, cxc exams, csec exams, study, jamaica, caribbean, free cxc past papers, cxc online classes, csec online classes, cxc zoom classes, free cxc lessons, free csec lessons, csec lessons online, cxc Trinidad and tobago, cxc jamaica online classes, cxc jamaica lessons, cxc barbados, cxc textbooks, free csec, textbooks, free cape, cape, cxc cape, csec, cape, rxheem, Raheem McDonald, iamrxheem, Raheem McDonald UWI, Raheem McDonald Jamaica, CXC study guide, cxc online study guide, cxcstudyguide"
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
              <BreadcrumbItem active>Mathematics</BreadcrumbItem>
            </Breadcrumb>

            <h5>Mathematics MCQ Quiz</h5>

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
                question="What is the sum of 1³ + 3²?"
                optionOne="8"
                optionTwo="10"
                optionThree="11"
                optionFour="16"
                correctOption="b"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="Tom bought a pen for $60. He sold it to gain 20% profit on his cost. How much money did he gain?"
                optionOne="$12"
                optionTwo="$40"
                optionThree="$72"
                optionFour="$80"
                correctOption="a"
                hasImg={false}
                hasAudio={false}
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="Tom bought a pen for $60. He sold it to gain 20% profit on his cost. How much money did he gain?"
                optionOne="$12"
                optionTwo="$40"
                optionThree="$72"
                optionFour="$80"
                correctOption="a"
                hasImg={false}
                hasAudio={false}
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="Tom bought a pen for $60. He sold it to gain 20% profit on his cost. How much money did he gain?"
                optionOne="$12"
                optionTwo="$40"
                optionThree="$72"
                optionFour="$80"
                correctOption="a"
                hasImg={false}
                hasAudio={false}
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="Tom bought a pen for $60. He sold it to gain 20% profit on his cost. How much money did he gain?"
                optionOne="$12"
                optionTwo="$40"
                optionThree="$72"
                optionFour="$80"
                correctOption="a"
                hasImg={false}
                hasAudio={false}
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="If x + 2 * 7 = 18, the value of x is"
                optionOne="4"
                optionTwo="9"
                optionThree="13"
                optionFour="32"
                correctOption="a"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="USD$1.00 = $JMD$90.00. What is the value of USD$5.00 in Jamaican dollars?"
                optionOne="$18.00"
                optionTwo="$85.00"
                optionThree="$95.00"
                optionFour="$450.00"
                correctOption="d"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="5% of $40"
                optionOne="$2.00"
                optionTwo="$8.00"
                optionThree="$20.00"
                optionFour="$35.00"
                correctOption="a"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="You are reading a book and are at page number IX. What is the number of the page six pages after?"
                optionOne="V"
                optionTwo="XIV"
                optionThree="XV"
                optionFour="XVI"
                correctOption="c"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="49 * 51 has the same value as"
                optionOne="(49 * 50) + 1"
                optionTwo="(49 * 50) - (49 * 1)"
                optionThree="(49 * 50) + (49 * 1)"
                optionFour="(49 * 50)(49 * 1)"
                correctOption="c"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="If 5n is an even number, which of the following is an odd number?"
                optionOne="5n + 2"
                optionTwo="5n - 2"
                optionThree="5(n +1)"
                optionFour="5(n + n)"
                correctOption="c"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="What percentage of 40 is 12?"
                optionOne="5"
                optionTwo="20"
                optionThree="30"
                optionFour="300"
                correctOption="c"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="Which of the following is the largest amount?"
                optionOne="5% of 500"
                optionTwo="10% of 200"
                optionThree="15% of 150"
                optionFour="20% of 50"
                correctOption="a"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="A sum of money is shared between between Ken and Rose in the the ratio 2:3. If Rose receives $90.00, find the sum of money that was shared."
                optionOne="$54.00"
                optionTwo="$60.00"
                optionThree="$135.00"
                optionFour="$150.00"
                correctOption="d"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="When expressed to the nearest hundred becomes 458 becomes *"
                optionOne="400"
                optionTwo="450"
                optionThree="460"
                optionFour="500"
                correctOption="d"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="What is the missing number in the sequence 2, 5, 8, __, 14"
                optionOne="10"
                optionTwo="11"
                optionThree="12"
                optionFour="13"
                correctOption="b"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="If x is an odd number, which of the following is also odd?"
                optionOne="x + 1"
                optionTwo="x + 2"
                optionThree="2x"
                optionFour="x / 2"
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
