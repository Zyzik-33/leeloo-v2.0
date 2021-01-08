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
    margin-top: -3rem;
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      font-size: 3em;
      margin: 0;
    }
    p {
      margin: 20px 0 40px;
      width: 100%;
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
      <h1>Mam na imię Liliia</h1>
      <p>
        Od dzieciństwa byłam zafascynowana fotografią, a dziś, stała się ona
        moją największą pasją i profesją. Najcenniejsze w robieniu zdjęć jest
        dla mnie uchwycenie naturalnych, niepowtarzalnych, żywych kadrów. Zawsze
        staram się, aby emocje były na pierwszym planie. Umiejętnie wyłapane
        momenty mogą stać się wspaniałą pamiątką na całe życie. Bardzo chętnie
        dowiem się jak wyobrażacie sobie nasze fotograficzne spotkanie oraz
        jakie są Wasze oczekiwania i plany związane z sesją.
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
