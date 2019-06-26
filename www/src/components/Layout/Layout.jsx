// vendors
import React from "react"
import PropTypes from "prop-types"
import { Global } from "@emotion/core"

// styles
import "normalize.css"
import "../../fonts/gt-pressura/gt-pressura.css"
import globalStyle from "../../styles/global"

// components
import MetaNavigation from "./../MetaNavigation"
import Footer from "../Footer"

const Layout = ({ children }) => (
  <>
    <Global styles={globalStyle} />

    <MetaNavigation />

    <main>{children}</main>

    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
