"use client";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
type Props = {
  post: string;
};

export default function MarkdownComponent({ post }: Props) {
  return (
    <ReactMarkdown
      className="prose prose-slate max-w-none"
      remarkPlugins={[remarkGfm]}
      components={{
        code(props) {
          const { children, className, node, ...rest } = props;
          const match = /language-(\w+)/.exec(className || "");
          return match ? (
            <SyntaxHighlighter
              language={match[1]}
              PreTag="div"
              {...rest}
              style={materialDark}
              ref={(node) => {
                if (node) {
                  // @ts-ignore
                }
              }}
            >
              {String(children).replace(/\n$/, "")}
            </SyntaxHighlighter>
          ) : (
            <code {...rest} className={className}>
              {children}
            </code>
          );
        },
        img: (image) => (
          <Image
            src={image.src || ""}
            alt={image.alt || ""}
            width={500}
            height={350}
            priority
          />
        ),
      }}
    >
      {post}
    </ReactMarkdown>
  );
}
