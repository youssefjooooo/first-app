import Link from "next/link";
import style from "./all.module.css";
import { Suspense } from "react";

async function AllPosts() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
    // this tells next that it will request data every time this page renders (SSR)
    cash: "no-cash",
  });
  const posts = await res.json();

  const postsJSX = (
    <div>
      {posts.map((post) => (
        <div
          key={post.id}
          style={{ borderBottom: "1px solid #333", width: "90%" }}>
          <Link href={`/posts/${post.id}`} className={style.link}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <br />
          </Link>
        </div>
      ))}
    </div>
  );
  return (
    <div className={style.pages}>
      <div>
        <Suspense fallback={<h1>Loading...</h1>}>{postsJSX}</Suspense>
      </div>
    </div>
  );
}

export default AllPosts;
