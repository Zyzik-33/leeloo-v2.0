import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

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

export default Post;