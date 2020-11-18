import { graphql } from "gatsby"
import React from "react"

const ArticlesPage = () => (
  <>
    <h1>ArticlesPage</h1>
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
