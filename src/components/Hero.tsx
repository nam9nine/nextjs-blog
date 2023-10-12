import Img from "next/image";
import Link from "next/link";
export default function Hero() {
  return (
    <section className="text-center">
      <Img
        className="mx-auto mt-4 rounded-full pt-3"
        src="/images/profile.png"
        alt="profile"
        width={250}
        height={250}
        priority
      />
      <p>ver-1.0</p>
      <h3 className="my-3 text-4xl font-bold">이남규</h3>
      <p className="text-sm">web developer</p>

      <Link href="/contact">
        <button className="mb-3 mt-3 rounded-md bg-yellow-200 p-3">
          contact
        </button>
      </Link>
    </section>
  );
}
