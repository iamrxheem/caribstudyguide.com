import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import DeviceInfo from "./deviceInfo"

// All Components
import Header from "./header"
import Footer from "./footer"

// CSS stuff
import "bootstrap/dist/css/bootstrap.css"
import "shards-ui/dist/css/shards.css"
import "sweetalert2/src/sweetalert2.scss"
import "../assets/css/bulma-tabs.css"
import "../assets/css/bulma-menu.css"
import "./layout.css"

import "../assets/js/tawkto.js"
import "../assets/js/onesignal.js"

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
      <div>{children}</div>
      <br />
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
