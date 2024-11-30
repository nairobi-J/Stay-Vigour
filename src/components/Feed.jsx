// Feed.js
import React, { useState, useEffect } from 'react';
import Post from './Post';

// Sample posts for now. Later you can fetch this data from your backend.
const samplePosts = [
  { username: 'John Doe', text: 'Just completed a 5k run!', date: '2024-11-30' },
  { username: 'Jane Smith', text: 'Lost 2 kg this week!', date: '2024-11-29' },
  { username: 'Mike Brown', text: 'Feeling stronger after my workout today!', date: '2024-11-28' },
];

function Feed() {
  const [posts, setPosts] = useState([]);

  // Simulate fetching posts from a backend
  useEffect(() => {
    // Fetch posts from Firebase or MongoDB here
    setPosts(samplePosts); // For now, we use sample posts
  }, []);

  return (
    <div className="feed">
      <h2>Community Feed</h2>
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </div>
  );
}

export default Feed;

