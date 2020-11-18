import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

const Post = ({ data }) => (
  <StaticQuery 
  query={graphql`
  {
      site {
        siteMetadata {
          description
        }
      }
    }
  `}   
   render={(props)=> (
    <p>{console.log(props)}Hello leeloo</p>
   )} 
  />
)

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