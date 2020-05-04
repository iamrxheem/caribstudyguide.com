import React from "react"
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
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
  Button,
  Form,
  FormGroup
} from "shards-react"
import $ from "jquery"

class MailingListSubscribe extends React.Component {
  constructor(props) {
    super(props)

    this.state = { value: "" }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()

    var $form = $(this)
    $.post($form.attr("action"), $form.serialize()).then(function() {
      alert("Thank you!")
    })
  }

  render() {
    return (
      <>
        <>
          <form
            if
            name="footer-embed-mailing-list-subscribe"
            method="POST"
            data-netlify="true"
          >
            <FormGroup>
              <label htmlFor="email">
                <p>
                  <b>Join our mailing list</b> for weelkly study notes and
                  exercises.
                </p>
              </label>
              <FormInput
                type="email"
                id="value"
                placeholder="Enter your email"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </FormGroup>

            <input
              className="btn btn-primary"
              type="submit"
              value="Submit"
              onChange={this.handleChange}
            />
          </form>

          <br />
        </>
      </>
    )
  }
}

export default MailingListSubscribe
