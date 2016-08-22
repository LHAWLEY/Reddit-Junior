import React from 'react';
import Like from './Like.jsx';


const Post = ({ id, title, body, likes }) => {
  return (
    <div>
      <h1 className='post_title'>{title}</h1>
      <Like id={id} likes={likes} />
      <p>{body}</p>
    </div>
  )
}

export default Post;