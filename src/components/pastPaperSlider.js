import React from "react"

import {
  Alert,
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
  Button
} from "shards-react"
import Img from "react-image"

const imgStyle = {
  height: "250px",
  width: "170px"
}

class PastPaperSlider extends React.Component {
  render() {
    return (
      <>
        <br />
        <br />
        <Container fluid>
          <ul className="bulma-tabs">
            {/* Subject: Additional Mathematics */}
            <li className="mr-2">
              <a
                href="https://cxc-store.com/csec-additional-mathematics-past-papers-ebook.html"
                target="_blank"
              >
                <Img
                  style={imgStyle}
                  src={[
                    "https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230482357_25.jpg",
                    "",
                    ""
                  ]}
                  className="card-img"
                />
              </a>
            </li>

            {/* Subject: Biology*/}
            <li className="mr-2">
              <a
                href="https://cxc-store.com/csec-biology-past-papers-ebook.html"
                target="_blank"
              >
                <Img
                  style={imgStyle}
                  src={[
                    "https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230482456_25.jpg",
                    "",
                    ""
                  ]}
                  className="card-img"
                />
              </a>
            </li>

            {/* Subject: Mathematics */}
            <li className="mr-2">
              <a
                href="https://cxc-store.com/csec-mathematics-past-papers-ebook.html"
                target="_blank"
              >
                <Img
                  style={imgStyle}
                  src={[
                    "https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230482784_5.jpg",
                    "",
                    ""
                  ]}
                  className="card-img"
                />
              </a>
            </li>

            {/* Subject: English A */}
            <li className="mr-2">
              <a
                href="https://cxc-store.com/csec-english-a-past-papers-ebook.html"
                target="_blank"
              >
                <Img
                  style={imgStyle}
                  src={[
                    "https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230482616_3.jpg",
                    "",
                    ""
                  ]}
                  className="card-img"
                />
              </a>
            </li>

            {/* Subject: Chemistry  */}
            <li className="mr-2">
              <a
                href="https://cxc-store.com/csec-chemistry-past-papers-ebook.html"
                target="_blank"
              >
                <Img
                  style={imgStyle}
                  src={[
                    "https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230482661_25.jpg",
                    "",
                    ""
                  ]}
                  className="card-img"
                />
              </a>
            </li>

            {/* Subject: French */}
            <li className="mr-2">
              <a
                href="https://cxc-store.com/csec-french-past-papers-ebook.html"
                target="_blank"
              >
                <Img
                  style={imgStyle}
                  src={[
                    "https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230481930_3.jpg",
                    "",
                    ""
                  ]}
                  className="card-img"
                />
              </a>
            </li>

            {/* Subject: Geography  */}
            <li className="mr-2">
              <a
                href="https://cxc-store.com/csec-geography-past-papers-ebook.html"
                target="_blank"
              >
                <Img
                  style={imgStyle}
                  src={[
                    "https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230482678_3.jpg",
                    "",
                    ""
                  ]}
                  className="card-img"
                />
              </a>
            </li>

            {/* Subject: Information Technology */}
            <li className="mr-2">
              <a
                href="https://cxc-store.com/csec-information-technology-past-papers-ebook.html"
                target="_blank"
              >
                <Img
                  style={imgStyle}
                  src={[
                    "https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230482586_3.jpg",
                    "",
                    ""
                  ]}
                  className="card-img"
                />
              </a>
            </li>

            {/* Subject: Office Administration */}
            <li className="mr-2">
              <a
                href="https://cxc-store.com/csec-office-administration-past-papers-ebook.html"
                target="_blank"
              >
                <Img
                  style={imgStyle}
                  src={[
                    "https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230482371_3.jpg",
                    "",
                    ""
                  ]}
                  className="card-img"
                />
              </a>
            </li>

            {/* Subject: Physics */}
            <li className="mr-2">
              <a
                href="https://cxc-store.com/csec-physics-past-papers-ebook.html"
                target="_blank"
              >
                <Img
                  style={imgStyle}
                  src={[
                    "https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230482234_5.jpg",
                    "",
                    ""
                  ]}
                  className="card-img"
                />
              </a>
            </li>

            {/* Subject: Integrated Science */}
            <li className="mr-2">
              <a
                href="https://cxc-store.com/csec-principles-of-business-past-papers-ebook.html"
                target="_blank"
              >
                <Img
                  style={imgStyle}
                  src={[
                    "https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230482876_3.jpg",
                    "",
                    ""
                  ]}
                  className="card-img"
                />
              </a>
            </li>

            {/* Subject: Principles of Accounts */}
            <li className="mr-2">
              <a
                href="https://cxc-store.com/csec-principles-of-business-past-papers-ebook.html"
                target="_blank"
              >
                <Img
                  style={imgStyle}
                  src={[
                    "https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230482494_3.jpg",
                    "",
                    ""
                  ]}
                  className="card-img"
                />
              </a>
            </li>
          </ul>
        </Container>
      </>
    )
  }
}

export default PastPaperSlider
