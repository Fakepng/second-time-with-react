import React, { useState } from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid'
import Navbar from './Navbar';
import Input from './Input';
import Post from './Post';


function App() {
  const [posts, setPosts] = useState([]);

  function addPost(title) {
    const newPost = { id: uuidv4(), title };
    setPosts([newPost, ...posts]);
  }

  function removePost(id) {
    const updatedPost = posts.filter((post) => post.id !== id);
    setPosts([updatedPost]);
  }

  return (
    <div className="App">
      <Navbar />
      <Input addPost={addPost} />
      {posts.map((post) => <Post key={post.id} id={post.id} title={post.title} removePost={removePost} />)}
    </div>
  );
}

export default App;
