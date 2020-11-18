import React from 'react'
import { graphql } from 'gatsby'

const Post = ({ data }) => <p>{console.log(data)}Hello leeloo</p>

export const query = graphql`
  {
    site {
      siteMetadata {
        description
      }
    }
  }
`;

export default Post;