import { Posts } from "@/service/getData";
import Image from "next/image";
import Link from "next/link";
import PostCard from "./PostCard";
type Props = {
  posts: Posts[];
};

export default function PostsGrid({ posts }: Props) {
  return (
    <>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {posts.map((post, number) => (
          <li key={number}>
            <PostCard key={post.path} post={post} />
          </li>
        ))}
      </ul>
    </>
  );
}
