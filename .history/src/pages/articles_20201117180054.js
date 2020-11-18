import { graphql } from "gatsby"
import React from "react"

const ArticlesPage = ({ data }) => (
  <>
    <h1>ArticlesPage</h1>
    {data.allMdx.nodex.map(item => (
      <>
        <p>{item.frontmatter.title}</p>
        <p>{item.frontmatter.}</p>
      </>
    ))}
  </>
)

export const query = graphql`
  allMdx {
    nodes {
      frontmatter {
        title
        slug
        author
      }
      excerpt(pruneLength: 50)
    }
  }
`;

export default ArticlesPage
