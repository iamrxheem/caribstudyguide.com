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
                <a href="/study">Study</a>
              </BreadcrumbItem>
              <BreadcrumbItem active>CSEC</BreadcrumbItem>
            </Breadcrumb>
          </Container>

          <Container fluid>
            <CSECLayout>
              <Row>
                {/* English Language */}
                <SubjectPreview
                  imgSrc="https://thewritelife.com/wp-content/uploads/2015/05/photodune-11477592-essay-concept-notepad-s.jpg"
                  title="English A"
                  description=""
                  start=""
                  resources=""
                />

                {/* Mathematics */}
                <SubjectPreview
                  imgSrc="https://www.stem.org.uk/sites/default/files/blog-images/A%20level%20mathematics.jpg"
                  title="Mathematics"
                  description=""
                  start=""
                  resources=""
                />

                {/* English Literature */}
                <SubjectPreview
                  imgSrc="https://pregonesprtt.org/wp-content/uploads/2019/05/Tempest2019.jpg"
                  title="English B"
                  description=""
                  start=""
                  resources=""
                />

                {/* Information Technology */}
                <SubjectPreview
                  imgSrc="https://www.simplilearn.com/ice9/free_resources_article_thumb/Best-Programming-Languages-to-Start-Learning-Today.jpg"
                  title="Information Technology"
                  description=""
                  start=""
                  resources=""
                />

                {/* Biology */}
                <SubjectPreview
                  imgSrc="https://leverageedu.com/blog/wp-content/uploads/2019/09/Biology.png"
                  title="Biology"
                  description=""
                  start=""
                  resources=""
                />

                {/* Chemistry */}
                <SubjectPreview
                  imgSrc="https://jobs.newscientist.com/getasset/c40a5488-11be-43b0-843f-a2e6ef9f0612/"
                  title="Chemistry"
                  description=""
                  start=""
                  resources=""
                />

                {/* Physics */}
                <SubjectPreview
                  imgSrc="https://bs-uploads.toptal.io/blackfish-uploads/blog/article/content/cover_image_file/cover_image/17947/cover-VideoGamePhysics-Luke_Newsletter-d65c81ebd91933ccb650011f88f9ee74.png"
                  title="Physics"
                  description=""
                  start=""
                  resources=""
                />

                {/* Spanish */}
                <SubjectPreview
                  imgSrc="https://i0.wp.com/cms.babbel.news/wp-content/uploads/2017/12/HowSayHello_Illustration_SPA_FB1200.png?h=9999&quality=100&w=993"
                  title="Spanish"
                  description=""
                  start=""
                  resources=""
                />

                {/* French */}
                <SubjectPreview
                  imgSrc="https://www.brainscape.com/blog/wp-content/uploads/2015/06/French.jpg"
                  title="French"
                  description=""
                  start=""
                  resources=""
                />

                {/* Subject */}
                <SubjectPreview
                  imgSrc="https://d3q6qq2zt8nhwv.cloudfront.net/course/d9957ba6fb5e423eb2fce46b16f52452.jpg"
                  title="Principles of Business"
                  description=""
                  start=""
                  resources=""
                />

                {/* Principles of Accounts */}
                <SubjectPreview
                  imgSrc="https://www.thebalance.com/thmb/EoMD_9GenTcyaqB23M9HefwgEwI=/1500x1000/filters:fill(auto,1)/best-online-checking-accounts-4158695-FINAL-6788eea628ae4902a43ec3472ca7b7d0.png"
                  title="Principles of Accounts"
                  description=""
                  start=""
                  resources=""
                />

                {/* Social Studies */}
                <SubjectPreview
                  imgSrc="https://images.theconversation.com/files/304831/original/file-20191202-67002-106wryj.jpg?ixlib=rb-1.1.0&rect=0%2C0%2C4500%2C3132&q=45&auto=format&w=496&fit=clip"
                  title="Social Studies"
                  description=""
                  start=""
                  resources=""
                />

                {/* Subject */}
                <SubjectPreview
                  imgSrc="https://images.liverpoolmuseums.org.uk/styles/focal_point_2_1/public/2020-01/slavery-in-the-caribbean-banner.jpg"
                  title="Caribbean History"
                  description=""
                  start=""
                  resources=""
                />

                {/* Subject */}
                <SubjectPreview
                  imgSrc="https://study.com/cimages/videopreview/videopreview-full/p3c2j8y73a.jpg"
                  title="Geography"
                  description=""
                  start=""
                  resources=""
                />

                {/* Human and Social Biology */}
                <SubjectPreview
                  imgSrc="https://www.larberthigh.com/_images/17239_s.jpg"
                  title="Human and Social Biology"
                  description=""
                  start=""
                  resources=""
                />

                {/* Integrated Science */}
                <SubjectPreview
                  imgSrc="https://www.sciencemag.org/sites/default/files/styles/article_main_large/public/WL_HoursH.jpg?itok=6G_HN_Td&c=d5c762b61c41d41483f1c3d7e4a23004"
                  title="Integrated Science"
                  description=""
                  start=""
                  resources=""
                />

                {/* Office Administration */}
                <SubjectPreview
                  imgSrc="https://wingateave.com.au/wp-content/uploads/2019/06/vector-inside-office-illustration.jpg"
                  title="Office Admistration"
                  description=""
                  start=""
                  resources=""
                />

                {/* Additional Mathematics */}
                <SubjectPreview
                  imgSrc="https://d2u4q3iydaupsp.cloudfront.net/VfREbXqcAK2u0u7RKuy20QUXIGfOwFU2YRR4QCFSItKzcXg8YNDoPEq0etCErg5Xd1uHLfUAfSGaTPR5t9XqYWgbeyQvCqOMe7he4BfFQNFG5ivNQODf5X95liwSeEYh"
                  title="Additional Mathematics"
                  description=""
                  start=""
                  resources=""
                />

                {/* Physical Education */}
                <SubjectPreview
                  imgSrc="https://markparkinson.files.wordpress.com/2019/11/physical-education.jpg?w=584"
                  title="Physical Education"
                  description=""
                  start=""
                  resources=""
                />

                {/* Visual Arts */}
                <SubjectPreview
                  imgSrc="https://mymodernmet.com/wp/wp-content/uploads/2019/03/elements-of-art-6.jpg"
                  title="Visual Arts"
                  description=""
                  start=""
                  resources=""
                />
              </Row>
            </CSECLayout>
          </Container>
        </Layout>
      </>
    )
  }
}

export default Page
