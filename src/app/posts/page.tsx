import Filter from "@/components/Filter";
import getPosts from "@/service/getData";
export default async function PostPage() {
  const posts = await getPosts();
 
  return (
    <>
      <Filter posts={posts}/>
    </>
  );
}
