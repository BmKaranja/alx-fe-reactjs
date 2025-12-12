// src/components/PostsComponent.jsx
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchPosts = async (page = 1) => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`
  );
  return data;
};

const PostsComponent = () => {
  const [page, setPage] = useState(1);

  const {
    data: posts,
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
  } = useQuery({
    queryKey: ["posts", page],
    queryFn: () => fetchPosts(page),
    staleTime: 1000 * 60 * 5, // 5 minutes
    cacheTime: 1000 * 60 * 10, // 10 minutes
    refetchOnWindowFocus: true, // auto-refetch when window regains focus
    keepPreviousData: true, // keep old data while fetching new page
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p style={{ color: "red" }}>Error: {error.message}</p>;

  return (
    <div className="posts-component">
      <h2>Posts (Page {page})</h2>
      <button onClick={() => refetch()} disabled={isFetching}>
        {isFetching ? "Refreshing..." : "Refetch Posts"}
      </button>

      <ul>
        {posts?.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>

      <div style={{ marginTop: "1rem" }}>
        <button
          onClick={() => setPage((old) => Math.max(old - 1, 1))}
          disabled={page === 1}
        >
          Previous Page
        </button>
        <button onClick={() => setPage((old) => old + 1)}>Next Page</button>
      </div>
    </div>
  );
};

export default PostsComponent;
