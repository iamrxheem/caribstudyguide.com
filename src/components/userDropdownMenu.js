import React from "react"
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button
} from "shards-react"

class UserDropdownMenu extends React.Component {
  constructor(props) {
    super(props)
    this.toggle = this.toggle.bind(this)
    this.state = { open: false }
  }

  toggle() {
    this.setState(prevState => {
      return { open: !prevState.open }
    })
  }

  render() {
    return (
      <>
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
            <DropdownItem href="/">Account</DropdownItem>
            <DropdownItem href="/">Another action</DropdownItem>
            <DropdownItem href="/">Something else here</DropdownItem>

            <hr />
            <DropdownItem href="/logout/">Log out</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </>
    )
  }
}

export default UserDropdownMenu
