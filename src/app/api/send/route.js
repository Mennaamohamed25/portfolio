import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req , res) {
  const {body} = await req.json() ;
  const {email , subject , message} = body;
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: ["mennaa.mohamedd24@gmail.com" , email],
      subject: "Hello world",
      react: (
        <>
        <h1>{subject}</h1>
        <p>Thank you contacting me !</p>
        <p>I'll get back to you ASAP</p>
        <p>Message submitted</p>
          <p>{message}</p>
        </>
      ),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
