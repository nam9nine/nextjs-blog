import { Posts } from "@/service/getData";
import Link from "next/link";
import Image from "next/image";
type Props = {
  post: Posts;
};

export default function PostCard({
  post: { title, date, category, path, description },
}: Props) {
  return (
    <>
      <article className="overflow-hidden rounded-md shadow-lg">
        <Link href={`/posts/${path}`}>
          <Image
            className="w-full"
            src={`/images/posts/${path}.png`}
            alt={title}
            width={300}
            height={300}
            priority
          />
          <div className="flex flex-col items-center p-4">
            <time className="self-end">{date}</time>
            <h3 className="text-lg font-bold">{title}</h3>
            <p className="w-full truncate text-center">{description}</p>
            <span className="my-2 rounded-lg bg-slate-400 px-2 text-sm">
              {category}
            </span>
          </div>
        </Link>
      </article>
    </>
  );
}
