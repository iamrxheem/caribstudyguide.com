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
  CardTitle,
  Col,
  Container,
  Button,
  Form,
  FormGroup
} from "shards-react"
import $ from "jquery"
import Swal from "sweetalert2/dist/sweetalert2.js"
import { Link } from "gatsby"

class MailingListSubscribe extends React.Component {
  constructor(props) {
    super(props)

    this.state = { email: "" }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ email: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()
  }

  render() {
    return (
      <>
        <>
          <div className="form" id="mc_embed_signup">
            <Form
              action="https://cxcguide.us18.list-manage.com/subscribe/post?u=11c71b70324980ffe7d8500a6&amp;id=3c1d97be12"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              className="validate"
              target="_blank"
              novalidate
            >
              <div id="mc_embed_signup_scroll">
                <FormGroup>
                  <label for="mce-EMAIL">Subscribe to our mailing list</label>

                  <p>
                    Join our mailing list to get weekly study notes, flash cards
                    and past paper solution.
                  </p>
                  <FormInput
                    type="email"
                    value=""
                    value={this.state.email}
                    onChange={this.handleChange}
                    name="EMAIL"
                    className=""
                    id="mce-EMAIL"
                    placeholder="Enter your email"
                    required
                  />

                  <div
                    style={{ position: "absolute", left: "-5000px" }}
                    aria-hidden="true"
                  >
                    <input
                      type="text"
                      name="b_11c71b70324980ffe7d8500a6_3c1d97be12"
                      tabindex="-1"
                      value=""
                    />
                  </div>
                </FormGroup>
                <div class="clear">
                  <Button
                    style={{ width: "100px" }}
                    type="submit"
                    value="Subscribe"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                  >
                    Sign up
                  </Button>
                </div>
              </div>
            </Form>
          </div>
        </>
      </>
    )
  }
}

export default MailingListSubscribe
