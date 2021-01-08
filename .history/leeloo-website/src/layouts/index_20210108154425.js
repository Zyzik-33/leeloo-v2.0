import React from "react"
import GlobalStyle from "../assets/styles/globalStyles"
import Navbar from "../components/Navigation/Navbar"
import Footer from "../../node_modules/gatsby-theme-gallery/src/components/Footer"

const MainLayout = ({ children }) => (
  <>
    <GlobalStyle />
    <Navbar />
    {children}
    <Footer />
  </>
)

export default MainLayout
