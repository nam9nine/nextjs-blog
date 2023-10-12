"use strict";

import { Form } from "@/components/ContactPage";

import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: process.env.AUTH_USER,
    pass: process.env.AUTH_PASS,
  },
});
// async..await is not allowed in global scope, must use a wrapper
export default async function main({ from, subject, message }: Form) {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: from, // sender address
    to: "southgyuios19@gmail.com", // list of receivers
    subject: `[BLOG] ${subject}`, // Subject line
    text: message, // plain text body
    html: `<h1>${subject}</h1>
    <div>${message}</div>
    <br/>
    <p>보낸 사람 ${from}</p>`, // tml body
  });
  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  //
  // NOTE: You can go to https://forwardemail.net/my-account/emails to see your email delivery status and preview
  //       Or you can use the "preview-email" npm package to preview emails locally in browsers and iOS Simulator
  //       <https://github.com/forwardemail/preview-email>
  //
}
