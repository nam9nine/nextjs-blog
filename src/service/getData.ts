import { promises as fs } from "fs";
import path from "path";
import { cache } from "react";
export type Posts = {
  title: string;
  description: string;
  date: string;
  category: string;
  path: string;
  featured: boolean;
};

export async function getFeaturedPosts(bool: boolean): Promise<Posts[]> {
  return getPosts().then((data) =>
    bool ? data.filter((post) => post.featured === bool) : data
  );
}
const getPosts: () => Promise<Posts[]> = cache(async () => {
  const fileUrl = path.join(process.cwd(), "src", "data", "posts.json");
  return fs
    .readFile(fileUrl, "utf-8")
    .then<Posts[]>((data) => JSON.parse(data))
    .then((data) =>
      data.sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1))
    );
});
export default getPosts;
// export default async function getPosts(): Promise<Posts[]> {
// }
export async function getPost(slug: string): Promise<Posts | undefined> {
  const posts = await getPosts();
  const post = posts.find((post) => post.path === slug);
  return post;
}

export type PostData = Posts & {
  data: string;
  next: Posts | null;
  pre: Posts | null;
};
export async function postData(slug: string): Promise<PostData> {
  const post = await getPost(slug);
  const posts = await getPosts();

  if (!post) {
    throw new Error("Post not found");
  }
  const index = posts.findIndex((item) => item.title === post.title);
  const next = index + 1 > posts.length - 1 ? null : posts[index + 1];
  const pre = index - 1 < 0 ? null : posts[index - 1];

  const fileUrl = path.join(
    process.cwd(),
    "src",
    "data",
    "posts",
    `${post.path}.md`
  );

  const data = await fs.readFile(fileUrl, "utf-8");
  return { ...post, data, next, pre };
}
