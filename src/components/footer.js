import React from "react"
import { Row, Col, Container } from "shards-react"

const Footer = props => {
  return (
    <>
      <footer>
        <div className="bg-dark">
          <br />
          <Container>
            <Row>
              <Col sm={12} md={4} lg={4}>
                <p style={{ color: "white" }}>.....</p>
              </Col>
              <Col sm={12} md={4} lg={4}>
                <p style={{ color: "white" }}>.....</p>
              </Col>
              <Col sm={12} md={4} lg={4}>
                <p style={{ color: "white" }}>.....</p>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="bg-light">
          <br />
          <br />
          <Container>
            <Row>
              <Col sm={12} md={4} lg={4}>
                <p style={{ color: "black" }}>.....</p>
              </Col>
              <Col sm={12} md={4} lg={4}>
                <p style={{ color: "black" }}>.....</p>
              </Col>
              <Col sm={12} md={4} lg={4}>
                <h5>Disclaimers and Policies</h5>
                <br />
                <ul className="ul">
                  <li>
                    <a href="/privacy/">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="/terms/">Terms of Use</a>
                  </li>
                  <li>
                    <a href="/tutor-policy/">Tutor Policy</a>
                  </li>
                  <li>
                    <a href="/content-sharing-policy/">
                      Content Sharing Policy
                    </a>
                  </li>
                  <li>
                    <a href="/discord-policy/">Discord Guidelines & Terms</a>
                  </li>
                </ul>
              </Col>
            </Row>
            <br />
          </Container>
        </div>
      </footer>
    </>
  )
}

export default Footer
