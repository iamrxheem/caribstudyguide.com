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
import CSECLayout from "../CSECLayout"

const SpanishLayout = props => {
  return (
    <>
      <CSECLayout>
        <Row>
          <Col sm={12} md={4} lg={4}>
            <aside class="menu box">
              <p class="menu-label">Overview</p>
              <ul class="menu-list">
                <li>
                  <a
                    className={props.active == "overview" ? "is-active" : ""}
                    href="/study/csec/spanish/"
                  >
                    Overview
                  </a>
                </li>
                <li>
                  <a href="/study/csec/spanish/exam-structure/">
                    Exam Structure
                  </a>
                  <ul>
                    <li>
                      <a href="/study/csec/spanish/exam-structure/directed-situations/">
                        Directed Situations
                      </a>
                      <a href="/study/csec/spanish/exam-structure/letter-writing/">
                        Letter Writing
                      </a>
                      <a href="/study/csec/spanish/exam-structure/composition/">
                        Composition
                      </a>
                      <a href="/study/csec/spanish/exam-structure/contextual-announcement/">
                        Contextual Announcement
                      </a>
                      <a href="/study/csec/spanish/exam-structure/contextual-dialogue/">
                        Contextual Dialogue
                      </a>
                      <a href="/study/csec/spanish/exam-structure/reading-comprehension/">
                        Reading Comprehension
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <p class="menu-label">Tenses</p>
              <ul class="menu-list">
                {/* Present Tense */}
                <li>
                  <a href="/study/csec/spanish/tenses/present/">
                    Present Tense
                  </a>
                  <ul>
                    <li>
                      <a href="/study/csec/spanish/tenses/present/regular-verbs/">
                        Regular Verbs
                      </a>
                      <a href="/study/csec/spanish/tenses/present/irregular-verbs/">
                        Irregular Verbs
                      </a>
                      <a href="/study/csec/spanish/tenses/present/exercises/">
                        Exercises
                      </a>
                    </li>
                  </ul>

                  {/* Present Progressive */}
                  <a href="/study/csec/spanish/tenses/present-progressive/">
                    Present Progressive
                  </a>

                  {/* Preterite Tense */}
                  <a href="/study/csec/spanish/tenses/preterite/">
                    Preterite Tense
                  </a>
                  <ul>
                    <li>
                      <a href="/study/csec/spanish/tenses/present/regular-verbs/">
                        Regular Verbs
                      </a>
                      <a href="/study/csec/spanish/tenses/present/irregular-verbs/">
                        Irregular Verbs
                      </a>
                      <a href="/study/csec/spanish/tenses/present/exercises/">
                        Exercises
                      </a>
                    </li>
                  </ul>

                  {/* Imperfect Tense */}
                  <a href="/study/csec/spanish/tenses/imperfect/">
                    Imperfect Tense
                  </a>

                  {/* Conditional Tense */}
                  <a href="/study/csec/spanish/tenses/conditional/">
                    Conditional Tense
                  </a>
                  <ul>
                    <li>
                      <a href="/study/csec/spanish/tenses/present/regular-verbs/">
                        Regular Verbs
                      </a>
                      <a href="/study/csec/spanish/tenses/present/irregular-verbs/">
                        Irregular Verbs
                      </a>
                      <a href="/study/csec/spanish/tenses/present/exercises/">
                        Exercises
                      </a>
                    </li>
                  </ul>

                  {/* Future Tense */}
                  <a href="/study/csec/spanish/tenses/future/">Future Tense</a>
                  <ul>
                    <li>
                      <a href="/study/csec/spanish/tenses/present/regular-verbs/">
                        Regular Verbs
                      </a>
                      <a href="/study/csec/spanish/tenses/present/irregular-verbs/">
                        Irregular Verbs
                      </a>
                      <a href="/study/csec/spanish/tenses/present/exercises/">
                        Exercises
                      </a>
                    </li>
                  </ul>

                  {/* Prefect Tense */}
                  <a href="/study/csec/spanish/tenses/perfect/">
                    Perfect Tense
                  </a>

                  {/* Past Perfect Tense */}
                  <a href="/study/csec/spanish/tenses/past-perfect/">
                    Past Perfect Tense
                  </a>
                </li>

                <li>
                  <a></a>
                </li>
              </ul>
              <p class="menu-label">Transactions</p>
              <ul class="menu-list">
                <li>
                  <a></a>
                </li>
              </ul>
            </aside>
          </Col>
          <Col sm={12} md={8} lg={8}>
            <>{props.children}</>
          </Col>
        </Row>
      </CSECLayout>
    </>
  )
}

export default SpanishLayout
