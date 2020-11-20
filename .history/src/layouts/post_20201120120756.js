import React from 'react'
// import Image from 'gatsby-image'
// import { MDXRenderer } from 'gatsby-plugin-mdx'
import { graphql } from 'gatsby'

export const query = graphql`
  query querySingleArticle($id: String!) {
    datoCmsArticle (id: {eq: $id}) {
      title
      featuredImage {
        fixed(width: 500) {
          ...GatsbyDatoCmsFixed_tracedSVG
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
            fixed(width: 500) {
              ...GatsbyDatoCmsFixed_tracedSVG
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
      <Image fixed={data.datoCmsArticle.f} />
      <div>{data.datoCmsArticle.articleContent.map(item => {
        const itemKey = Object.keys(item)[2];
        console.log(itemKey);
        switch(itemKey){
          case'headingContent':
            return <h2>{item[itemKey]}</h2>;
          case'paragfaphContent':
            return <p>{item[itemKey]}</p>;
          case'imageData':
            return <Image fixed={item[itemKey].fixed} />;
          default: 
            return null;
        }
      })}</div>
    </div>
  )
}

export default PostLayout