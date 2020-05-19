import React from "react"
import { Link } from "gatsby"
import $ from "jquery"

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
  CardImg,
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
  FormRadio,
  Container,
  CardFooter,
  Button
} from "shards-react"
import Swal from "sweetalert2"
import {
  BrowserView,
  MobileView,
  CustomView,
  isBrowser,
  isMobile
} from "react-device-detect"
import Audio from "./audio"
import Carousel from "react-bootstrap/Carousel"

import { Zoom, Bounce, Fade, Flip, Rotate, Roll } from "react-reveal"

class MCQItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedAnswer: ""
    }

    this.changeAnswer = this.changeAnswer.bind(this)
    this.onSelect = this.onSelect.bind(this)
  }

  changeAnswer(answer) {
    this.setState({
      selectedAnswer: answer
    })
  }

  onSelect(event) {
    if (this.state.selectedAnswer === this.props.correctOption) {
      Swal.fire({
        icon: "success",
        title: "Correct",
        text: "That's right. Congrats!",
        footer: this.props.note
      }).then(() => {
        $("#next-button").click()
      })
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "That answer isn't correct. Try again!",
        footer: ""
      })
    }

    event.preventDefault()
  }

  render() {
    return (
      <Fade>
        <div style={{ margin: "5px", width: "auto" }}>
          <CustomView condition={this.props.hasText}>
            <h6>
              <i>This question is based of the following extract</i>
            </h6>

            <p>{this.props.text}</p>
          </CustomView>

          <p>{this.props.question}</p>

          <CustomView condition={this.props.hasImg}>
            <img alt="" style={{ width: "100%" }} src={this.props.imgSrc} />
            <br />
            <br />
          </CustomView>

          <CustomView condition={this.props.hasAudio}>
            <Audio src={this.props.audioSrc} />
            <br />
            <br />
          </CustomView>

          <CustomView condition={this.props.hasListOption}>
            <ul style={{ listStyleType: "lower-roman" }}>
              <li>{this.props.listOptionOne}</li>
              <li>{this.props.listOptionTwo}</li>
              <li>{this.props.listOptionThree}</li>
              <li>{this.props.listOptionOFour}</li>
            </ul>
            <br />
          </CustomView>

          <Form>
            <CustomView condition={!this.props.isTrueFalse}>
              {/* Option A*/}
              <FormGroup>
                <FormRadio
                  name=""
                  checked={this.state.selectedAnswer === "a"}
                  onChange={() => {
                    this.changeAnswer("a")
                  }}
                >
                  {this.props.optionOne}
                </FormRadio>
              </FormGroup>

              {/* Option B */}
              <FormGroup>
                <FormRadio
                  name=""
                  checked={this.state.selectedAnswer === "b"}
                  onChange={() => {
                    this.changeAnswer("b")
                  }}
                >
                  {this.props.optionTwo}
                </FormRadio>
              </FormGroup>

              {/* Option C */}
              <FormGroup>
                <FormRadio
                  name=""
                  checked={this.state.selectedAnswer === "c"}
                  onChange={() => {
                    this.changeAnswer("c")
                  }}
                >
                  {this.props.optionThree}
                </FormRadio>
              </FormGroup>

              {/* Option D */}
              <FormGroup>
                <FormRadio
                  name=""
                  checked={this.state.selectedAnswer === "d"}
                  onChange={() => {
                    this.changeAnswer("d")
                  }}
                >
                  {this.props.optionFour}
                </FormRadio>
              </FormGroup>
            </CustomView>

            <CustomView condition={this.props.isTrueFalse}>
              {/* True */}
              <FormGroup>
                <FormRadio
                  name=""
                  checked={this.state.selectedAnswer === "T"}
                  onChange={() => {
                    this.changeAnswer("T")
                  }}
                >
                  TRUE
                </FormRadio>
              </FormGroup>

              {/* False */}
              <FormGroup>
                <FormRadio
                  name=""
                  checked={this.state.selectedAnswer === "F"}
                  onChange={() => {
                    this.changeAnswer("F")
                  }}
                >
                  FALSE
                </FormRadio>
              </FormGroup>
            </CustomView>
          </Form>

          <br />

          <Button
            id={this.props.id}
            name={this.props.id}
            className={this.props.id}
            theme="primary"
            onClick={this.onSelect}
          >
            <b>Check answer</b>
          </Button>

          <br />
        </div>
      </Fade>
    )
  }
}

export default MCQItem
