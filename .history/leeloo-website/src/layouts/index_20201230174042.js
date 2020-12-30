import React from "react"
import GlobalStyle from "../assets/styles/globalStyles"
import Navbar from "../components/Navigation/Navbar"

const MainLayout = ({ children }) => (
  <>
    <GlobalStyle />
    <Navbar />
    {children}
  </>
)

export default MainLayout
