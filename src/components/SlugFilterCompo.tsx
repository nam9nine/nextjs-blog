import { PostData } from "@/service/getData";
import Link from "next/link";
import Image from "next/image";
import { Posts } from "@/service/getData";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
type Props = {
  post: Posts;
  type: "pre" | "next";
};
const ICON_CLASS =
  "text-5xl m-4 text-yellow-300 transition-all group-hover:text-6xl";
export default function SlugFilterCompo({ post, type }: Props) {
  return (
    <Link
      className="h-max-56 relative w-full bg-black"
      href={`/posts/${post.path}`}
    >
      <Image
        className=" max-h-56 w-full opacity-40"
        src={`/images/posts/${post?.path}.png`}
        alt={post.title}
        width={150}
        height={100}
      />
      <div className="group absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 items-center justify-around px-8 text-white">
        {type === "pre" && <FaArrowLeft className={ICON_CLASS} />}
        <div className="w-full text-center">
          <h1 className="text-3xl font-bold">{post.title}</h1>
          <p className="font-bold">{post.description}</p>
        </div>
        {type === "next" && <FaArrowRight className={ICON_CLASS} />}
      </div>
    </Link>
  );
}
