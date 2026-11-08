"use client";

import Image from "next/image";
import { useActionState, useEffect, useRef, useState } from "react";
import { type FormState, sendApplication } from "@/app/actions/forms";
import FormStatus, { Honeypot } from "@/components/FormStatus";
import SectionLabel from "@/components/SectionLabel";

const label = "text-label text-ink";
const control =
  "w-full rounded-md border border-line-strong bg-surface-200 px-4 text-body text-ink placeholder:text-ink-subtle focus:border-text-brand focus:outline-none";

const steps = [
  { title: "Fill in the form", text: "Add your details, the position and your CV." },
  { title: "We review your CV", text: "Our team reads every application." },
  { title: "Interview", text: "We call shortlisted candidates for an interview." },
];

const positions = ["General application", "Audit Assistant", "Audit Trainee"];

const initialState: FormState = { status: "idle", message: "" };

export default function ApplicationForm() {
  const [fileName, setFileName] = useState("");
  const [state, formAction, pending] = useActionState(sendApplication, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
      setFileName("");
    }
  }, [state]);

  return (
    <section id="apply" className="scroll-mt-4 bg-surface-100 py-12 lg:py-20">
      <div className="mx-auto flex max-w-page flex-col items-stretch gap-10 px-4 lg:flex-row lg:items-start lg:gap-16">
        <div className="flex min-w-0 flex-1 flex-col items-start gap-8">
          <div className="flex flex-col gap-4">
            <SectionLabel>APPLY NOW</SectionLabel>
            <h2 className="text-h2 text-ink">
              <span className="block">Send us your</span>
              <span className="block text-text-brand">CV today</span>
            </h2>
          </div>
          <p className="text-body-lg text-ink-muted">
            Send your details and CV. We contact only shortlisted candidates.
          </p>
          <ol className="flex w-full flex-col gap-6">
            {steps.map((s, i) => (
              <li key={s.title} className="flex items-start gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-pill bg-surface-brand text-label text-on-brand">
                  {i + 1}
                </span>
                <div className="flex min-w-0 flex-1 flex-col gap-1">
                  <p className="text-h4 text-ink">{s.title}</p>
                  <p className="text-body text-ink-muted">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="w-full rounded-md border border-line bg-surface-200 px-6 py-5 text-body text-ink">
            Questions about a role? Call{" "}
            <a href="tel:+94382237256" className="text-text-brand">
              +94 38 2237256
            </a>
          </p>
        </div>

        <form
          ref={formRef}
          action={formAction}
          className="relative flex w-full shrink-0 flex-col gap-6 rounded-lg bg-surface-200 p-5 sm:p-10 lg:w-[600px] shadow-md">
          <div className="flex flex-col gap-1">
            <h3 className="text-h3 text-ink">Application form</h3>
            <p className="text-body-sm text-ink-muted">
              Fields marked * are required.
            </p>
          </div>
          <Honeypot />

          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="position" className={label}>
                Position *
              </label>
              <div className="relative">
                <select
                  id="position"
                  name="position"
                  required
                  defaultValue=""
                  className={`${control} h-12 appearance-none pr-11`}
                >
                  <option value="" disabled>
                    Choose a position, or General application
                  </option>
                  {positions.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
                <Image
                  src="/images/icon-chevron-down.svg"
                  alt=""
                  width={11.4583}
                  height={6.45833}
                  className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="name" className={label}>
                Full name *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your name"
                className={`${control} h-12`}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className={label}>
                Email address *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="name@example.com"
                className={`${control} h-12`}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className={label}>
                Phone number *
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                placeholder="+94 7X XXX XXXX"
                className={`${control} h-12`}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="link" className={label}>
                LinkedIn or portfolio link (optional)
              </label>
              <input
                id="link"
                name="link"
                type="url"
                placeholder="https://"
                className={`${control} h-12`}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className={label}>
                Message (optional)
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell us briefly about yourself"
                className={`${control} h-[120px] resize-none py-3`}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="cv" className={label}>
                CV *
              </label>
              <label
                htmlFor="cv"
                className={`${control} flex h-12 cursor-pointer items-center text-ink-subtle focus-within:border-text-brand`}
              >
                <span className={fileName ? "text-ink" : ""}>
                  {fileName || "Choose a PDF or Word file, up to 5 MB"}
                </span>
                <input
                  id="cv"
                  name="cv"
                  type="file"
                  required
                  accept=".pdf,.doc,.docx"
                  className="sr-only"
                  onChange={(e) => setFileName(e.target.files?.[0]?.name ?? "")}
                />
              </label>
            </div>

            <label className="flex items-start gap-3 text-body-sm text-ink">
              <input
                type="checkbox"
                name="consent"
                required
                className="mt-0.5 size-5 shrink-0 accent-action"
              />
              <span>
                I agree that CHANDRANATH &amp; COMPANY may use these details to
                consider my application.
              </span>
            </label>

            <FormStatus state={state} />

            <button
              type="submit"
              disabled={pending}
              className="h-[52px] w-fit rounded-md bg-action px-8 text-button text-on-action hover:bg-action-hover disabled:cursor-wait disabled:opacity-70"
            >
              {pending ? "Sending…" : "Send application"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
