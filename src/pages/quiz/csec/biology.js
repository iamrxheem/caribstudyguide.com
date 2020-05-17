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
            title="Online CSEC Biology MCQ Quiz"
            description="Our online math test quiz will assist you to improve your Biology skills in a fun interactive way. THe following are taken from CXC past paper questions."
            author="cxcstudyguide"
          />
          <Helmet>
            <meta
              name="keywords"
              content="biology, mcq quiz, csec mcq quiz generator, CAPE exams, mcq, online class , cxc, csec, free cxc past papers, csec study guide, caribbean examination council, cxc guide online, free cxc study notes, cxc exams, csec exams, study, jamaica, caribbean, free cxc past papers, cxc online classes, csec online classes, cxc zoom classes, free cxc lessons, free csec lessons, csec lessons online, cxc Trinidad and tobago, cxc jamaica online classes, cxc jamaica lessons, spanish, cxc barbados, cxc textbooks, free csec, textbooks, free cape, cape, cxc cape, csec, cape, rxheem, Raheem McDonald, iamrxheem, Raheem McDonald UWI, Raheem McDonald Jamaica, CXC study guide, cxc online study guide, cxcstudyguide"
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
              <BreadcrumbItem active>Biology</BreadcrumbItem>
            </Breadcrumb>

            <h5>Biology MCQ Quiz</h5>

            <p>
              Select the correct answer from the options below. Swipe right if
              you need to see the previous question.
            </p>

            <br />
            <MCQ>
              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc="https://i.imgur.com/bSa9dDv.png"
                hasImg
                topic=""
                question="Energy flow through ecosystems is not 100% efficient. This is so because energy is"
                optionOne="linear, moving from one organism to the next."
                optionTwo="circular, moving in and out of organisms"
                optionThree="lost through respiration and excretion"
                optionFour="recycled from plants to the atomosphere"
                correctOption="c"
                note="The organism which are at the begining of the food chain, the producers, would have the most energy as they are directly getting the energy from the sun while the higher level consumers would have the least amount due to that energy lost in the eccosystem. "
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="Which of the following satements about recycling manufactured materials are true?"
                hasListOption
                listOptionOne="Less energy is used in the manufacturing of new produces using the raw materials from recycled products"
                listOptionTwo="All manufactured products can be recycled"
                listOptionThree="recycling of some non-biodegradable materials prevents landfill sites from filling up too quickly and for a long time"
                listOptionOFour=""
                optionOne="i and ii"
                optionTwo="i and iii"
                optionThree="ii and iii"
                optionFour="i, ii, and iii"
                correctOption="d"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                hasListOption
                listOptionOne="Increase in macroalgal and seagrass growth"
                listOptionTwo="Leff reef fish"
                listOptionThree="More branching corals"
                listOptionOFour=""
                question="Which of the following are effects of pollutants on coral reefs in the Caribbean?"
                optionOne="i and ii"
                optionTwo="i and iii"
                optionThree="ii and iii"
                optionFour="i, ii and iii"
                correctOption="a"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question=" A greenhouse plan which is usuall kept at a temperature of 25°C is subjected to a temperature of 30°C ofr 24 hours. Which MOST likely effect of this change is that the plan would"
                optionOne="lose less water and wilt"
                optionTwo="close the stomata and reduce water length"
                optionThree="lose more water and become turgid"
                optionFour="open the stomata and increase water loss"
                correctOption="b"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="THe body of a body builder should contain large amounts of"
                optionOne="fat"
                optionTwo="protein"
                optionThree="vitamins"
                optionFour="carbohydrates"
                correctOption="b"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="Which of the following is the best BEST definition of excretion?"
                optionOne="Loss of excess materials"
                optionTwo="Lost of indigestible materials"
                optionThree="Removal of metabolic waste"
                optionFour="Removal of unwanted substances"
                correctOption="c"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="Which of the following enzymes work best in the acid pH?"
                optionOne="Pepsin"
                optionTwo="Lipase"
                optionThree="Trypsin"
                optionFour="Amylase"
                correctOption="a"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="Carbon monoxide in ciagarettes MOST likely causes"
                optionOne="increase beating of cilia"
                optionTwo="an increase in heart rate"
                optionThree="a decrease in oxygen transported by the blood"
                optionFour="increased mucus production in the cells lining the respotory passage"
                correctOption="c"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="In the transport of solutes in the phleom, the source is deined as any area of the plant where"
                optionOne="water is taken out of the phloem"
                optionTwo="sucrose is loaded into the phleom"
                optionThree="water is loaded into the phloem"
                optionFour="sucrose is loaded into the phleom"
                correctOption="b"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="Which parts of the human skeleton contributes the LEAST to its protective function?"
                optionOne="Rib"
                optionTwo="Cranium"
                optionThree="Humerus"
                optionFour="Pelvic girdle"
                correctOption="c"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="Which of the following are involved in the formation of blood clots?"
                optionOne="Platelets"
                optionTwo="Antibodies"
                optionThree="Lymphocytes"
                optionFour="Phagocytes"
                correctOption="a"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="The receptor is the"
                optionOne="hot object touched"
                optionTwo="heat from the hot object"
                optionThree="sensoring ending in the skin"
                optionFour="muscles that contract"
                correctOption="c"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="Fats are good food reserves becuase they "
                optionOne="are easily digested"
                optionTwo="have a high energy value"
                optionThree="melt at low temperatures"
                optionFour="are more bulky than other foods"
                correctOption="b"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="Glaucoma is the result of"
                optionOne="the cornea being too thin"
                optionTwo="the cornea being too thick"
                optionThree="the lens becoming opaque"
                optionFour="too much fluid in front of the lens"
                correctOption="c"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="Whic of the following is a spinal reflex?"
                optionOne="Blinking"
                optionTwo="Salivating"
                optionThree="Pupil reflex"
                optionFour="Knee jerk reflex"
                correctOption="d"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                question="Which of the following is NOT a distinguising feature of the nervous system?"
                optionOne="Rapid response"
                optionTwo="Localized reaction"
                optionThree="Long-lasting effect"
                optionFour="Teporary response"
                correctOption="c"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="One advantage that sexual reporduction has over asexual reporduction is that sexual reporduction"
                optionOne="is conservative"
                optionTwo="leads to variation"
                optionThree="produce disease-resistance corps"
                optionFour="produces greated number of offspring"
                correctOption="b"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="Pollen grains which are small, light, odourless and smooth are MOST likely transferred"
                optionOne="water"
                optionTwo="birds"
                optionThree="wind"
                optionFour="inspects"
                correctOption="c"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="Pollination is the process by which pollen is transferred from the"
                optionOne="anther to the stigma"
                optionTwo="stigma to the anther"
                optionThree="stamen to the ovary"
                optionFour="pistil to the anther"
                correctOption="a"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="Which of the following can use used in the treatment of hypertension?"
                optionOne="i and ii only"
                optionTwo="i and iii only"
                optionThree="ii and iii only"
                optionFour="i, ii and iii"
                hasListOption
                listOptionOne="Diet"
                listOptionTwo="Exercise"
                listOptionThree="Low sodium intake"
                correctOption="d"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="Which of the following statements about meiosis is NOT true?"
                optionOne="Mixing of genes occur."
                optionTwo="Produces four daughter cells."
                optionThree="Chromosolme number is maintained"
                optionFour="Occurs only in the sex organs"
                correctOption="c"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="Four children born born to the same parents have blood group A, B, AB and O. Whcih of the following represents the genotype of the parents?"
                optionOne="AB * OO"
                optionTwo="AO * BO"
                optionThree="AA * BO"
                optionFour="AO * BB"
                correctOption="b"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="Variation in population is due to "
                optionOne="i and ii only"
                optionTwo="i and iii only"
                optionThree="ii and iii only"
                optionFour="i, ii and iii"
                correctOption="b"
                hasListOption
                listOptionOne="mutuation"
                listOptionTwo="asexual reproduction"
                listOptionThree="crossing over"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="In a particular plant, red and white colour show codominance. If two heterozyglous (pink) flowers are crossed, the expected phentotypic ratio of the offspring is"
                optionOne="all pink"
                optionTwo="1 red: 1 white"
                optionThree="3 red: 1 white"
                optionFour="1 red: 2 pink: 1 white"
                correctOption="d"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="Which of the following features of cell division refers to mitosis?"
                optionOne="It is essential for variety within a species."
                optionTwo="It results in the haploid number of chromosomes"
                optionThree="It takes place in reporductive structure"
                optionFour="The amount of generic materials in the cell remains the same."
                correctOption="d"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="Which of the following statements BEST describes a chromosome?"
                optionOne="Two forms of the same gene"
                optionTwo="Structure made up of DNA wrapped aroud histones"
                optionThree="Nucleic acid that contains all genetic information"
                optionFour="Part of the DNA which carries genetic information to produce a protein"
                correctOption="b"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="A species is best defined as a group of organisms that"
                optionOne="cannot interbreed"
                optionTwo="are physically similar"
                optionThree="can interbreed and produce many offsprings"
                optionFour="can interbreed and produce fertile offspring"
                correctOption="d"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="Natural selection differs from artificial selection because in natural selection"
                optionOne="the process is faster"
                optionTwo="the environment determines the beneficial characteristics"
                optionThree="Non-random mating is involved"
                optionFour="Humans determine the individual with the beneficial trait"
                correctOption="b"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="THe gene for coat colour in cattle shows incomplete dominance. A purebread cow, with red coat, mates with a purebread bull with wite coat. All of the offspring have roan coat. Which of the following would represent the genotype of the offspring?"
                optionOne="RR"
                optionTwo="RW"
                optionThree="RO"
                optionFour="WW"
                correctOption="b"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="Which of the following is not necessary for germination to take place?"
                optionOne="Light"
                optionTwo="Oxygen"
                optionThree="Moisture"
                optionFour="Food supply"
                correctOption="a"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="Large organisms cannot depend solely on diffusion for the uptake and transport of gases. This is because organisms get larger the"
                optionOne="surface area to volume ration increases"
                optionTwo="surface area to ratio ration decreases"
                optionThree="surface area and volume both increase"
                optionFour="surface area and volume both decrease"
                correctOption="b"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="Which of the following is used to classify a group of organisms as Class Insecta?"
                optionOne="Size"
                optionTwo="Shape"
                optionThree="Colour"
                optionFour="Number of Segments"
                correctOption="d"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="Commensalism is illustrated by the relationship between a "
                optionOne="dog and a flea"
                optionTwo="hen and a chick"
                optionThree="cow and an egret"
                optionFour="human and a mosquito"
                correctOption="c"
                note="The cow would not suffer not benefit, and the egret would get its food."
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="Living organisms, such as plants, are affected by abiotic factors which determine where they become established. Which of the following describes some of these determining factors? "
                optionOne="Parasitism, commensalism, mutualism"
                optionTwo="Sunlight availability, soil pH, minerals"
                optionThree="Sediment size, shape and color"
                optionFour="Deforestation, slash and burn, shifting cultivation"
                correctOption="b"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="Bateria play an important role in the cycling of nitrogen. Which of the following organisms is NOT apart of that cycle?"
                optionOne="Nitrobacter"
                optionTwo="Streptococcus"
                optionThree="Rhizobium"
                optionFour="Nitrosomonas"
                correctOption="b"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="Which of the following effects of climate change pose the GREATEST threat to small islands?"
                optionOne="rising sea levels"
                optionTwo="ocean acidification"
                optionThree="Increased greenhouse gases"
                optionFour="Increased global temperatures"
                correctOption="a"
                note="Rising sea levels affect the coastlines"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="Which of the following organelles in a cell is the site of aerobic respiration?"
                optionOne="Nucleus"
                optionTwo="Cytoplasm"
                optionThree="Chloroplast"
                optionFour="Mitochondrion"
                correctOption="d"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="Which of the following is caused by a lack of Vitamin A in the diet?"
                optionOne="Rickets"
                optionTwo="Scurvy"
                optionThree="Beri-beri"
                optionFour="Night blindness"
                correctOption="d"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="The role of respiration is the"
                optionOne="release of energy"
                optionTwo="absorption of oxygen"
                optionThree="liberation of carbon dioxide"
                optionFour="breakdown of carbohydrates"
                correctOption="a"
                note="The release of energy from the breakdown of food"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc="https://i.imgur.com/JbUV41V.png"
                hasImg
                topic=""
                question="Phase 4 of the graph of population growth is most likely due to"
                optionOne="disease resistance"
                optionTwo="high natural birth rates"
                optionThree="adequate food and space"
                optionFour="competition from invasive species"
                correctOption="d"
              />
            </MCQ>
          </Container>
        </Layout>
      </>
    )
  }
}

export default Page
