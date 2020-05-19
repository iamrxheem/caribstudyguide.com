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
            title="Online CSEC Information Technology MCQ Quiz"
            description="Our online math test quiz will assist you to improve your Information Technology skills in a fun interactive way. THe following are taken from CXC past paper questions."
            author="cxcstudyguide"
          />
          <Helmet>
            <meta
              name="keywords"
              content="mcq quiz, csec mcq quiz generator, information technology, CAPE exams, mcq, online class , cxc, csec, free cxc past papers, csec study guide, caribbean examination council, cxc guide online, free cxc study notes, cxc exams, csec exams, study, jamaica, caribbean, free cxc past papers, cxc online classes, csec online classes, cxc zoom classes, free cxc lessons, free csec lessons, csec lessons online, cxc Trinidad and tobago, cxc jamaica online classes, cxc jamaica lessons, spanish, cxc barbados, cxc textbooks, free csec, textbooks, free cape, cape, cxc cape, csec, cape, rxheem, Raheem McDonald, iamrxheem, Raheem McDonald UWI, Raheem McDonald Jamaica, CXC study guide, cxc online study guide, cxcstudyguide"
            />
          </Helmet>

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
              <BreadcrumbItem active>IT</BreadcrumbItem>
            </Breadcrumb>

            <h5>{} MCQ Quiz</h5>

            <p>
              Select the correct answer from the options below. Swipe right if
              you need to see the previous question.
            </p>

            <MCQ>
              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="To what generation of programming language do these belong?"
                optionOne="First"
                optionTwo="Second"
                optionThree="Third"
                optionFour="Fourth"
                correctOption="b"
                hasText
                text={
                  <>
                    <span>Sort customer by last name</span>
                    <br />
                    <span>Total income by department</span>
                  </>
                }
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="Which of the following sequence of instructions does the Control Unit perform?"
                optionOne="Decodes, executes and fetches"
                optionTwo="Fetches, decodes and executes"
                optionThree="Executes, decodes and fetches"
                optionFour="Fetches, executes and decodes"
                correctOption="b"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="A diskette is divided into a number of concentric circles called"
                optionOne="sectors"
                optionTwo="cylinders"
                optionThree="tracks"
                optionFour="clusters"
                correctOption="c"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="The storage capacity of a floppy disk is"
                optionOne="1.44 MB"
                optionTwo="1.44 GB"
                optionThree="1440 KB"
                optionFour="1440 MB"
                correctOption="a"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="The four-bit binary representation of the decimal number 8 is"
                optionOne="0001"
                optionTwo="0010"
                optionThree="0100"
                optionFour="1000"
                correctOption="d"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="The barcode reader in a device is used to"
                optionOne="input data"
                optionTwo="output data"
                optionThree="store data"
                optionFour="process data"
                correctOption="a"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="Which of the following devices is NOT used in a point-of-sale terminal?"
                optionOne="Printer"
                optionTwo="Plotter"
                optionThree="Barcode reader"
                optionFour="Electronic cash register"
                correctOption="b"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="In moder personal computers, the CPU speed is measured by"
                optionOne="nanoseconds"
                optionTwo="milliseconds"
                optionThree="MHz"
                optionFour="GHz"
                correctOption="d"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="A wedge-shape slice on a disk is referred to as a"
                optionOne="buffer"
                optionTwo="cylinder"
                optionThree="sector"
                optionFour="track"
                correctOption="c"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="Which of the following primary storage devices can be programmed only once?"
                optionOne="RAM"
                optionTwo="PROM"
                optionThree="EPROM"
                optionFour="EEPROM"
                correctOption="b"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="Which of the following units performs mathematical calculations?"
                optionOne="Control"
                optionTwo="Fetch"
                optionThree="Arithmetic and Logic"
                optionFour="Central Processing"
                correctOption="c"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="Which of the following actions must be taken to get to Record number 50 of 100 records on a Floppy Disk?"
                optionOne="Convert to tape"
                optionTwo="Fast forward to record 100, and then read backward"
                optionThree="First read records 1 through 49"
                optionFour="Go directly to record 50"
                correctOption="c"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="Which of the following is NOT true of Secondary Storage media?"
                optionOne="Pictures and Text can be stored"
                optionTwo="Storage capacity is typically around 1.44MB"
                optionThree="Information can be accessed quicker than from magnetic disks"
                optionFour="Can store large amounts of data"
                correctOption="b"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="Which of the following provides transmission of data in BOTH directions at the same time?"
                optionOne="Half Duplex"
                optionTwo="Full duplex"
                optionThree="Null duplex"
                optionFour="Simplex"
                correctOption="b"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="In the URL https://www.cxcguide.com , cxcguide.com’ stands for the"
                optionOne="Extension"
                optionTwo="Company name"
                optionThree="Domain name"
                optionFour="Internet company"
                correctOption="c"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="The introduction of communication by means of computers has REDUCED the employment opportunities of which of the following groups of workers?"
                optionOne="Messenger and postal workers"
                optionTwo="Analysts and programmers"
                optionThree="Software testers and trainers"
                optionFour="Web masters and developers"
                correctOption="a"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="Transferring data from a remote computer to your computer is referred to as"
                optionOne="uploading"
                optionTwo="browsing"
                optionThree="downloading"
                optionFour="data mining"
                correctOption="c"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="The scrambling of messages at the sending end and unscrambling them at the receiving end is called"
                optionOne="espoinage"
                optionTwo="encryption"
                optionThree="coding"
                optionFour="eavesdropping"
                correctOption="b"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="The acronym ‘HTTP’ stands for"
                optionOne="Hyper Text Transfer Protocol"
                optionTwo="Hyper Text Transmission Protocol"
                optionThree="Higher Text Transmission Protocol"
                optionFour="Higher Text Transfer Protocol"
                correctOption="a"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="Which of the following is used to create 2D and 3D Drawings?"
                optionOne="CAD"
                optionTwo="CAE"
                optionThree="CAM"
                optionFour="CAMM"
                correctOption="a"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="Google is an example of"
                optionOne="an internet browser"
                optionTwo="a web browser"
                optionThree="a search engine"
                optionFour="the world wide web"
                correctOption="c"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="Which of the following is an advantage of using credit or debit cards?"
                optionOne="Only the owner can use the card"
                optionTwo="The owner can spend more money"
                optionThree="The owner may use the card to store additional data"
                optionFour="The owner can carry less cash"
                correctOption="d"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="Which of the following is detected by using a pressure sensor?"
                optionOne="Activity"
                optionTwo="Light"
                optionThree="Warmth"
                optionFour="Weight"
                correctOption="d"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="Which of the following is not included in wireless transmission media?"
                optionOne="coaxile"
                optionTwo="line of sight"
                optionThree="satellite"
                optionFour="infared"
                correctOption="a"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="Which of the following is NEITHER validation NOR a verification check?"
                optionOne="Storage media check"
                optionTwo="Inconsistency check"
                optionThree="Data-type check"
                optionFour="Range check"
                correctOption="a"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="Advantages of Information Processing include"
                optionOne="retraining staff"
                optionTwo="less human intervention"
                optionThree="increasing the amount of equipment needed"
                optionFour="reduction of face-to-face interaction"
                correctOption="d"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="Which type of processing system will use sequential file organisation?"
                optionOne="Batch processing"
                optionTwo="Real-time processing"
                optionThree="Transaction processing"
                optionFour="Online processing"
                correctOption="b"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="The first-generation programming language is called"
                optionOne="assembly"
                optionTwo="BASIC"
                optionThree="machine"
                optionFour="Non-procedural"
                correctOption="c"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="Which word processing feature must John use if he wants to include his company’s logo in the bottom margin of every page of a document?"
                optionOne="Header"
                optionTwo="Footer"
                optionThree="Endnote"
                optionFour="Footnote"
                correctOption="b"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="A site map on a web page shows the"
                optionOne="code of the website"
                optionTwo="contents of each web page"
                optionThree="hyperlinks in the web page"
                optionFour="list of pages on a web site"
                correctOption="d"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="Which of the following is the correct process for inserting a repeated sentence in different locations of a document?"
                optionOne="Copy, cut, paste"
                optionTwo="Cut and paste"
                optionThree="Copy and paste"
                optionFour="Cut and copy"
                correctOption=""
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="Slides can be arranged using"
                optionOne="slide view"
                optionTwo="slide sorter"
                optionThree="slide master"
                optionFour="new slide"
                correctOption="c"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="Which of the following may NOT be included in PowerPoint Presentations?"
                optionOne="Photos"
                optionTwo="Text"
                optionThree="Chat"
                optionFour="Sound"
                correctOption="c"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="Which of the following is the default justification of numbers in spreadsheets?"
                optionOne="Left"
                optionTwo="Full"
                optionThree="Centered"
                optionFour="Right"
                correctOption="d"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="Which of the following is normally used for website- to-website connection?"
                optionOne="Modem"
                optionTwo="Monitor"
                optionThree="Hyperlink"
                optionFour="Hypertext"
                correctOption="c"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="Spreadsheet formulae use"
                optionOne="values, Labels or cell addresses"
                optionTwo="values, mathematical operators or cell addresses"
                optionThree="labels or cell addresses"
                optionFour="values or Cell addresses"
                correctOption="b"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="Which of the following can be used in a spreadsheet to copy the same number down multiple rows in a single column?"
                optionOne="Cursor"
                optionTwo="Cell"
                optionThree="Label"
                optionFour="Fill Handle"
                correctOption="a"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="Which of the following characteristics must two database tables have in order for them to be linked?"
                optionOne="At least one common attribute name"
                optionTwo="Composite keys"
                optionThree="At least two tuples in the table"
                optionFour="The same data in all Tuples"
                correctOption="a"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="You created a spreadsheet with 7 columns and wish to enter the text “WEEKLY REPORT” to appear at the middle of the space used by the 7 columns. Which of the following spreadsheet features will enable this to be done?"
                optionOne="Centre"
                optionTwo="Merging"
                optionThree="Merge and Centre"
                optionFour="Indenting"
                correctOption="c"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="Which spreadsheet function finds and displays the HIGHEST value in a set of values?"
                optionOne="MAX"
                optionTwo="MIN"
                optionThree="RANK"
                optionFour="COUNT"
                correctOption="a"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="The object that is used to produce a list of records that meets a particular criterion is a"
                optionOne="form"
                optionTwo="table"
                optionThree="module"
                optionFour="query"
                correctOption="d"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="The term used to describe text in a spreadsheet that is aligned towards left by default is"
                optionOne="value formulae"
                optionTwo="headings"
                optionThree="labels"
                optionFour="values"
                correctOption="c"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="Which of the following is NOT a stage/step in problem-solving?"
                optionOne="Sell the program"
                optionTwo="Test the program"
                optionThree="Define the problem"
                optionFour="Evaluate solutions"
                correctOption="a"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="What Pascal statement is used to output results in a program?"
                optionOne="Read"
                optionTwo="Write"
                optionThree="Start"
                optionFour="Print"
                correctOption="b"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="In the programming language Pascal, which of the following is NOT a standard data type?"
                optionOne="Floating Point"
                optionTwo="Char"
                optionThree="Boolean"
                optionFour="Integer"
                correctOption="a"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="During the development of a program, writing an algorithm is a step towards"
                optionOne="planning the solution"
                optionTwo="defining the problem"
                optionThree="debugging the Program"
                optionFour="maintaining the Program"
                correctOption="a"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="Which of the following is a valid integer constant?"
                optionOne="0.37"
                optionTwo="37.0"
                optionThree="370"
                optionFour="3700"
                correctOption="b"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="In preparing a computer program , the programmer should FIRST"
                optionOne="plan the solution"
                optionTwo="define the problem"
                optionThree="code the progress"
                optionFour="prepare program documentation"
                correctOption="b"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="The Pascal code var x,y would generate an error. The term used to describe this type of error is"
                optionOne="run time error"
                optionTwo="execution Error"
                optionThree="logical error"
                optionFour="syntax error"
                correctOption="a"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="Which of the following is not a third generation language?"
                optionOne="Assembly"
                optionTwo="COBOL"
                optionThree="C"
                optionFour="PASCAL"
                correctOption="a"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="Which of the following is the Pascal code used to declare an Array WORD with 20 letters?"
                optionOne="VAR LIST: ARRAY [20] of char;"
                optionTwo="WORD : ARRAY [1..20] of char;"
                optionThree="VAR WORD : ARRAY [1 to 20] of char;"
                optionFour="VAR WORD: ARRAY [1..20] of char;"
                correctOption="d"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="compiler is a program that converts the"
                optionOne="source code to assembly code"
                optionTwo="source code to machine code"
                optionThree="program to output"
                optionFour="Program to object code one instruction at a time"
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
