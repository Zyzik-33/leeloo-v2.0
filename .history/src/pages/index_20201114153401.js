import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import Navigation from '../components/Navigation/Navigation'


const IndexPage = () => (
  <>
    <Navigation/>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </>
)

export default IndexPage
