import getPosts from "@/service/getData";
import PostCard from "./PostCard";
import MultiCarousol from "./MultiCarousol";

export default async function CarouselPosts() {
  const posts = await getPosts();
  return (
    <section>
      <MultiCarousol>
        {posts.map((post) => (
          <PostCard key={post.path} post={post} />
        ))}
      </MultiCarousol>
    </section>
  );
}
