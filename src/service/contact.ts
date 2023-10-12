import { Form } from "@/components/ContactPage";

export default async function postFunc(form: Form) {
  const res = await fetch("/api/submit", {
    method: "POST",
    headers: {
      "Content-Type": "applicatioin/json",
    },
    body: JSON.stringify(form),
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message || "서버 요청에 실패함");
  }
  return data;
}
