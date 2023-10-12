import Image from "next/image";

import { AiOutlineCalculator } from "react-icons/ai";
import MarkdownComponent from "./Markdown";
import { PostData } from "@/service/getData";
type Props = {
  post: PostData;
};

export default function SlugCompo({ post }: Props) {
  return (
    <>
      <article className="m-4 overflow-hidden rounded-2xl bg-gray-100 shadow-lg">
        <Image
          className=" max-h-[500px] w-full"
          src={`/images/posts/${post.path}.png`}
          alt={post.title}
          width={760}
          height={420}
        />
        <section className="flex flex-col p-4">
          {post.title}
          <div className="flex items-center">
            <AiOutlineCalculator />
            <p>{post.date.toString()}</p>
          </div>
          <h1>{post.description}</h1>
          <MarkdownComponent post={post.data} />
        </section>
      </article>
    </>
  );
}
