import { AiOutlineCalculator } from "react-icons/ai";
import { getPost, postData } from "@/service/getData";
import getPosts from "@/service/getData";
import SlugFilterCompo from "@/components/SlugFilterCompo";
import SlugCompo from "@/components/slugCompo";
import { Metadata } from "next";
type Slug = {
  params: {
    slug: string;
  };
};
export async function generateMetadata({
  params: { slug },
}: Slug): Promise<Metadata> {
  const post = await getPost(slug);
  return {
    title: post?.title,
    description: post?.description,
  };
}
export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({
    slug: post.path,
  }));
}

export default async function PostSlugPage({ params: { slug } }: Slug) {
  const post = await postData(slug);

  const { pre, next } = post;
  return (
    <>
      <article>
        <SlugCompo post={post} />
        <section className="flex shadow-orange-50 ">
          {pre && <SlugFilterCompo post={pre} type="pre" />}
          {next && <SlugFilterCompo post={next} type="next" />}
        </section>
      </article>
    </>
  );
}
