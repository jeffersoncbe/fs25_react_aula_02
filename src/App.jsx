import "./App.css";
import { Card } from "./components/Card";
import { useState, useEffect } from "react";

const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

function App() {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const response = await fetch(BASE_URL);
    const postsList = await response.json();

    setPosts(postsList);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="">
      {posts.map((post) => (
        <Card key={post.id} title={post.title} body={post.body} />
      ))}
    </div>
  );
}

export default App;