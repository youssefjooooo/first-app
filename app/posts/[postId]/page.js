// "use client";

import Link from "next/link";
import { Suspense } from "react";
async function Post({ params }) {
  const postId = params.postId;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    {
      //this is ISG (Inceremental Static Generation) which compines both SSG and SSR, Meaning it will cash the results for 2 mins (SSG) and then re rquest the api (SSR), which drastically increases the performance.
      next: {
        revalidate: 120,
      },
    }
  );
  const post = await res.json();

  const postJSX = (
    <div
      style={{
        display: "flex",
        alignItems: "cente",
        justifyContent: "center",
        flexDirection: "column",
        gap: "5px",
        width: "80%",
      }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "5px",
          borderBottom: "1px solid #333",
        }}>
        <h1 style={{ borderRight: "1px solid #333", padding: "20px" }}>
          {postId}
        </h1>
        <h1>{post.title}</h1>
      </div>
      <strong>{post.body}</strong>
    </div>
  );
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "5px",
        padding: "20px",
        textAlign: "center",
      }}>
      <h2>Post</h2>
      <Suspense fallback={<h1>Loading...</h1>}>{postJSX}</Suspense>

      <Link href="/posts" style={{ marginTop: "30px" }}>
        &larr; back
      </Link>
    </div>
  );
}

export default Post;
