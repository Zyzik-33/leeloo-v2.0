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
   render={()=> (
     
   )} 
  />
)

<p>{console.log(data)}Hello leeloo</p>
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