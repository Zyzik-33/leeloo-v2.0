import React from 'react'
import Image from 'gatsby-image'

const PostLayout = (props) => {
  return (
    <div>
      {console.log(props)}
      <h1>{post.frontmatter.title}</h1>
      <p>{post.frontmatter.author}</p>
      <Image fluid={post.frontmatter.} />
      <p>some text</p>
    </div>
  )
}

export default PostLayout