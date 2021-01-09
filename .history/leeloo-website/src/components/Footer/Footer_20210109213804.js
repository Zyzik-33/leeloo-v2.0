import * as React from "react"
import { Footer as FooterBase } from "theme-ui"
import useSiteMetadata from "../hooks/useSiteMetadata"
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

const Footer = () => {
  const siteMetadata = useSiteMetadata()

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
