import React from 'react'
import Image from 'gatsby-image'
import { MDXRenderer } from 'gatsby'
const PostLayout = ({pageContext: {post}}) => {
  return (
    <div>
      <h1>{post.frontmatter.title}</h1>
      <p>{post.frontmatter.author}</p>
      <img src={post.frontmatter.featuredImage.childImageSharp.fluid.src} />
      <p>{post.body}</p>
    </div>
  )
}

export default PostLayout