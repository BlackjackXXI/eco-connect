import React, { useState } from 'react';
import PostList from '../components/PostList';
import PostForm from '../components/PostForm';

const Forum = () => {
  const [posts, setPosts] = useState([]);

  const addPost = (post) => {
    setPosts([...posts, { ...post, id: Date.now() }]);
  };

  return (
    <div>
      <h1>Forum</h1>
      <PostForm addPost={addPost} />
      <PostList posts={posts} />
    </div>
  );
};

export default Forum;
