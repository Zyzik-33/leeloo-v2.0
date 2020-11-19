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
      <h1>{data.mdx.frontmatter.title}</h1>
      <p>{data.mdx.frontmatter.author}</p>
      <img src={data.mdx.frontmatter.featuredImage.childImageSharp.fluid.src} />
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </div>
  )
}

export default PostLayout