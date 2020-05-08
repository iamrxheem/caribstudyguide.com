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
                <a href="/study/">Study</a>
              </BreadcrumbItem>
              <BreadcrumbItem active>CSEC</BreadcrumbItem>
            </Breadcrumb>
          </Container>

          <Container>
            <MobileView>
              <br />
              <Row>
                <Col sm={12} md={6} lg={4}>
                  {/* Biology */}
                  <SubjectPreview
                    imgSrc="https://leverageedu.com/blog/wp-content/uploads/2019/09/Biology.png"
                    title="Biology"
                    description="Biology is the study of living organism. Our guides are designed to teach students Biology from scratch."
                    start="/study/csec/biology/"
                    resources=""
                  />
                </Col>

                <Col sm={12} md={6} lg={4}>
                  <SubjectPreview
                    imgSrc="https://elearningindustry.com/wp-content/uploads/2017/04/elearning-writing-3-courses-to-help-you-improve-your-writing-skills.png"
                    title="English A"
                    description="English Language is essential -- and madatory too. Let's explore English through fun lessons and exercises."
                    start="/study/csec/english-a/"
                    resources=""
                  />
                </Col>

                <Col sm={12} md={6} lg={4}>
                  {/* Mathematics */}
                  <SubjectPreview
                    imgSrc="https://www.stem.org.uk/sites/default/files/blog-images/A%20level%20mathematics.jpg"
                    title="Mathematics"
                    description="Mathematics as a problem solving tool - and the syllabus is designed to teach students use it in their everyday life."
                    start="/study/csec/mathematics/"
                    resources=""
                  />
                </Col>

                <Col sm={12} md={6} lg={4}>
                  {/* Information Technology */}
                  <SubjectPreview
                    imgSrc="https://www.cbronline.com/wp-content/uploads/2017/01/code-770x513.jpg"
                    title="Information Technology"
                    description="We live in a technological age and now more than ever students need to be computer literate. Here we explore all the relevant concepts for your exam."
                    start="/study/csec/information-technology/"
                    resources=""
                  />
                </Col>

                <Col sm={12} md={6} lg={4}>
                  {/* English Literature */}
                  <SubjectPreview
                    imgSrc="https://pregonesprtt.org/wp-content/uploads/2019/05/Tempest2019.jpg"
                    title="English B"
                    description="'To be, or not to be: that is the question'. - William Shakespeare. In our lessons we take a look at poems and literaure in anticipation for your exam."
                    start="/study/csec/english-b/"
                    resources=""
                  />
                </Col>

                <Col sm={12} md={6} lg={4}>
                  {/* Chemistry */}
                  <SubjectPreview
                    imgSrc="https://jobs.newscientist.com/getasset/c40a5488-11be-43b0-843f-a2e6ef9f0612/"
                    title="Chemistry"
                    description=""
                    start="/study/csec/chemistry/"
                    resources=""
                  />
                </Col>

                <Col sm={12} md={6} lg={4}>
                  <SubjectPreview
                    imgSrc="https://bs-uploads.toptal.io/blackfish-uploads/blog/article/content/cover_image_file/cover_image/17947/cover-VideoGamePhysics-Luke_Newsletter-d65c81ebd91933ccb650011f88f9ee74.png"
                    title="Physics"
                    description=""
                    start="/study/csec/physics/"
                    resources=""
                  />
                </Col>

                <Col sm={12} md={6} lg={4}>
                  {/* Spanish */}
                  <SubjectPreview
                    imgSrc="https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Flag_of_Spain.svg/1200px-Flag_of_Spain.svg.png"
                    title="Spanish"
                    description="Learn Spanish from scratch with our guide crafted by experts in Modern languages."
                    start="/study/csec/spanish/"
                    resources=""
                  />
                </Col>

                <Col sm={12} md={6} lg={4}>
                  {/* French */}
                  <SubjectPreview
                    imgSrc="https://www.brainscape.com/blog/wp-content/uploads/2015/06/French.jpg"
                    title="French"
                    description=""
                    start="/study/csec/french/"
                    resources=""
                  />
                </Col>

                <Col sm={12} md={6} lg={4}>
                  {/* Principles of Business */}
                  <SubjectPreview
                    imgSrc="https://d3q6qq2zt8nhwv.cloudfront.net/course/d9957ba6fb5e423eb2fce46b16f52452.jpg"
                    title="Principles of Business"
                    description=""
                    start="/study/csec/pob/"
                    resources=""
                  />
                </Col>

                <Col sm={12} md={6} lg={4}>
                  {/* Principles of Accounts */}
                  <SubjectPreview
                    imgSrc="https://www.thebalance.com/thmb/EoMD_9GenTcyaqB23M9HefwgEwI=/1500x1000/filters:fill(auto,1)/best-online-checking-accounts-4158695-FINAL-6788eea628ae4902a43ec3472ca7b7d0.png"
                    title="Principles of Accounts"
                    description=""
                    start="/study/csec/poa/"
                    resources=""
                  />
                </Col>

                <Col sm={12} md={6} lg={4}>
                  {/* Social Studies */}
                  <SubjectPreview
                    imgSrc="https://images.theconversation.com/files/304831/original/file-20191202-67002-106wryj.jpg?ixlib=rb-1.1.0&rect=0%2C0%2C4500%2C3132&q=45&auto=format&w=496&fit=clip"
                    title="Social Studies"
                    description=""
                    start="/study/csec/social-studies/"
                    resources=""
                  />
                </Col>

                <Col sm={12} md={6} lg={4}>
                  {/* Caribbean History */}
                  <SubjectPreview
                    imgSrc="https://images.liverpoolmuseums.org.uk/styles/focal_point_2_1/public/2020-01/slavery-in-the-caribbean-banner.jpg"
                    title="Caribbean History"
                    description="Let's taka a trip back in history through fun lessons, engaging activities and through regular exercises."
                    start="/study/csec/caribbean-history/"
                    resources=""
                  />
                </Col>

                <Col sm={12} md={6} lg={4}>
                  {/* Geography */}
                  <SubjectPreview
                    imgSrc="https://study.com/cimages/videopreview/videopreview-full/p3c2j8y73a.jpg"
                    title="Geography"
                    description=""
                    start="/study/csec/geography/"
                    resources=""
                  />
                </Col>

                <Col sm={12} md={6} lg={4}>
                  {/* Human and Social Biology */}
                  <SubjectPreview
                    imgSrc="https://www.larberthigh.com/_images/17239_s.jpg"
                    title="Human and Social Biology"
                    description=""
                    start="/study/csec/hsb/"
                    resources=""
                  />
                </Col>

                <Col sm={12} md={6} lg={4}>
                  {/* Integrated Science */}
                  <SubjectPreview
                    imgSrc="https://www.sciencemag.org/sites/default/files/styles/article_main_large/public/WL_HoursH.jpg?itok=6G_HN_Td&c=d5c762b61c41d41483f1c3d7e4a23004"
                    title="Integrated Science"
                    description=""
                    start="/study/csec/integrated-science/"
                    resources=""
                  />
                </Col>

                <Col sm={12} md={6} lg={4}>
                  {/* Office Administration */}
                  <SubjectPreview
                    imgSrc="https://wingateave.com.au/wp-content/uploads/2019/06/vector-inside-office-illustration.jpg"
                    title="Office Admistration"
                    description=""
                    start="/study/csec/office-administration/"
                    resources=""
                  />
                </Col>

                <Col sm={12} md={6} lg={4}>
                  {/* Additional Mathematics */}
                  <SubjectPreview
                    imgSrc="https://d2u4q3iydaupsp.cloudfront.net/VfREbXqcAK2u0u7RKuy20QUXIGfOwFU2YRR4QCFSItKzcXg8YNDoPEq0etCErg5Xd1uHLfUAfSGaTPR5t9XqYWgbeyQvCqOMe7he4BfFQNFG5ivNQODf5X95liwSeEYh"
                    title="Additional Mathematics"
                    description=""
                    start="/study/csec/additional-mathematics/"
                    resources=""
                  />
                </Col>

                <Col sm={12} md={6} lg={4}>
                  {/* Physical Education */}
                  <SubjectPreview
                    imgSrc="https://markparkinson.files.wordpress.com/2019/11/physical-education.jpg?w=584"
                    title="Physical Education"
                    description=""
                    start="/study/csec/physical-education/"
                    resources=""
                  />
                </Col>

                <Col sm={12} md={6} lg={4}>
                  {/* Visual Arts */}
                  <SubjectPreview
                    imgSrc="https://mymodernmet.com/wp/wp-content/uploads/2019/03/elements-of-art-6.jpg"
                    title="Visual Arts"
                    description=""
                    start="/study/csec/visual-arts/"
                    resources=""
                  />
                </Col>
              </Row>
            </MobileView>

            {/* Browser view */}
            <BrowserView>
              <ul className="bulma-tabs">
                {/* English Language */}

                <li className="mr-4">
                  <SubjectPreview
                    imgSrc="https://elearningindustry.com/wp-content/uploads/2017/04/elearning-writing-3-courses-to-help-you-improve-your-writing-skills.png"
                    title="English A"
                    description="English Language is essential -- and madatory too. Let's explore English through fun lessons and exercises."
                    start="/study/csec/english-a/"
                    resources=""
                  />
                </li>

                <li className="mr-4">
                  {/* Mathematics */}
                  <SubjectPreview
                    imgSrc="https://www.stem.org.uk/sites/default/files/blog-images/A%20level%20mathematics.jpg"
                    title="Mathematics"
                    description="Mathematics as a problem solving tool - and the syllabus is designed to teach students use it in their everyday life."
                    start="/study/csec/mathematics/"
                    resources=""
                  />
                </li>

                <li className="mr-4">
                  {/* English Literature */}
                  <SubjectPreview
                    imgSrc="https://pregonesprtt.org/wp-content/uploads/2019/05/Tempest2019.jpg"
                    title="English B"
                    description="'To be, or not to be: that is the question'. - William Shakespeare. In our lessons we take a look at poems and literaure in anticipation for your exam."
                    start="/study/csec/english-b/"
                    resources=""
                  />
                </li>

                <li className="mr-4">
                  {/* Information Technology */}
                  <SubjectPreview
                    imgSrc="https://www.cbronline.com/wp-content/uploads/2017/01/code-770x513.jpg"
                    title="Information Technology"
                    description="We live in a technological age and now more than ever students need to be computer literate. Here we explore all the relevant concepts for your exam."
                    start="/study/csec/information-technology/"
                    resources=""
                  />
                </li>

                <li className="mr-4">
                  {/* Biology */}
                  <SubjectPreview
                    imgSrc="https://leverageedu.com/blog/wp-content/uploads/2019/09/Biology.png"
                    title="Biology"
                    description="Biology is the study of living organism. Our guides are designed to teach students Biology from scratch."
                    start="/study/csec/biology/"
                    resources=""
                  />
                </li>

                <li className="mr-4">
                  {/* Chemistry */}
                  <SubjectPreview
                    imgSrc="https://jobs.newscientist.com/getasset/c40a5488-11be-43b0-843f-a2e6ef9f0612/"
                    title="Chemistry"
                    description=""
                    start="/study/csec/chemistry/"
                    resources=""
                  />
                </li>

                <li className="mr-4">
                  {/* Physics */}
                  <SubjectPreview
                    imgSrc="https://bs-uploads.toptal.io/blackfish-uploads/blog/article/content/cover_image_file/cover_image/17947/cover-VideoGamePhysics-Luke_Newsletter-d65c81ebd91933ccb650011f88f9ee74.png"
                    title="Physics"
                    description=""
                    start="/study/csec/physics/"
                    resources=""
                  />
                </li>

                <li className="mr-4">
                  {/* Spanish */}
                  <SubjectPreview
                    imgSrc="https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Flag_of_Spain.svg/1200px-Flag_of_Spain.svg.png"
                    title="Spanish"
                    description="Learn Spanish from scratch with our guide crafted by experts in Modern languages."
                    start="/study/csec/spanish/"
                    resources=""
                  />
                </li>

                <li className="mr-4">
                  {/* French */}
                  <SubjectPreview
                    imgSrc="https://www.brainscape.com/blog/wp-content/uploads/2015/06/French.jpg"
                    title="French"
                    description=""
                    start="/study/csec/french/"
                    resources=""
                  />
                </li>

                <li className="mr-4">
                  {/* Principles of Business */}
                  <SubjectPreview
                    imgSrc="https://d3q6qq2zt8nhwv.cloudfront.net/course/d9957ba6fb5e423eb2fce46b16f52452.jpg"
                    title="Principles of Business"
                    description=""
                    start="/study/csec/pob/"
                    resources=""
                  />
                </li>

                <li className="mr-4">
                  {/* Principles of Accounts */}
                  <SubjectPreview
                    imgSrc="https://www.thebalance.com/thmb/EoMD_9GenTcyaqB23M9HefwgEwI=/1500x1000/filters:fill(auto,1)/best-online-checking-accounts-4158695-FINAL-6788eea628ae4902a43ec3472ca7b7d0.png"
                    title="Principles of Accounts"
                    description=""
                    start="/study/csec/poa/"
                    resources=""
                  />
                </li>

                <li className="mr-4">
                  {/* Social Studies */}
                  <SubjectPreview
                    imgSrc="https://images.theconversation.com/files/304831/original/file-20191202-67002-106wryj.jpg?ixlib=rb-1.1.0&rect=0%2C0%2C4500%2C3132&q=45&auto=format&w=496&fit=clip"
                    title="Social Studies"
                    description=""
                    start="/study/csec/social-studies/"
                    resources=""
                  />
                </li>

                <li className="mr-4">
                  {/* Caribbean History */}
                  <SubjectPreview
                    imgSrc="https://images.liverpoolmuseums.org.uk/styles/focal_point_2_1/public/2020-01/slavery-in-the-caribbean-banner.jpg"
                    title="Caribbean History"
                    description="Let's taka a trip back in history through fun lessons, engaging activities and through regular exercises."
                    start="/study/csec/caribbean-history/"
                    resources=""
                  />
                </li>

                <li className="mr-4">
                  {/* Geography */}
                  <SubjectPreview
                    imgSrc="https://study.com/cimages/videopreview/videopreview-full/p3c2j8y73a.jpg"
                    title="Geography"
                    description=""
                    start="/study/csec/geography/"
                    resources=""
                  />
                </li>

                <li className="mr-4">
                  {/* Human and Social Biology */}
                  <SubjectPreview
                    imgSrc="https://www.larberthigh.com/_images/17239_s.jpg"
                    title="Human and Social Biology"
                    description=""
                    start="/study/csec/hsb/"
                    resources=""
                  />
                </li>

                <li className="mr-4">
                  {/* Integrated Science */}
                  <SubjectPreview
                    imgSrc="https://www.sciencemag.org/sites/default/files/styles/article_main_large/public/WL_HoursH.jpg?itok=6G_HN_Td&c=d5c762b61c41d41483f1c3d7e4a23004"
                    title="Integrated Science"
                    description=""
                    start="/study/csec/integrated-science/"
                    resources=""
                  />
                </li>

                <li className="mr-4">
                  {/* Office Administration */}
                  <SubjectPreview
                    imgSrc="https://wingateave.com.au/wp-content/uploads/2019/06/vector-inside-office-illustration.jpg"
                    title="Office Admistration"
                    description=""
                    start="/study/csec/office-administration/"
                    resources=""
                  />
                </li>

                <li className="mr-4">
                  {/* Additional Mathematics */}
                  <SubjectPreview
                    imgSrc="https://d2u4q3iydaupsp.cloudfront.net/VfREbXqcAK2u0u7RKuy20QUXIGfOwFU2YRR4QCFSItKzcXg8YNDoPEq0etCErg5Xd1uHLfUAfSGaTPR5t9XqYWgbeyQvCqOMe7he4BfFQNFG5ivNQODf5X95liwSeEYh"
                    title="Additional Mathematics"
                    description=""
                    start="/study/csec/additional-mathematics/"
                    resources=""
                  />
                </li>

                <li className="mr-4">
                  {/* Physical Education */}
                  <SubjectPreview
                    imgSrc="https://markparkinson.files.wordpress.com/2019/11/physical-education.jpg?w=584"
                    title="Physical Education"
                    description=""
                    start="/study/csec/physical-education/"
                    resources=""
                  />
                </li>

                <li className="mr-4">
                  {/* Visual Arts */}
                  <SubjectPreview
                    imgSrc="https://mymodernmet.com/wp/wp-content/uploads/2019/03/elements-of-art-6.jpg"
                    title="Visual Arts"
                    description=""
                    start="/study/csec/visual-arts/"
                    resources=""
                  />
                </li>
              </ul>
            </BrowserView>
          </Container>
        </Layout>
      </>
    )
  }
}

export default Page
