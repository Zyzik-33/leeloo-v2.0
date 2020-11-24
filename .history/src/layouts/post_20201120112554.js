import React from 'react'
import Image from 'gatsby-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { graphql } from 'gatsby'

export const query = graphql`
  query querySingleArticle($id: String!) {
    datoCmsArticle (id: {eq: $id}) {
      title
      featuredImage {
        url
      }
      author
      articleContent {
        ... on DatoCmsParagraph {
          id
          paragfaphContent
        }
        ... on DatoCmsHeading {
          id
          headingContent
        }
        ... on DatoCmsImage {
          id
          imageData {
            url
          }
        }
      }
    }
  }
`

const PostLayout = ({ data }) => {
  return (
    <div>
      <h1>{data.datoCMSArticle.title}</h1>
      <p>{data.datoCMSArticle.author}</p>
      {/* <Image src={data.mdx.frontmatter.featuredImage.childImageSharp.fixed} /> */}
      <div>{data.datoCMSArticle.articleContent.map(item => {
        const itemKey = Object.keys(item)[1];

        console.log(itemKey);
      })}</div>
    </div>
  )
}

export default PostLayout