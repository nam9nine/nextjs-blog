import { getFeaturedPosts } from "@/service/getData";
import PostsGrid from "./PostsGrid";

export default async function FeaturedPosts() {
  const posts = await getFeaturedPosts(true);

  return (
    <section>
      <h2 className="my-4 text-2xl font-bold">featured</h2>
      <PostsGrid posts={posts} />
    </section>
  );
}
