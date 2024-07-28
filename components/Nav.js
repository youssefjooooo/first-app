"use client";

import Link from "next/link";
import style from "./Nav.module.css";

function Nav() {
  return (
    <ul className={style.nav}>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/posts">Posts</Link>
      </li>
    </ul>
  );
}

export default Nav;
