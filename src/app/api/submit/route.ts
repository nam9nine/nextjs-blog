import main from "@/service/sendMail";

import * as yup from "yup";

const bodySchema = yup.object().shape({
  from: yup.string().email().required(),
  subject: yup.string().required(),
  message: yup.string().required(),
});

export async function POST(req: Request) {
  const body = await req.json();
  if (!bodySchema.validate(body)) {
    return Response.json("유호하지 않은 포맷", { status: 400 });
  }
  main(body); //
  return Response.json("성공", { status: 200 });
}
