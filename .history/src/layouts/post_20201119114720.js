import React from 'react'
import Image from 'gatsby-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { graphql } from 'gatsby'

export const query = graphql`
  query querySingleArticle($slug: String!) {
    mdx(frontmatter: {slug: {eq: $slug}}) {
      frontmatter {
        title
        featuredImage {
          childImageSharp {
            fluid {
              src
            }
          }
        }
      }
      body
    }
  }
`

const PostLayout = ({ data }) => {
  return (
    <div>
      <h1>{data..frontmatter.title}</h1>
      <p>{post.frontmatter.author}</p>
      <img src={post.frontmatter.featuredImage.childImageSharp.fluid.src} />
      <MDXRenderer>{post.body}</MDXRenderer>
    </div>
  )
}

export default PostLayout