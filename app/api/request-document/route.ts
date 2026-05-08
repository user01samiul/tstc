import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type RequestType = "aboriginal-engagement" | "capability-statement";

const REQUEST_META: Record<
  RequestType,
  { label: string; subject: string; userSubject: string; userBody: string }
> = {
  "aboriginal-engagement": {
    label: "Aboriginal Engagement Strategy",
    subject: "New Aboriginal Engagement Strategy Request",
    userSubject:
      "Your Aboriginal Engagement Strategy request — T&S Traffic Solutions",
    userBody:
      "Thank you for requesting our Aboriginal Engagement Strategy. Our team will review your request and send the document to this email address shortly.",
  },
  "capability-statement": {
    label: "Capability Statement",
    subject: "New Capability Statement Request",
    userSubject: "Your Capability Statement request — T&S Traffic Solutions",
    userBody:
      "Thank you for requesting our Capability Statement. Our team will send the document to this email address shortly.",
  },
};

export async function POST(request: Request) {
  try {
    const { email, type } = (await request.json()) as {
      email?: string;
      type?: RequestType;
    };

    if (!email || !type || !REQUEST_META[type]) {
      return NextResponse.json(
        { error: "Email and a valid request type are required" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address" },
        { status: 400 }
      );
    }

    const meta = REQUEST_META[type];

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GOOGLE_APP_PASSWORD,
      },
    });

    const adminMailOptions = {
      from: process.env.GMAIL_USER,
      to: ["Taj@tstc.com.au", "Saadat@tstc.com.au"],
      subject: meta.subject,
      text: `A new ${meta.label} request was submitted.\n\nRequester email: ${email}`,
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; background: #f7f7f9; padding: 32px; border-radius: 12px; max-width: 520px; margin: auto; box-shadow: 0 2px 12px rgba(0,0,0,0.07);">
          <h2 style="color: #1a202c; margin-bottom: 16px;">${meta.subject}</h2>
          <p style="color: #444; font-size: 15px;">A new request was submitted via the T&S Traffic Solutions website.</p>
          <table style="width: 100%; border-collapse: collapse; margin-top: 12px;">
            <tr><td style="padding: 8px 0; color: #555;"><strong>Document:</strong></td><td style="padding: 8px 0; color: #222;">${meta.label}</td></tr>
            <tr><td style="padding: 8px 0; color: #555;"><strong>Requester email:</strong></td><td style="padding: 8px 0; color: #222;">${email}</td></tr>
          </table>
          <div style="margin-top: 32px; font-size: 13px; color: #888;">Please send the requested document to the email above.</div>
        </div>
      `,
    };

    const userMailOptions = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: meta.userSubject,
      text: `${meta.userBody}\n\nBest regards,\nT&S Traffic Solutions Team`,
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; background: #f7f7f9; padding: 32px; border-radius: 12px; max-width: 520px; margin: auto; box-shadow: 0 2px 12px rgba(0,0,0,0.07);">
          <h2 style="color: #1a202c; margin-bottom: 18px;">${meta.userSubject}</h2>
          <p style="font-size: 15px; color: #444; margin: 18px 0 0 0;">${meta.userBody}</p>
          <div style="margin-top: 32px; font-size: 15px; color: #222;">Best regards,<br><span style="color: #1a202c; font-weight: 500;">T&S Traffic Solutions Team</span></div>
        </div>
      `,
    };

    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    return NextResponse.json(
      { message: "Request submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending request-document email:", error);
    return NextResponse.json(
      { error: "Failed to send request" },
      { status: 500 }
    );
  }
}
