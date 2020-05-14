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
      $("." + this.props.id).attr("disabled", true)
      $(this.props.id).prop("disabled", true)
      $("." + this.props.id).prop("disabled", true)

      Swal.fire({
        icon: "success",
        title: "Correct",
        text: "That's right. Congrats!"
      })
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "That answer isn't correct. Try again!",
        footer: "<a href>More on this topic here</a>"
      })
    }

    event.preventDefault()
  }

  render() {
    return (
      <div style={{ margin: "5px" }}>
        <Bounce>
          <p>{this.props.question}</p>

          <CustomView condition={this.props.hasImg}>
            <img
              style={{ width: "100%" }}
              src="https://www.swedishnomad.com/wp-content/images/2019/08/Spanish-Words-2.jpg"
            />
            <br />
            <br />
          </CustomView>

          <CustomView condition={this.props.hasAudio}>
            <Audio src={this.props.audioSrc} />
            <br />
            <br />
          </CustomView>

          <Form>
            {/* Option A*/}
            <FormRadio
              name=""
              checked={this.state.selectedAnswer === "a"}
              onChange={() => {
                this.changeAnswer("a")
              }}
            >
              {this.props.optionOne}
            </FormRadio>

            {/* Option A*/}
            <FormRadio
              name=""
              checked={this.state.selectedAnswer === "b"}
              onChange={() => {
                this.changeAnswer("b")
              }}
            >
              {this.props.optionTwo}
            </FormRadio>

            {/* Option C */}
            <FormRadio
              name=""
              checked={this.state.selectedAnswer === "c"}
              onChange={() => {
                this.changeAnswer("c")
              }}
            >
              {this.props.optionThree}
            </FormRadio>

            {/* Option D*/}
            <FormRadio
              name=""
              checked={this.state.selectedAnswer === "d"}
              onChange={() => {
                this.changeAnswer("d")
              }}
            >
              {this.props.optionFour}
            </FormRadio>
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
        </Bounce>
      </div>
    )
  }
}

export default MCQItem
