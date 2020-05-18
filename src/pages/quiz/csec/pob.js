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
            title="Online CSEC Principles of Business MCQ Quiz"
            description="Our online math test quiz will assist you to improve your POB skills in a fun interactive way. THe following are taken from CXC past paper questions."
            author="cxcstudyguide"
          />
          <Helmet>
            <meta
              name="keywords"
              content="Principles of Business, mcq quiz, csec mcq quiz generator, CAPE exams, mcq, online class , cxc, csec, free cxc past papers, csec study guide, caribbean examination council, cxc guide online, free cxc study notes, cxc exams, csec exams, study, jamaica, caribbean, free cxc past papers, cxc online classes, csec online classes, cxc zoom classes, free cxc lessons, free csec lessons, csec lessons online, cxc Trinidad and tobago, cxc jamaica online classes, cxc jamaica lessons, spanish, cxc barbados, cxc textbooks, free csec, textbooks, free cape, cape, cxc cape, csec, cape, rxheem, Raheem McDonald, iamrxheem, Raheem McDonald UWI, Raheem McDonald Jamaica, CXC study guide, cxc online study guide, cxcstudyguide"
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
              <BreadcrumbItem active>POB</BreadcrumbItem>
            </Breadcrumb>

            <h5>Principles of Business MCQ Quiz</h5>

            <p>
              Select the correct answer from the options below. Swipe right if
              you need to see the previous question.
            </p>

            <br />
            <MCQ>
              {/* Question */}
              <MCQItem
                id={uuidv4()}
                hasText
                text="Mr. Llyod, manager of LM Ltd, holds regular staff meetings to listen to ideas from employees before making decision that would affect the future of the company"
                question="What leadership style does Mr. Llyod employ?"
                optionOne="Autocratic"
                optionTwo="Democratic"
                optionThree="Charismatic"
                optionFour="Laissez-faire"
                correctOption="b"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="Labour is BEST defined as"
                optionOne="physical and mental abilities to perform tasks"
                optionTwo="ability to perform management functions effectively"
                optionThree="level of skills training received by individuals who are working"
                optionFour="total number of persons who hold jobs in government ministries"
                correctOption="a"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="Which of the following are NOT trading instruments?"
                optionOne="Cheques"
                optionTwo="Credit cards"
                optionThree="Bills of exchange"
                optionFour="Money remittances"
                correctOption="d"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="A policy of a company is formunlated by the "
                optionOne="auditors"
                optionTwo="directors"
                optionThree="managers"
                optionFour="shareholders"
                correctOption="b"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="Which of the following are the features of a planned economy?"
                optionOne="i and ii only"
                optionTwo="i and iii only"
                optionThree="ii and iii only"
                optionFour="i, ii and iii only"
                correctOption="a"
                hasListOption
                listOptionOne="Centralized production"
                listOptionTwo="Citizens' welfare is primary"
                listOptionThree="Little government interference"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="Which of the following types of economic systems does the government makes all the decisions?"
                optionOne="Mixed"
                optionTwo="Capitalist"
                optionThree="Command"
                optionFour="Substinence"
                correctOption="c"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="The main purpose of installing a suggestion box is to get workers' views on"
                optionOne="each other"
                optionTwo="other companies"
                optionThree="ways of improving the workplace"
                optionFour="ways of improving economic conditions"
                correctOption="c"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="Which of the institutions form part of the money market?"
                optionOne="(i) and (ii) only"
                optionTwo="(iii) and (iv) only"
                optionThree="(ii) and (iii) only"
                optionFour="(ii) and (iv) only"
                correctOption="b"
                hasListOption
                listOptionOne="Building societies"
                listOptionTwo="Development banks"
                listOptionThree="Commercial banks"
                listOptionOFour="Credit unions"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="When a seller offers, '33 1/3 off on all items', this can be termed"
                optionOne="Advertising"
                optionTwo="Branding"
                optionThree="Sales promotion"
                optionFour="Industrialization"
                correctOption="c"
                note="C is the Correct answer because the seller wants to encourage customers to buy his/her goods. This usually means that (the seller) wants to get rid of old stock before placing new stock on the shelves."
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="What is marketing?"
                optionOne="The action of business promting or selling products"
                optionTwo="Buying goods from a shop"
                optionThree="Trading goods"
                optionFour="Bartering"
                correctOption="a"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="Setting objectives and the procedures for achieving goals are referred to as "
                optionOne="Planning"
                optionTwo="Motivating"
                optionThree="Controlling"
                optionFour="Organizing"
                correctOption="a"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="Barter can be described as the"
                optionOne="Credit sale and purchase of goods"
                optionTwo="Exchange of goods for money"
                optionThree="Barganinig for quality goods at a cheaper prices"
                optionFour="Exchange of goods for goods"
                correctOption="d"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="In a public limited company, the losses are borne by the"
                optionOne="Sharehoulders"
                optionTwo="Directors"
                optionThree="Community"
                optionFour="Staff"
                correctOption="a"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="What does the latin phrase ‘Ceteris Paribus Principle’ mean?"
                optionOne="All other things are not equal"
                optionTwo="The less the prices the more we are willing to demand"
                optionThree="all other things remain equal"
                optionFour="There is a change in demand and supply"
                correctOption="c"
                note="The Latin phrase ‘ceteris paribus principle’ means that all other things remain equal, that is, all other things remain unchanged or constant and there are no other factors or assumptions to take into account"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="Which one of these is NOT a factor of production"
                optionOne="Land"
                optionTwo="Capital"
                optionThree="Enterprise"
                optionFour="Labour"
                correctOption="c"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="Which of the following is NOT a current asset"
                optionOne="government bonds"
                optionTwo="account receivable"
                optionThree="cash"
                optionFour="inventory"
                correctOption="a"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="Contractual capacity means that:"
                optionOne="There is the ability or capacity to perform obligations."
                optionTwo="There is a legally binding contract."
                optionThree="The contract can be void or voidable."
                optionFour="None of the above"
                correctOption="a"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="An article in a shop window without a price tag, which is there as a means of advertising, can be said to be"
                optionOne="An offer for sale."
                optionTwo="An invitation to treat."
                optionThree="A window decoration by the shopkeeper."
                optionFour="An acceptance by the shopkeeper to accept offers from the public."
                correctOption="b"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="A legally binding contract does not exist if"
                optionOne="There is an offer and an acceptance."
                optionTwo="Both parties do what they promised."
                optionThree="There is some form of consideration."
                optionFour="There are two offers."
                correctOption="d"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="Terminating a contract can be achieved by all of the following ways, except by"
                optionOne="Mutual agreement by both parties."
                optionTwo="Completing performance."
                optionThree="Taking unilateral action."
                optionFour="The death of one party."
                correctOption="c"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="A specialty contract can best be described as one which "
                optionOne="Is written out very clearly."
                optionTwo="Is signed, sealed and delivered."
                optionThree="Has a lot of conditions attached to it."
                optionFour="Is typed out only in capital letters."
                correctOption="b"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="Which of the above institutions is part of the capital market"
                optionOne="(i) and (ii) only"
                optionTwo="(ii) and (iii) only"
                optionThree="(iii) and (iv) only"
                optionFour="(i), (ii), (iii) and (iv)"
                correctOption="d"
                hasListOption
                listOptionOne="Building societies"
                listOptionTwo="Development banks"
                listOptionThree="Commercial banks"
                listOptionOFour="Credit unions"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="The primary focus of attention of the Caribbean Development Bank is to: "
                optionOne="Help the entire region"
                optionTwo="Promote individuality and self-reliance"
                optionThree="Help finance the needs of the smaller Caribbean countries"
                optionFour="Promote employment opportunities in the larger countries of the region"
                correctOption="c"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="The highest rate of interest at a commercial bank is obtained from a"
                optionOne="Current or cheque account"
                optionTwo="Savings or deposit account"
                optionThree="Longer-term fixed deposits"
                optionFour="Short-term fixed deposits"
                correctOption="c"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="Of the following, which is not accepted for collateral security?"
                optionOne="Life assurance policies"
                optionTwo="Titles to land or property"
                optionThree="Stocks and shares"
                optionFour="Money lent out or invested"
                correctOption="d"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="Savings take place when you:"
                optionOne="Buy goods and services for daily use"
                optionTwo="Refrain from consuming a part or whole of your income"
                optionThree="Use money to pay debts"
                optionFour="Borrow money"
                correctOption="b"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="The stock exchange is a market place where:"
                optionOne="Stocks are exchanged for shares"
                optionTwo="Second-hand securities are bought and sold"
                optionThree="Brokers buy and sell goods"
                optionFour="All companies raise financial capital"
                correctOption="b"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="A credit union is founded or based mainly on: "
                optionOne="A common bond of all employees"
                optionTwo="The company’s integrity"
                optionThree="Profits of members"
                optionFour="The credit worthiness of the union"
                correctOption="a"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="The main purpose of a merchant bank is to:"
                optionOne="Finance traders and their trade"
                optionTwo="Lend money to the public at large"
                optionThree="Act as a security"
                optionFour="Provide night safe facilities"
                correctOption="a"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="A sou-sou is another form of:"
                optionOne="Saving money through a common bond"
                optionTwo="Spending money"
                optionThree="Paying dues to a trade union"
                optionFour="Belonging to a social institution"
                correctOption="a"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="The primary purpose or function of the commercial bank is to: "
                optionOne="Lend money"
                optionTwo="Borrow money from other banks"
                optionThree="Accept money deposits and personal valuables"
                optionFour="Invest deposits"
                correctOption="c"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="One of the most important functions of the central bank is to:"
                optionOne="Borrow money from individuals"
                optionTwo="Keep deposits from commercial banks"
                optionThree="Lend money for building houses"
                optionFour="Keep deposits put through the night safe"
                correctOption="b"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="The only bank which can claim to be the lender of last resort is the:"
                optionOne="Central bank"
                optionTwo="Commercial bank"
                optionThree="Merchant bank"
                optionFour="Trustee savings bank"
                correctOption="a"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="Which ONE of the following is NOT a function of a trade union?"
                optionOne="Assisting in the settlement of industrial disputes"
                optionTwo="Bargaining for the rights and privileges of employers"
                optionThree="Bargaining for improvements in workers' wages and working conditions"
                optionFour="Seeking educational, social and legal benefits for its members"
                correctOption="d"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="In a partnership the sleeping partner is one who"
                optionOne="contributes not less than three-quarters of the share capital of the business"
                optionTwo="sleeps on the premises as a watchman and is paid a salary"
                optionThree="takes no active part in the affairs of the business but shares in its profits"
                optionFour="undertakes the task of implementing the policy decisions of the partnership"
                correctOption="c"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="In which type of system does the state own and control all of the country's productive resources?"
                optionOne="capitalistic"
                optionTwo="mixed"
                optionThree="planned"
                optionFour="socialist"
                correctOption="c"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="A group of professional engineers wishing to enter into a business enterprise would most likely operate:"
                optionOne="a co-operative"
                optionTwo="a partnership"
                optionThree="a joint stock company"
                optionFour="a proprietorship"
                correctOption="b"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="The private sector is composed of the following sections:"
                optionOne="i and ii"
                optionTwo="i, ii and iv"
                optionThree="i and iii"
                optionFour="ii, iii and iv"
                correctOption="b"
                hasListOption
                listOptionOne="household;"
                listOptionTwo="business;"
                listOptionThree="government;"
                listOptionOFour="the market place"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="consumers are free to make their choices in the market place"
                optionOne="manufacturing"
                optionTwo="commercial banking"
                optionThree="utilities"
                optionFour="constuction"
                correctOption="v"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="In a free enterprise system, all of the following conditions exist EXCEPT:"
                optionOne="decisions about prices are made in the market place"
                optionTwo="there is greater ownership of the factors of production by the government than by the private sector"
                optionThree="consumers are free to make their choices in the market place"
                optionFour="consumers are free to make their choices in the market place"
                correctOption="c"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="Which of the following statements about the planned economy is INCORRECT?"
                optionOne="Consumers have a choice in the market place"
                optionTwo="Wages can be negotiated between workers and employers"
                optionThree="The government owns and operates the major national operations"
                optionFour="The means of production are owned by the government"
                correctOption="a"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="Select the best option for each of the questions which follow. When Trinidad exchanges its oil for cement from Jamaica, the form of trade is best  described as:"
                optionOne="barter"
                optionTwo="barter"
                optionThree="counter trade"
                optionFour="international trade"
                correctOption="a"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="What is the designation of company A if it owns the majority of the shares of company B"
                optionOne="conglomerate"
                optionTwo="partnership"
                optionThree="holding company"
                optionFour="joint-stock company"
                correctOption="c"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="A company owns a varity of businesses: insurance company, supermarket, car rental agency, shoe factory. This company can be referred to as a:"
                optionOne="conglomerate"
                optionTwo="multinational"
                optionThree="private limited company"
                optionFour="partnership"
                correctOption="a"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="What is the main function of a co-operative retail society:"
                optionOne="make a profit from its shareholders"
                optionTwo="buy and sell goods retail."
                optionThree="buy products wholesale and sell them cheaply to its members."
                optionFour="organise and plan the running of the society."
                correctOption="c"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="_____ kind of business only allows friends, relatives and coworkers to purchase shares and to be a part of the company"
                optionOne="partnership"
                optionTwo="private limited company"
                optionThree="public limited company"
                optionFour="multinational company"
                correctOption="b"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="Those partners who, when their business goes bankrupt, stand to lose all their personal possessions as well as their investments are known as: "
                optionOne="Dormant partners"
                optionTwo="limited liability partners"
                optionThree="ordinary partners"
                optionFour="unlimited liability partners"
                correctOption="d"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="When registering a private limited company two important documents should be provided. They are:"
                optionOne="a bylaws and a certificate of origin."
                optionTwo="a memorandum of association and articles of association."
                optionThree="a shareholders agreement and tax file number."
                optionFour="a share certificate and a debenture certificate."
                correctOption="b"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="Which of the following are NOT advantages of a private limited company?"
                optionOne="(i) and (ii) only"
                optionTwo="(ii) and (iii) only"
                optionThree="(i) and (iv) only"
                optionFour="(iii) and (iv) only"
                correctOption="b"
                hasListOption
                listOptionOne="It has an independent legal status."
                listOptionTwo="The company can't go public on the stock exchange."
                listOptionThree="The company can't have more than 50 shareholders."
                listOptionOFour="The company taxes are high than usual."
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="A sleeping partner can be referred to as a:"
                optionOne="careless partner"
                optionTwo="active partner"
                optionThree="dormant partner"
                optionFour="general partner"
                correctOption="c"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="In a partnership, an investor is a partner. What is the investor referred to in a LARGE company"
                optionOne="sole trader or only owner"
                optionTwo="manager or worker"
                optionThree="director or board member"
                optionFour="shareholder or partial owner"
                correctOption="d"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="Which of the following is NOT a function of management?"
                optionOne="Providing accomodation for employees"
                optionTwo="Coordinating the work of employees"
                optionThree="Delegating work to subordinates"
                optionFour="Controlling the use of funds"
                correctOption="a"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="The condensed version of business of business plan is contained in the "
                optionOne="executive summary"
                optionTwo="keynote summary"
                optionThree="marketing plan"
                optionFour="feasability plan"
                correctOption="a"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="A 'purchase order' is a"
                optionOne="request for additional goods"
                optionTwo="notificatio of goods received"
                optionThree="statement of outstanding debts"
                optionFour="document offering to but goods"
                correctOption="d"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="Which of the following is a regulatory issue for the entrepreneur?"
                optionOne="Using a credit card to transact business"
                optionTwo="Offering hire purchase options to customers"
                optionThree="Paying national insurance to the government"
                optionFour="Advertising the business locally and regionally"
                correctOption="c"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="A firm may change its main objectives from profil to market share if there is an increase in "
                optionOne="government regualations"
                optionTwo="competition in the market"
                optionThree="the cost of utilities and overheads"
                optionFour="the use of technology in the organization"
                correctOption="b"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="A contract may be discharged by "
                optionOne="breach"
                optionTwo="change of mind"
                optionThree="inconsideration"
                optionFour="misappropriation"
                correctOption="a"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="Which of the following is NOT an example of unethical business practice?"
                optionOne="Money laundering"
                optionTwo="Nonpayment of taxes"
                optionThree="Misleading advertisments"
                optionFour="Retrenching inefficient workers"
                correctOption="d"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="Which of the following types of of cheques allows an individual to receive cash on demand?"
                optionOne="Open"
                optionTwo="Crossed"
                optionThree="Certified"
                optionFour="Banker's"
                correctOption="a"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                question="Which of the following factors prevents an agreement from being considered a valid contact?"
                optionOne="Consideration"
                optionTwo="Legal purpose"
                optionThree="Misrepresentation"
                optionFour="Office and acceptance"
                correctOption="c"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="Which of the following are examples of secondary sources of data?"
                optionOne="i and ii only"
                optionTwo="i and iii only"
                optionThree="ii and iii only"
                optionFour="i, ii and ii only"
                correctOption="c"
                hasListOption
                listOptionOne="Company records"
                listOptionTwo="Former employees"
                listOptionThree="Government cencus"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="The term 'human resources' refers to"
                optionOne="materials and goods made by human beings"
                optionTwo="capital invested by shareholders in a company"
                optionThree="raw materials used in the manufacture of goodss"
                optionFour="persons available for productive and professional sevices"
                correctOption="d"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="Joseph has decided to leave his homeland of Jamaica and go to the USA in search of a better life. The movement is referred to as"
                optionOne="'brain drain'"
                optionTwo="early migration"
                optionThree="internal migration"
                optionFour="external migration"
                correctOption="d"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="Which of the following commodities is a prduct of the manufaturing indistry?"
                optionOne="A car"
                optionTwo="Gold"
                optionThree="Lumber"
                optionFour="A house"
                correctOption="a"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="In Trinidad, Mrs. Brown woould be referred to as"
                optionOne="a refugee"
                optionTwo="an emigrant"
                optionThree="an immigrant"
                optionFour="a travelling officer"
                correctOption="b"
                hasText
                text="Mrs. Brown receives a job offer from a company in Barbados. In order to take up this job, she decides to leave her home country of Trinidad and move permanently to Barbodos."
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                imgSrc=""
                topic=""
                question="Which of the following are examples of fixed capital?"
                optionOne="Cash balances"
                optionTwo="Bank balances"
                optionThree="Plant and machinery"
                optionFour="Stocks of raw material"
                correctOption="c"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                question="Which of the following departments is LIKELY to use its management information systems (MIS) to manage information about customers and their response to the products it sells?"
                optionOne="Finance"
                optionTwo="Marketing"
                optionThree="Production"
                optionFour="Human resource"
                correctOption="b"
              />

              {/* Question */}
              <MCQItem
                id={uuidv4()}
                question="Which of the following demonstrates the characteristics of a good leader?"
                optionOne="i and ii"
                optionTwo="i and iii"
                optionThree="ii and iii"
                optionFour="i, ii and iii"
                correctOption="b"
                hasListOption
                listOptionOne="Inspires workers"
                listOptionTwo="Delegates responsibilities"
                listOptionThree="Makes intelligent decisions"
              />
            </MCQ>
          </Container>
        </Layout>
      </>
    )
  }
}

export default Page
