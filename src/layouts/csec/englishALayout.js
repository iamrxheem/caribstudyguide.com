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

const EnglishALayout = props => {
  return (
    <>
      <CSECLayout>
        <Row>
          <Col sm={12} md={4} lg={4}>
            <aside class="menu box">
              <p class="menu-label">Overview</p>
              <ul class="menu-list">
                <li>
                  <a href="/study/csec/english-a/">Overview</a>
                </li>
                <li>
                  <a href="/study/csec/english-a/exam-structure/">
                    Exam Structure
                  </a>
                </li>
              </ul>
              <p class="menu-label">Topics</p>
              <ul class="menu-list">
                <li>
                  <a href="/study/csec/english-a/topics/summary-writing/">
                    Summary Writing
                  </a>
                  <a href="/study/csec/english-a/topics//"></a>
                  <a href="/study/csec/english-a/topics//"></a>
                  <a href="/study/csec/english-a/topics/letter-writing/">
                    Letter Writing
                  </a>
                </li>
                <li>
                  <a>Manage Your Team</a>
                  <ul>
                    <li>
                      <a>Members</a>
                    </li>
                    <li>
                      <a>Plugins</a>
                    </li>
                    <li>
                      <a>Add a member</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>Invitations</a>
                </li>
                <li>
                  <a>Cloud Storage Environment Settings</a>
                </li>
                <li>
                  <a>Authentication</a>
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

export default EnglishALayout
