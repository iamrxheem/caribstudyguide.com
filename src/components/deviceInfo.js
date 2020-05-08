import React from "react"
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
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect"
import $ from "jquery"
import axios from "axios"

class DeviceInfo extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      width: 0,
      height: 0,
      type: "",
      country: ""
    }

    this.getDeviceData = this.getDeviceData.bind(this)
  }

  getDeviceName() {
    var deviceName = ""

    var isMobile = {
      Android: function() {
        return navigator.userAgent.match(/Android/i)
      },
      Datalogic: function() {
        return navigator.userAgent.match(/DL-AXIS/i)
      },
      Bluebird: function() {
        return navigator.userAgent.match(/EF500/i)
      },
      Honeywell: function() {
        return navigator.userAgent.match(/CT50/i)
      },
      Zebra: function() {
        return navigator.userAgent.match(/TC70|TC55/i)
      },
      BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i)
      },
      iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i)
      },
      Windows: function() {
        return navigator.userAgent.match(/IEMobile/i)
      },
      any: function() {
        return (
          isMobile.Datalogic() ||
          isMobile.Bluebird() ||
          isMobile.Honeywell() ||
          isMobile.Zebra() ||
          isMobile.BlackBerry() ||
          isMobile.Android() ||
          isMobile.iOS() ||
          isMobile.Windows()
        )
      }
    }

    if (isMobile.Datalogic()) deviceName = "Datalogic"
    else if (isMobile.Bluebird()) deviceName = "Bluebird"
    else if (isMobile.Honeywell()) deviceName = "Honeywell"
    else if (isMobile.Zebra()) deviceName = "Zebra"
    else if (isMobile.BlackBerry()) deviceName = "BlackBerry"
    else if (isMobile.iOS()) deviceName = "iOS"
    else if (deviceName == "" && isMobile.Android()) deviceName = "Android"
    else if (deviceName == "" && isMobile.Windows()) deviceName = "Windows"

    if (deviceName != "") {
      console.log("Devices information deviceName = " + deviceName)
      console.log("Devices information any = " + isMobile.any())
      console.log("navigator.userAgent = " + navigator.userAgent)
    }

    return deviceName
  }

  getDeviceData() {
    let userCountry = ""

    if (process.browser) {
      this.setState({
        width: window.innerWidth
      })

      this.setState({ height: $(window).height() })

      // Get device name
      this.setState({ type: this.getDeviceName() })
    }
  }

  componentDidMount() {
    this.getDeviceData()
  }

  render() {
    return (
      <>
        <Container>
          <br />
          <span className="mr-3">
            Width: <b>{this.state.width}px</b>
          </span>
          <span className="mr-3">
            Height: <b>{this.state.height}px</b>
          </span>
          <span className="mr-3">
            OS: <b>{this.state.type}</b>
          </span>
        </Container>
      </>
    )
  }
}

export default DeviceInfo
