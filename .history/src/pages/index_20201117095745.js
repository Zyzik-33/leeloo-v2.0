import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
// import styled from 'styled-components'
// import Navigation from '../components/Navigation/Navigation'

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
  }
`;

const ImageWrapper = styled.img`
  position absolute;
  top: 0;
  right: 0;
  width: 40%
  object-fit: cover;
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
    <ImageWrapper src={data.file.publicURL} alt='leeloo' />
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