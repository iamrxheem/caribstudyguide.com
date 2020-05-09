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
  CardImg,
  Modal,
  ModalHeader,
  ModalBody
} from "shards-react"
import { Zoom, Bounce, Fade, Flip, Rotate, Roll } from "react-reveal"
import CSECLayout from "../CSECLayout"

import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect"

class SpanishLayout extends React.Component {
  constructor(props) {
    super(props)

    this.state = { open: false }
    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    this.setState({
      open: !this.state.open
    })
  }

  render() {
    return (
      <>
        <CSECLayout>
          <Row>
            <Col sm={12} md={4} lg={4}>
              <BrowserView>
                <aside class="menu box">
                  <p class="menu-label">Overview</p>
                  <ul class="menu-list">
                    <li>
                      <a
                        className={
                          this.props.active === "overview" ? "is-active" : ""
                        }
                        href="/study/csec/spanish/"
                      >
                        Overview
                      </a>
                    </li>
                    <li>
                      <a
                        className={this.props.active === "" ? "is-active" : ""}
                        href="/study/csec/spanish/exam-structure/"
                      >
                        Exam Structure
                      </a>
                      <ul>
                        <li>
                          <a
                            className={
                              this.props.active === "directed-situations"
                                ? "is-active"
                                : ""
                            }
                            href="/study/csec/spanish/exam-structure/directed-situations/"
                          >
                            Directed Situations
                          </a>
                          <a
                            className={
                              this.props.active === "letter-writing"
                                ? "is-active"
                                : ""
                            }
                            href="/study/csec/spanish/exam-structure/letter-writing/"
                          >
                            Letter Writing
                          </a>
                          <a
                            className={
                              this.props.active === "composition"
                                ? "is-active"
                                : ""
                            }
                            href="/study/csec/spanish/exam-structure/composition/"
                          >
                            Composition
                          </a>
                          <a
                            className={
                              this.props.active === "contextual-announcement"
                                ? "is-active"
                                : ""
                            }
                            href="/study/csec/spanish/exam-structure/contextual-announcement/"
                          >
                            Contextual Announcement
                          </a>
                          <a
                            className={
                              this.props.active === "contextual-dialogue"
                                ? "is-active"
                                : ""
                            }
                            href="/study/csec/spanish/exam-structure/contextual-dialogue/"
                          >
                            Contextual Dialogue
                          </a>
                          <a
                            className={
                              this.props.active === "reading-comprehension"
                                ? "is-active"
                                : ""
                            }
                            href="/study/csec/spanish/exam-structure/reading-comprehension/"
                          >
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
                      <a
                        className={this.props.active === "" ? "is-active" : ""}
                        href="/study/csec/spanish/tenses/present/"
                      >
                        Present Tense
                      </a>
                      <ul>
                        <li>
                          <a
                            className={
                              this.props.active === "" ? "is-active" : ""
                            }
                            href="/study/csec/spanish/tenses/present/regular-verbs/"
                          >
                            Regular Verbs
                          </a>
                          <a
                            className={
                              this.props.active === "" ? "is-active" : ""
                            }
                            href="/study/csec/spanish/tenses/present/irregular-verbs/"
                          >
                            Irregular Verbs
                          </a>
                          <a
                            className={
                              this.props.active === "" ? "is-active" : ""
                            }
                            href="/study/csec/spanish/tenses/present/exercises/"
                          >
                            Exercises
                          </a>
                        </li>
                      </ul>

                      {/* Present Progressive */}
                      <a
                        className={this.props.active === "" ? "is-active" : ""}
                        href="/study/csec/spanish/tenses/present-progressive/"
                      >
                        Present Progressive
                      </a>

                      {/* Preterite Tense */}
                      <a
                        className={this.props.active === "" ? "is-active" : ""}
                        href="/study/csec/spanish/tenses/preterite/"
                      >
                        Preterite Tense
                      </a>
                      <ul>
                        <li>
                          <a
                            className={
                              this.props.active === "present-tense-regular"
                                ? "is-active"
                                : ""
                            }
                            href="/study/csec/spanish/tenses/present/regular-verbs/"
                          >
                            Regular Verbs
                          </a>
                          <a
                            className={
                              this.props.active === "present-tense-irregular"
                                ? "is-active"
                                : ""
                            }
                            href="/study/csec/spanish/tenses/present/irregular-verbs/"
                          >
                            Irregular Verbs
                          </a>
                          <a
                            className={
                              this.props.active === "present-tense-exercises"
                                ? "is-active"
                                : ""
                            }
                            href="/study/csec/spanish/tenses/present/exercises/"
                          >
                            Exercises
                          </a>
                        </li>
                      </ul>

                      {/* Imperfect Tense */}
                      <a
                        className={
                          this.props.active === "imperfect-tense"
                            ? "is-active"
                            : ""
                        }
                        href="/study/csec/spanish/tenses/imperfect/"
                      >
                        Imperfect Tense
                      </a>

                      {/* Conditional Tense */}
                      <a
                        className={
                          this.props.active === "conditional-tense"
                            ? "is-active"
                            : ""
                        }
                        href="/study/csec/spanish/tenses/conditional/"
                      >
                        Conditional Tense
                      </a>
                      <ul>
                        <li>
                          <a
                            className={
                              this.props.active === "conditional-tense-regular"
                                ? "is-active"
                                : ""
                            }
                            href="/study/csec/spanish/tenses/present/regular-verbs/"
                          >
                            Regular Verbs
                          </a>
                          <a
                            className={
                              this.props.active ===
                              "conditional-tense-irregular"
                                ? "is-active"
                                : ""
                            }
                            href="/study/csec/spanish/tenses/present/irregular-verbs/"
                          >
                            Irregular Verbs
                          </a>
                          <a
                            className={
                              this.props.active ===
                              "conditional-tense-exercises"
                                ? "is-active"
                                : ""
                            }
                            href="/study/csec/spanish/tenses/present/exercises/"
                          >
                            Exercises
                          </a>
                        </li>
                      </ul>

                      {/* Future Tense */}
                      <a
                        className={
                          this.props.active === "future-tense"
                            ? "is-active"
                            : ""
                        }
                        href="/study/csec/spanish/tenses/future/"
                      >
                        Future Tense
                      </a>
                      <ul>
                        <li>
                          <a
                            className={
                              this.props.active === "future-tense-regular"
                                ? "is-active"
                                : ""
                            }
                            href="/study/csec/spanish/tenses/present/regular-verbs/"
                          >
                            Regular Verbs
                          </a>
                          <a
                            className={
                              this.props.active === "future-tense-irregular"
                                ? "is-active"
                                : ""
                            }
                            href="/study/csec/spanish/tenses/present/irregular-verbs/"
                          >
                            Irregular Verbs
                          </a>
                          <a
                            className={
                              this.props.active === "future-tense-exercises"
                                ? "is-active"
                                : ""
                            }
                            href="/study/csec/spanish/tenses/present/exercises/"
                          >
                            Exercises
                          </a>
                        </li>
                      </ul>

                      {/* Prefect Tense */}
                      <a
                        className={
                          this.props.active === "perfect-tense"
                            ? "is-active"
                            : ""
                        }
                        href="/study/csec/spanish/tenses/perfect/"
                      >
                        Perfect Tense
                      </a>

                      {/* Past Perfect Tense */}
                      <a
                        className={
                          this.props.active === "past-perfect-tense"
                            ? "is-active"
                            : ""
                        }
                        href="/study/csec/spanish/tenses/past-perfect/"
                      >
                        Past Perfect Tense
                      </a>
                    </li>
                  </ul>
                </aside>
              </BrowserView>

              <MobileView>
                <Container>
                  <a href="#menu" onClick={this.toggle}>
                    Menu
                  </a>
                </Container>

                <Modal size="sm" open={this.state.open} toggle={this.toggle}>
                  <ModalHeader>Menu</ModalHeader>
                  <ModalBody>
                    <p>Select an option from the list below:</p>

                    <aside className="menu">
                      <p class="menu-label">Overview</p>

                      <ul className="menu-list">
                        <li>
                          <a className="my-blue" href="/">
                            Overview
                          </a>
                          <a className="my-blue" href="/">
                            Exam Structure
                          </a>
                        </li>
                      </ul>
                    </aside>
                  </ModalBody>
                </Modal>
              </MobileView>
            </Col>
            <Col sm={12} md={8} lg={8}>
              <>{this.props.children}</>
            </Col>
          </Row>
        </CSECLayout>
      </>
    )
  }
}

export default SpanishLayout
