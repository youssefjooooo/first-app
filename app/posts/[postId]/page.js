// "use client";

import Link from "next/link";
import { Suspense } from "react";

async function fetchPost(postId) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    {
      next: {
        revalidate: 120,
      },
    }
  );
  return res.json();
}

async function PostContent({ postId }) {
  const post = await fetchPost(postId);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
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
          {post.id}
        </h1>
        <h1>{post.title}</h1>
      </div>
      <strong>{post.body}</strong>
    </div>
  );
}

function Post({ params }) {
  const postId = params.postId;

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
      <Suspense fallback={<h1>Loading...</h1>}>
        <PostContent postId={postId} />
      </Suspense>
      <Link href="/posts" style={{ marginTop: "30px" }}>
        &larr; back
      </Link>
    </div>
  );
}

export default Post;
