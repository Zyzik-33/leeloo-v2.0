import { graphql } from "gatsby"
import React from "react"

const ArticlesPage = ({ data }) => (
  <>
    <h1>ArticlesPage</h1>
    {data.allMdx.nodes.map(item => (
      <>
        <h2>{item.frontmatter.title}</h2>
        <p>{item.frontmatter.author}</p>
        <p>{item.frontmatter.excerpt}</p>
      </>
    ))}
  </>
)

export const query = graphql`
  {
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
  }
`;

export default ArticlesPage
