import React, { useEffect, useState } from 'react';

export default function About() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-10">Welcome to the About Page</h1>
      <div className="mt-5">
        <h2 className="text-xl font-semibold text-center">Posts</h2>
        <ul className="mt-4">
          {posts.map(post => (
            <li key={post.id} className="border-b border-gray-300 py-2">
              <h3 className="text-lg font-bold">{post.title}</h3>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
