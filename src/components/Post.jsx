// Post.js
import React from 'react';

function Post({ post }) {
  return (
    <div className="post">
      <h3>{post.username}</h3>
      <p>{post.text}</p>
      <div className="post-meta">
        <span>{post.date}</span>
      </div>
    </div>
  );
}

export default Post;
