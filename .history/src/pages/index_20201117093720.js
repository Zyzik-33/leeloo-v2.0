import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
// import styled from 'styled-components'
// import Navigation from '../components/Navigation/Navigation'

const ContentWrapper = styled.div`
  width: 60%;
  text-align: right;

`;

const IndexPage = ({data}) => (
  <>
    <ContentWrapper>
      <h1>Hello leeloo</h1>
      <p>Lorem Ipsum jest tekstem stosowanym jako przykładowy
      wypełniacz w przemyśle poligraficznym. Został po raz 
      pierwszy użyty w XV w. przez nieznanego drukarza do
        wypełnienia tekstem próbnej książki. Pięć wieków 
        później zaczął być używany przemyśle elektronicznym, 
        pozostając praktycznie niezmienionym.</p>
    </ContentWrapper>
    <img src={data.file.publicURL} alt='leeloo' />
  </>
)

export const query = graphql`
  {
    __typename
    file(name: {eq: "header_img"}) {
      publicURL
    }
  }
`

export default IndexPage;