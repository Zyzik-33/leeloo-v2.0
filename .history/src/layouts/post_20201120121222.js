import React from 'react'
import Image from 'gatsby-image'
// import { MDXRenderer } from 'gatsby-plugin-mdx'
import { graphql } from 'gatsby'

export const query = graphql`
  query querySingleArticle($id: String!) {
    datoCmsArticle (id: {eq: $id}) {
      title
      featuredImage {
        fluid {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
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
            fluid {
              ...GatsbyDatoCmsFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

const PostLayout = ({ data }) => {
  return (
    <div>
      <h1>{data.datoCmsArticle.title}</h1>
      <p>{data.datoCmsArticle.author}</p>
      <Image fluid={data.datoCmsArticle.featuredImage.fluid} />
      <div>{data.datoCmsArticle.articleContent.map(item => {
        const itemKey = Object.keys(item)[2];
        console.log(itemKey);
        switch(itemKey){
          case'headingContent':
            return <h2 key={item.id}>{item[itemKey]}</h2>;
          case'paragfaphContent':
            return <p key={item.id}>{item[itemKey]}</p>;
          case'imageData':
            return <Image key={item.id} fluid={item[itemKey].fluid} />;
          default: 
            return null;
        }
      })}</div>
    </div>
  )
}

export default PostLayout