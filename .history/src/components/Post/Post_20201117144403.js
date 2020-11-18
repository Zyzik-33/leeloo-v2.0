import React from 'react'
import { graphql } from 'gatsby'

const Post = () => <p>Hello leeloo</p>

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