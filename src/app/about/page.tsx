import Hero from "@/components/Hero";
import { Metadata } from "next";
const TITLE_CLASS = "my-2 text-2xl font-bold text-gray-800";

export const metadata: Metadata = {
  title: "about",
  description: "Generated by create next app",
};
export default function AboutPage() {
  return (
    <>
      <Hero />
      <section className="m-8 w-full bg-gray-100 p-8 text-center shadow-lg">
        <h3 className={TITLE_CLASS}>Who am i</h3>
        <p className="texst-xl">
          풀스택 개발자 <br />
          사람과 디자인을 담는 웹앱을 만듦
        </p>

        <h3 className={TITLE_CLASS}>career</h3>
        <p>구글</p>

        <h3 className={TITLE_CLASS}>Skill</h3>
        <p>Next, Node, blockchain</p>
      </section>
    </>
  );
}
