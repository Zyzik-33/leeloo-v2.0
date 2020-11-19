import React from 'react'
import Image from 'gatsby-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const PostLayout = ({pageContext: {post}}) => {
  return (
    <div>
      <h1>{post.frontmatter.title}</h1>
      <p>{post.frontmatter.author}</p>
      <img src={post.frontmatter.featuredImage.childImageSharp.fluid.src} />
      <MDXRenderer>{post.body}</MDXRenderer>
    </div>
  )
}

export default PostLayout