import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import DeviceInfo from "./deviceInfo"
import ReactGA from "react-ga"

// All Components
import Header from "./header"
import Footer from "./footer"
import Imports from "./imports"

// CSS stuff
import "bootstrap/dist/css/bootstrap.css"
import "shards-ui/dist/css/shards.css"
import "sweetalert2/src/sweetalert2.scss"
import "../assets/css/bulma-tabs.css"
import "../assets/css/bulma-menu.css"
import "./layout.css"

import "../assets/js/mailchimp.js"
import "../assets/js/g-tag-manager.js"
import "../assets/js/tawkto.js"
import "../assets/js/onesignal.js"
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect"

ReactGA.initialize("UA-165932729-1")

if (process.browser) {
  ReactGA.pageview(window.location.pathname + window.location.search)
}

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Imports />
      <BrowserView>
        <br />
      </BrowserView>
      <div>{children}</div>
      <iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-NWGL3N3"
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
      ></iframe>
      <br />
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
