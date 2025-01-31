import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, company, phone, email, subject, message } = await req.json();

    // Requirement
    if (!name || !email || !message) {
      return NextResponse.json({ success: false, error: "Missing required fields." }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: "mail.privateemail.com",
      port: 465, 
      secure: true, 
      auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS, 
      },
    });

    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`, // Sender’s email (from Namecheap)
      to: process.env.EMAIL_USER, // Receive the message at your Namecheap email
      subject: subject || "New Contact Form Submission",
      text: `
      Name: ${name}
      Company: ${company || "N/A"}
      Phone: ${phone || "N/A"}
      Email: ${email}
      Message: ${message}
      `,
      replyTo: email, // Allows replying directly to the sender
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Email sent successfully!" });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error?.message || "Email sending failed" }, { status: 500 });
  }
}
