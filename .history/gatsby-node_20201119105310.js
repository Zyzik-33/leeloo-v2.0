/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it


const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/layouts/post.js`)
  const result = await graphql(`
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
  `, { limit: 1000 }).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog post pages.
    result.data.allMdx.nodes.forEach(post => {
      createPage({
        // Path for this page — required
        path: `articles/${post.frontmatter.slug}`,
        component: blogPostTemplate,
        context: {
          post
        },
      })
    })
  })
}