"use client";

import Aside from "@/components/Aside";
import { useState } from "react";
import PostsGrid from "./PostsGrid";
// import { Posts1 } from "@/components/PostsGrid";
import { Posts } from "@/service/getData";

type Props = {
  posts: Posts[];
};

export default function Filter({ posts }: Props) {
  const [click, setClick] = useState("all");
  const list = ["all", ...new Set(posts.map((post) => post.category))];
  const data =
    click === "all" ? posts : posts.filter((post) => post.category === click);

  function clickFunc(clickData: string) {
    setClick(clickData);
  }
  console.log(click);
  return (
    <section className="m-5 flex">
      <PostsGrid posts={data} />
      <Aside onClick={clickFunc} list={list} selected={click} />
    </section>
  );
}
