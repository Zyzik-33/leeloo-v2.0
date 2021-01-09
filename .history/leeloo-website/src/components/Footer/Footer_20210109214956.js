import * as React from "react"
// import { Footer as FooterBase } from "theme-ui"
import styled from "styled-components"
import { Facebook, Instagram } from "@styled-icons/entypo-social"

const FacebookIcon = styled(Facebook)`
  color: #292929;
  margin: 20px;
`
const InstagramIcon = styled(Instagram)`
  color: #292929;
  margin: 20px;
`

const FooterWrapper = styled.footer`
        position: "fixed",
        left: 0,
        bottom: 0,
        width: "100%",
        padding: "0 1.5rem",
        backgroundColor: "#fffaf5",
        fontSize: 1,
        alignItems: "center",
        justifyContent: "center",
`

const Footer = () => {
  return (
    <FooterBase>
      <a href="https://facebook.com/drahomaretskaphotography" target="_blank">
        <FacebookIcon size="20" title="Facebook Icon" />
      </a>
      <a href="https://instagram.com/drahomaretska.photography" target="_blank">
        <InstagramIcon size="20" title="Instagram Icon" />
      </a>
    </FooterBase>
  )
}

export default Footer
