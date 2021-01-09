import React from "react"
import { Gallery } from "gatsby-theme-gallery"
import styled from "styled-components"

const TextWrapper = styled.div`
  text-align: center;
  padding-bottom: 3rem;
`

const GalleryPage = () => (
  <>
    <Gallery />
    <TextWrapper>
      <h2>More photos in social media</h2>
      <h1>⬇⬇⬇</h1>
    </TextWrapper>
  </>
)

export default GalleryPage
