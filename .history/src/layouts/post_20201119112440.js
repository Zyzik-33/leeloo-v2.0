import React from 'react'
import Image from 'gatsby-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { graphql } from 'gatsby'

export const query graphql`
  query queryArticles {
      allMdx {
        nodes {
          frontmatter {
            title
            slug
            author
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 700, maxHeight: 500) {
                  src
                }
              }
            }
          }
          body
        }
      }
    }
`

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