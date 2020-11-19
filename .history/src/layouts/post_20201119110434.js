import React from 'react'

const PostLayout = (props) => {
  return (
    <div>
      {console.log(props)}
      <h1>{post.frontmatter.title}</h1>
      <p>author</p>
      <span>image</span>
      <p>some text</p>
    </div>
  )
}

export default PostLayout