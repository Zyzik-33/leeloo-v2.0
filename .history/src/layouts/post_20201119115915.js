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
            fixed () {
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
      <Image src={data.mdx.frontmatter.featuredImage.childImageSharp.fixed} />
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </div>
  )
}

export default PostLayout