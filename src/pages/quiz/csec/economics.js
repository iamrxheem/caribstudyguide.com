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
            title="Online CSEC Economics MCQ Quiz"
            description="Our online math test quiz will assist you to improve your Economics skills in a fun interactive way. THe following are taken from CXC past paper questions."
            author="cxcstudyguide"
          />
          <Helmet>
            <meta
              name="keywords"
              content="Economics, mcq quiz, csec mcq quiz generator, CAPE exams, mcq, online class , cxc, csec, free cxc past papers, csec study guide, caribbean examination council, cxc guide online, free cxc study notes, cxc exams, csec exams, study, jamaica, caribbean, free cxc past papers, cxc online classes, csec online classes, cxc zoom classes, free cxc lessons, free csec lessons, csec lessons online, cxc Trinidad and tobago, cxc jamaica online classes, cxc jamaica lessons, spanish, cxc barbados, cxc textbooks, free csec, textbooks, free cape, cape, cxc cape, csec, cape, rxheem, Raheem McDonald, iamrxheem, Raheem McDonald UWI, Raheem McDonald Jamaica, CXC study guide, cxc online study guide, cxcstudyguide"
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
              <BreadcrumbItem active>Economics</BreadcrumbItem>
            </Breadcrumb>

            <h5>Economics MCQ Quiz</h5>

            <p>
              Select the correct answer from the options below. Swipe right if
              you need to see the previous question.
            </p>

            <br />
            <MCQ>
              {/* Question */}
              <MCQItem
                id={uuidv4()}
                hasImg
                imgSrc="https://i.imgur.com/JwV22EW.png"
                topic=""
                question="The table gives information on Gross Domestic Product. What can be concluded from the table about 2006?"
                optionOne="Any particular product would cost most in India."
                optionTwo="Economic growth was highest when unemployment was lowest."
                optionThree="Low inflation always causes low unemployment."
                optionFour="On average, the Chinese people were likely to have had an increase in real income."
                correctOption="d"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                isTrueFalse
                question="Price ceilings are imposed increase price above the free market equilibrium price"
                correctOption="T"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="An increase in consumer income will increase demand for a _______ but decrease demand for a _________"
                optionOne="substitute good, inferior good"
                optionTwo="normal good, inferior good"
                optionThree="inferior good, normal good"
                optionFour="normal good, complementary good"
                correctOption="a"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="If a price increase of good A increases the quantity demanded of good B, then good B is a"
                optionOne="substitute good"
                optionTwo="complementary good"
                optionThree="bargain"
                optionFour="inferior good"
                correctOption="b"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="An increase in price will cause a supply curve to shift to the left "
                isTrueFalse
                correctOption="T"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="A supply curve is directly affected by"
                optionOne="technology"
                optionTwo="input costs"
                optionThree="government regulation"
                optionFour="all of the above"
                correctOption="b"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="A demand curve can shift because of changing "
                optionOne="incomes"
                optionTwo="prices of related goods"
                optionThree="tastes"
                optionFour="all of the above"
                correctOption="b"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="A change in price can cause a shift of a demand curve"
                isTrueFalse
                correctOption="T"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question=" ________ and ________ do not directly affect the demand curve"
                optionOne="the price of related goods, consumer incomes"
                optionTwo="consumer incomes, tastes"
                optionThree="the costs of production, bank opening hours"
                optionFour="the price of related goods, preferences"
                correctOption="b"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="When a market is in equilibrium"
                optionOne="Quantity demanded equals quantity supplied"
                optionTwo="Excess demand and excess supply are zero"
                optionThree="The market is cleared by the equilibrium price"
                optionFour="All of the above"
                correctOption="b"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="The equilibrium price clears the market; it is the price at which ________ _________"
                optionOne="Everything is sold"
                optionTwo="Buyers spend all their money"
                optionThree="Quantity demanded equals quantity supplied"
                optionFour="Excess demand is zero E)	c and d"
                correctOption="c"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="Supply is the quantity of a good sellers wish to sell each time the market opens"
                isTrueFalse
                correctOption="T"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="When we know the quantity of a product that buyers wish to purchase at each possible price, we know"
                optionOne="Demand"
                optionTwo="Supply"
                optionThree="Excess demand"
                optionFour="Excess supply"
                correctOption="a"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="If the diagram of a line shows that lower values on the vertical scale are associated with higher values on the horizontal scale, this is an example of _____________"
                optionOne="a nonlinear relationship"
                optionTwo="a positive linear relationship"
                optionThree="a scatter diagram"
                optionFour="a negative linear relationship"
                correctOption="b"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="On a graph, a positive linear relationship"
                optionOne="moves down to the right"
                optionTwo="moves up to the left"
                optionThree="moves up to the right"
                optionFour="moves down to the left"
                correctOption="b"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="A straight-line diagram can be drawn knowing the ______ and _________ "
                optionOne="vertical axis and horizontal axis"
                optionTwo="intercept and slope"
                optionThree="scale and slope"
                optionFour="intercept and scale"
                correctOption="c"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="If your income during one year is $10,000 and the following year it is $12,000, then it has grown by"
                optionOne="20%"
                optionTwo="2%"
                optionThree="12%"
                optionFour="16%"
                correctOption="b"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="To find the percentage change in a number, divide the absolute change by the original number and multiply by 100"
                isTrueFalse
                correctOption="F"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="A real value can be derived from a nominal value by"
                optionOne="adjusting for changes over time"
                optionTwo="adjusting for data collection errors"
                optionThree="adjusting for population changes"
                optionFour="adjusting for changes in prices"
                correctOption="d"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="The retail price index is used to ______________"
                optionOne="construct price lists"
                optionTwo="compare shop prices"
                optionThree="measure changes in the cost of living"
                optionFour="none of the above"
                correctOption="b"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="Index numbers express base data in relation to some relative value"
                isTrueFalse
                correctOption="F"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="Time series data show information"
                optionOne="about the same point in time over different places"
                optionTwo="about different points in time over the same variable"
                optionThree="about different variables over different places"
                optionFour="about different points in time over different places"
                correctOption="b"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="Data are important in economics because __________ and __________ "
                optionOne="they suggest relationships for explanation, allow testing of hypotheses"
                optionTwo="they can be used for tables, they can be graphed"
                optionThree="they can be used in computers, governments use them"
                optionFour="they provide interesting information, can be summarised"
                correctOption="c"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="An economic model is a physical representation of an economy"
                isTrueFalse
                correctOption="F"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="Macroeconomics is the study of ___________________"
                optionOne="individual building blocks in the economy"
                optionTwo="the relationship between different sectors of the economy"
                optionThree="household purchase decisions"
                optionFour="the economy as a whole"
                correctOption="d"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="Microeconomics is concerned with"
                optionOne="the economy as a whole"
                optionTwo="the electronics industry"
                optionThree="the study of individual economic behaviour"
                optionFour="the interactions within the entire economy"
                correctOption="d"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="Normative economics forms ___________ based on _____________"
                optionOne="positive statements, facts"
                optionTwo="opinions, personal values"
                optionThree="positive statements, values"
                optionFour="opinions, facts"
                correctOption="c"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="Normative economics forms ___________ based on _____________"
                optionOne="positive statements, facts"
                optionTwo="opinions, personal values"
                optionThree="positive statements, values"
                optionFour="opinions, facts"
                correctOption="c"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="Positive economics studies objective explanations of the workings of the economy"
                isTrueFalse
                correctOption="T"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="In the mixed economy"
                optionOne="economic problems are solved by the government and market"
                optionTwo="economic decisions are made by the private sector and free market"
                optionThree="economic allocation is achieved by the invisible hand"
                optionFour="economic questions are solved by government departments"
                correctOption="a"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="In a free market __________ ___________"
                optionOne="governments intervene"
                optionTwo="governments plan production"
                optionThree="governments interfere"
                optionFour="prices adjust to reconcile scarcity and desires"
                correctOption="d"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="A command economy decides resource allocation by government planning"
                isTrueFalse
                correctOption="T"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="A market can accurately be described as"
                optionOne="a place to buy things"
                optionTwo="a place to sell things"
                optionThree="the process by which prices adjust to reconcile the allocation of resources"
                optionFour="a place where buyers and sellers meet"
                correctOption="c"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="The opportunity cost of a good is"
                optionOne="the time lost in finding it"
                optionTwo="the quantity of other goods sacrificed to get another unit of that good"
                optionThree="the expenditure on the good"
                optionFour="the loss of interest in using savings"
                correctOption="b"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="A resource is scarce if supply exceeds demand at zero price"
                isTrueFalse
                correctOption="F"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="Economics is the study of"
                optionOne="production technology"
                optionTwo="consumption decisions"
                optionThree="how society decides what, how, and for whom to produce"
                optionFour="the best way to run society"
                correctOption="c"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="In an African country, large amounts of land were taken from farmers to make a national park to protect rare animals and provide a tourist attraction with accommodation. Which of the following is likely to decrease as a result of these changes?"
                optionOne="earnings from foreign visitors"
                optionTwo="employment in the primary sector"
                optionThree="employment in the tertiary sector"
                optionFour="the price of land elsewhere"
                correctOption="b"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="What is the main reason why the government, rather than the private sector, builds and runs hospitals?"
                optionOne="Hospitals are expensive to build."
                optionTwo="The government has enough tax revenue to pay for hospitals."
                optionThree="The government needs to be sure that the doctors are well-trained."
                optionFour="The whole country can benefit from the provision of good health facilities."
                correctOption="d"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="What is an advantage if a region specialises in a narrow range of products?"
                optionOne="Other regions will become over-dependent on the region."
                optionTwo="Scarce resources are used more efficiently."
                optionThree="The level of production in the region will decrease."
                optionFour="The region's system of transport is improved."
                correctOption="b"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="Some countries protect their economies through barriers to free trade. What would be the result in such countries of this protection?"
                optionOne="Competition will be reduced."
                optionTwo="Consumer choice will increase."
                optionThree="Prices will fall."
                optionFour="Unemployment will rise."
                correctOption="a"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="In 2001 a government enquiry approved a major new air terminal for London, which would create many new jobs. However, it would also cause extra noise and air pollution. Compensation would have to be paid to some people whose houses would be demolished. What is not involved in this exploitation of resources?"
                optionOne="conflicts of interest"
                optionTwo="free market economy"
                optionThree="income creation"
                optionFour="opportunity cost"
                correctOption="b"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="What is characteristic of a developed economy?"
                optionOne="a high infant mortality rate"
                optionTwo="a high literacy rate"
                optionThree="a low GDP per capita"
                optionFour="a low life expectancy"
                correctOption="b"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="In some developing countries, such as Rwanda, a large percentage of the population is involved in subsistence farming. What can be concluded from this?"
                optionOne="In some developing countries, the natural resources are used efficiently."
                optionTwo="Production in some developing countries depends upon skilled labour."
                optionThree="Production in some developing countries is not likely to be capital intensive."
                optionFour="Some developing countries do not import food because each family is self-sufficient."
                correctOption="c"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="Which of the following is most likely to be used as a measure of living standards?"
                optionOne="the balance of trade"
                optionTwo="the consumer price index"
                optionThree="the government's budget position"
                optionFour="d"
                correctOption="a"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                hasImg
                imgSrc="https://i.imgur.com/JwV22EW.png"
                topic=""
                question="The table gives information on Gross Domestic Product. What can be concluded from the table about 2006?"
                optionOne="Any particular product would cost most in India."
                optionTwo="Economic growth was highest when unemployment was lowest."
                optionThree="Low inflation always causes low unemployment."
                optionFour="On average, the Chinese people were likely to have had an increase in real income."
                correctOption="d"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="In 2003, interest rates in Southern Africa were reduced. What might have happened as a result?"
                optionOne="an increase in investment"
                optionTwo="an increase in unemployment"
                optionThree="a reduction in economic growth"
                optionFour="a reduction in government spending"
                correctOption="a"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="A government decreased the tax on all goods produced in a country. What is the most likely result of this?"
                optionOne="a decrease in imports"
                optionTwo="a decrease in industrial production"
                optionThree="a decrease in real incomes"
                optionFour="a deterioration in the balance of trade in goods"
                correctOption="a"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="What is likely to be an advantage of economic growth?"
                optionOne="The country's resources will be depleted."
                optionTwo="The price level will increase."
                optionThree="The rate of employment will fall."
                optionFour="The standard of living will increase."
                correctOption="d"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="What is meant by a regressive indirect tax?"
                optionOne="a tax on income that falls more heavily on the poor"
                optionTwo="a tax on income that falls more heavily on the rich"
                optionThree="a tax on spending that falls more heavily on the poor"
                optionFour="a tax on spending that falls more heavily on the rich"
                correctOption="c"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="What might a government increase if it wished to raise the growth rate of an economy?"
                optionOne="expenditure on road building"
                optionTwo="goods and services tax"
                optionThree="the rate of income tax"
                optionFour="the rate of interest"
                correctOption="a"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="The pound sterling made a dramatic recovery in the world's currency markets yesterday. To what does this statement refer?"
                optionOne="exchange rate"
                optionTwo="growth rate"
                optionThree="interest rate"
                optionFour="tax rate"
                correctOption="a"
              />
            </MCQ>
          </Container>
        </Layout>
      </>
    )
  }
}

export default Page
