import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Image from "gatsby-image"
// import Post from "../components/Post/Post"

const ContentWrapper = styled.div`
  width: 60%;
  height: calc(100vh - 80px);
  text-align: right;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  h1 {
    font-size: 85px;
    margin: 0;
  }
  p {
    margin: 20px 0 40px;
    width: 40%;
  }
  @media (max-width: 1024px) {
    margin-top: -7rem;
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      font-size: 85px;
      margin: 0;
    }
    p {
      margin: 20px 0 40px;
      width: 40%;
    }
  }
`

const StyledImage = styled(Image)`
  position: absolute !important;
  top: 0;
  right: 0;
  width: 40%;
  height: 100vh;
  object-fit: cover;
  @media (max-width: 1024px) {
    position: absolute !important;
    top: 86%;
    right: 0;
    width: 100%;
    height: 100vh;
    object-fit: cover;
  } ;
`

const IndexPage = ({ data }) => (
  <>
    <ContentWrapper>
      {/* <Post /> */}
      <h1>Hello leeloo</h1>
      <p>
        Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w
        przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez
        nieznanego drukarza do wypełnienia tekstem próbnej książki. Pięć wieków
        później zaczął być używany przemyśle elektronicznym, pozostając
        praktycznie niezmienionym.
      </p>
    </ContentWrapper>
    <StyledImage fluid={data.file.childImageSharp.fluid} />
  </>
)

export const query = graphql`
  {
    file(name: { eq: "header_img" }, childImageSharp: { fixed: {} }) {
      childImageSharp {
        fluid(maxWidth: 800, maxHeight: 1200, quality: 90) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default IndexPage
