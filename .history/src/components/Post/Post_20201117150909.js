import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const Post = () => {
  const data = useStaticQuery(graphql`
  {
      site {
        siteMetadata {
          description
        }
      }
    }
  `);
  return <p>{console.log(props)}Hello leeloo</p>
}

export default Post;