import React from "react"
import { graphql } from "gatsby"
// import styled from 'styled-components'
// import Navigation from '../components/Navigation/Navigation'


const IndexPage = ({data}) => (
  <>
    <h1>Hello leeloo</h1>
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