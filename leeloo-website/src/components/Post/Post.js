import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const Post = () => {
  const data = useStaticQuery(graphql`
  {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return <p>{data.site.siteMetadata.title}</p>
}

export default Post;