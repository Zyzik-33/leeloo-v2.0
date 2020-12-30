import React from "react"
import GlobalStyle from "../assets/styles/globalStyles"
import Navigation from "../components/Navigation/Navigation"
import Navbar from "../components/Navigation/Navbar"

const MainLayout = ({ children }) => (
  <>
    <GlobalStyle />
    {/* <Navigation /> */}
    <Navbar />
    {children}
  </>
)

export default MainLayout
