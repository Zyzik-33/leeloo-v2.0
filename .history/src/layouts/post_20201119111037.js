import React from 'react'
import Image from 'gatsby-image'

const PostLayout = ({pageContext}) => {
  return (
    <div>
      {console.log(props)}
      <h1>{post.frontmatter.title}</h1>
      <p>{post.frontmatter.author}</p>
      <Image fluid={post.frontmatter.featuredImage.childImageSharp.fluid} />
      <p>{post.body}</p>
    </div>
  )
}

export default PostLayout