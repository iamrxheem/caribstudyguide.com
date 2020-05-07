import React from "react"
import Sidebar from "react-sidebar"
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
  Button
} from "shards-react"

class CSECLayout extends React.Component {
  constructor(props) {
    super(props)

    this.state = { sidebarOpen: false }

    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this)
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open })
  }

  render() {
    return (
      <>
        <Sidebar
          sidebar={
            <>
              <>
                <Nav
                  style={{ margin: "0 auto" }}
                  className="flex-column text-center"
                >
                  <NavItem>
                    <NavLink active href="#">
                      Active
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#">Link</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#">Another Link</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink disabled href="#">
                      Disabled Link
                    </NavLink>
                  </NavItem>
                </Nav>
              </>
            </>
          }
          open={this.state.sidebarOpen}
          onSetOpen={this.onSetSidebarOpen}
          styles={{
            sidebar: { background: "white", width: "300px", margin: "0 auto" }
          }}
        >
          <a onClick={() => this.onSetSidebarOpen(true)}>.</a>
          <>{this.props.children}</>
        </Sidebar>
      </>
    )
  }
}

export default CSECLayout
