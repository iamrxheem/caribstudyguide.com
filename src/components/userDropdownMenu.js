import React from "react"
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button
} from "shards-react"

// React device detect
import {
  BrowserView,
  MobileView,
  CustomView,
  isBrowser,
  isMobile
} from "react-device-detect"

class UserDropdownMenu extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = { open: false, isLoggedIn: false }
  }

  toggle() {
    this.setState(prevState => {
      return { open: !prevState.open }
    })
  }

  render() {
    return (
      <>
        {/* Displays when the user is logged in  */}
        <CustomView condition={this.state.isLoggedIn}>
          <Dropdown open={this.state.open} toggle={this.toggle} group>
            <DropdownToggle
              style={{
                backgroundColor: "transparent",
                borderColor: "transparent"
              }}
            >
              <i className="fas fa-user text-white"></i>
            </DropdownToggle>
            <DropdownMenu right={true}>
              <DropdownItem href="/account/me">
                <i
                  style={{ color: "#305F72" }}
                  className="far fa-user mr-3"
                ></i>
                My Account
              </DropdownItem>
              <DropdownItem href="/account/achievements">
                <i
                  style={{ color: "#ffb515" }}
                  className="fas fa-trophy mr-3"
                ></i>
                Achievements
              </DropdownItem>
              <DropdownItem href="/account/resources">
                <i
                  style={{ color: "#4f3a65" }}
                  class="fas fa-bookmark mr-3"
                ></i>
                Saved Resources
              </DropdownItem>

              <hr />
              <DropdownItem href="/logout/">Log out</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </CustomView>

        <CustomView condition={!this.state.isLoggedIn}>
          <Dropdown open={this.state.open} toggle={this.toggle} group>
            <DropdownToggle
              style={{
                backgroundColor: "transparent",
                borderColor: "transparent"
              }}
            >
              <i className="fas fa-user text-white"></i>
            </DropdownToggle>
            <DropdownMenu right={true}>
              <DropdownItem href="/login/">Log in</DropdownItem>

              <hr />
              <DropdownItem href="/sign-up/">Create an account</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </CustomView>
      </>
    )
  }
}

export default UserDropdownMenu
