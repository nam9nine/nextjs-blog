import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4">
      <Link className="text-3xl font-bold" href="/">
        blog
      </Link>
      <nav className="flex gap-4">
        <Link href="/">home</Link>
        <Link href="/about">about</Link>
        <Link href="/contact">contact</Link>
        <Link href="/posts">posts</Link>
      </nav>
    </header>
  );
}
