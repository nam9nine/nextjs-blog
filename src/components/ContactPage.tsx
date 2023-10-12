"use client";
import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import BannerCompo from "@/components/Banner";
import { BannerData } from "@/components/Banner";
import postFunc from "@/service/contact";

export type Form = {
  from: string;
  subject: string;
  message: string;
};

const initialForm = {
  from: "",
  subject: "",
  message: "",
};
export default function ContactPageCompo() {
  const [form, setForm] = useState<Form>(initialForm);
  const [banner, setBanner] = useState<BannerData | null>(null);

  function onChangeFunc(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function onSubmitFunc(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    postFunc(form) //
      .then(() => {
        setBanner({ message: "성공했습니다", state: "success" });
        setForm(initialForm);
      }) //
      .catch(() => {
        setBanner({ message: "실패했습니다", state: "error" });
      }) //
      .finally(() => {
        setTimeout(() => {
          setBanner(null);
        }, 3000);
      });
  }

  return (
    <section className="w-full max-w-md">
      {banner && <BannerCompo banner={banner} />}
      <form
        onSubmit={onSubmitFunc}
        className=" my-4  flex w-full flex-col  rounded-xl bg-slate-500 p-4 "
      >
        <label className="font-bold" htmlFor="from">
          email
        </label>
        <input
          type="text"
          name="from"
          id="from"
          required
          autoFocus
          value={form.from}
          onChange={onChangeFunc}
        />

        <label className="font-bold" htmlFor="subject">
          subject
        </label>
        <input
          type="text"
          name="subject"
          id="subject"
          required
          value={form.subject}
          onChange={onChangeFunc}
        />

        <label className="font-bold" htmlFor="message">
          message
        </label>
        <textarea
          rows={10}
          name="message"
          id="message"
          value={form.message}
          required
          onChange={onChangeFunc}
        />

        <button className="bg-yellow-300" type="submit">
          submit
        </button>
      </form>
    </section>
  );
}
