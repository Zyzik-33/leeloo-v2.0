import React from 'react'
import Image from 'gatsby-image'

const PostLayout = ({pageContext: {post}}) => {
  return (
    <div>
      {console.log(props)}
      <h1>{post.frontmatter.title}</h1>
      <p>{post.frontmatter.author}</p>
      <img src={post.frontmatter.} />
      <p>{post.body}</p>
    </div>
  )
}

export default PostLayout