import React from 'react'

interface Post {
  _id: string;
  creator: string;
  prompt: string;
  tag: string;
}

const PromptCard = ({ post } : Post) => {
  console.log('Post: ', post);
  return (
    <div>{post.prompt}</div>
  )
}

export default PromptCard