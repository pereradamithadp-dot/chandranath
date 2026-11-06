"use server";

import { Resend } from "resend";

export type FormState = {
  status: "idle" | "success" | "error";
  message: string;
};

const MAX_CV_BYTES = 5 * 1024 * 1024;
const CV_TYPES: Record<string, string> = {
  pdf: "application/pdf",
  doc: "application/msword",
  docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
};
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const GENERIC_ERROR =
  "Sorry, we couldn't send your message. Please try again, or call us on +94 38 2237256.";

/** Trimmed text field, capped so nobody can post a huge payload into an email. */
function field(formData: FormData, name: string, max = 200) {
  const value = formData.get(name);
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

/** Bots fill the hidden "website" field; people never see it. */
function isSpam(formData: FormData) {
  return field(formData, "website") !== "";
}

function getMailer() {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !to || !from) {
    throw new Error("RESEND_API_KEY, CONTACT_TO_EMAIL and CONTACT_FROM_EMAIL must be set");
  }
  return { resend: new Resend(apiKey), to, from };
}

function lines(rows: [string, string][]) {
  return rows.map(([k, v]) => `${k}: ${v || "-"}`).join("\n");
}

export async function sendContactMessage(_prev: FormState, formData: FormData): Promise<FormState> {
  if (isSpam(formData)) return { status: "success", message: "Thank you. We'll be in touch soon." };

  const name = field(formData, "name");
  const email = field(formData, "email");
  const phone = field(formData, "phone", 40);
  const subject = field(formData, "subject", 60);
  const message = field(formData, "message", 5000);

  if (!name || !message) return { status: "error", message: "Please add your name and a message." };
  if (!EMAIL_RE.test(email)) return { status: "error", message: "Please enter a valid email address." };

  try {
    const { resend, to, from } = getMailer();
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `Website enquiry${subject ? ` (${subject})` : ""}: ${name}`,
      text: `${lines([["Name", name], ["Email", email], ["Phone", phone], ["Subject", subject]])}\n\nMessage:\n${message}\n`,
    });
    if (error) throw new Error(`${error.name}: ${error.message}`);
  } catch (err) {
    console.error("Contact form email failed:", err);
    return { status: "error", message: GENERIC_ERROR };
  }

  return { status: "success", message: "Thank you. Your message has been sent and we'll reply within one working day." };
}

export async function sendApplication(_prev: FormState, formData: FormData): Promise<FormState> {
  if (isSpam(formData)) return { status: "success", message: "Thank you. Your application has been sent." };

  const position = field(formData, "position", 100);
  const name = field(formData, "name");
  const email = field(formData, "email");
  const phone = field(formData, "phone", 40);
  const link = field(formData, "link", 300);
  const message = field(formData, "message", 5000);
  const consent = formData.get("consent") === "on";
  const cv = formData.get("cv");

  if (!position || !name || !phone) {
    return { status: "error", message: "Please fill in all fields marked *." };
  }
  if (!EMAIL_RE.test(email)) return { status: "error", message: "Please enter a valid email address." };
  if (!consent) return { status: "error", message: "Please tick the box to agree to how we use your details." };
  if (!(cv instanceof File) || cv.size === 0) return { status: "error", message: "Please attach your CV." };

  const ext = cv.name.split(".").pop()?.toLowerCase() ?? "";
  if (!CV_TYPES[ext]) return { status: "error", message: "Your CV must be a PDF or Word file." };
  if (cv.size > MAX_CV_BYTES) return { status: "error", message: "Your CV must be 5 MB or smaller." };

  try {
    const { resend, to, from } = getMailer();
    const safeName = cv.name.replace(/[^\w.\- ]+/g, "_").slice(0, 100);
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `Job application (${position}): ${name}`,
      text: `${lines([["Position", position], ["Name", name], ["Email", email], ["Phone", phone], ["Link", link]])}\n\nMessage:\n${message || "-"}\n\nCV attached: ${safeName}\n`,
      attachments: [
        { filename: safeName, content: Buffer.from(await cv.arrayBuffer()), contentType: CV_TYPES[ext] },
      ],
    });
    if (error) throw new Error(`${error.name}: ${error.message}`);
  } catch (err) {
    console.error("Application email failed:", err);
    return { status: "error", message: GENERIC_ERROR };
  }

  return { status: "success", message: "Thank you. Your application has been sent. We contact shortlisted candidates." };
}
