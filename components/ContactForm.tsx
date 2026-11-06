import Image from "next/image";

const label = "text-label text-ink";
const control =
  "w-full rounded-md border border-line-strong bg-surface-200 px-4 text-body text-ink placeholder:text-ink-subtle focus:border-text-brand focus:outline-none";

const subjects = [
  "Audit & Assurance",
  "Tax Advisory",
  "Risk Advisory",
  "Outsourcing",
  "Other",
];

export default function ContactForm() {
  return (
    <form className="flex flex-col gap-5">
      <h2 className="text-h2 text-ink">
        How can we <span className="text-text-brand">help</span>?
      </h2>

      <div className="flex flex-col gap-2">
        <label htmlFor="name" className={label}>
          Full name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Your name"
          className={`${control} h-12`}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className={label}>
          Email address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="name@example.com"
          className={`${control} h-12`}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="phone" className={label}>
          Phone number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="+94 7X XXX XXXX"
          aria-describedby="phone-help"
          className={`${control} h-12`}
        />
        <p id="phone-help" className="text-body-sm text-ink-muted">
          We call back within one working day.
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="subject" className={label}>
          Subject
        </label>
        <div className="relative">
          <select
            id="subject"
            name="subject"
            defaultValue=""
            className={`${control} h-12 appearance-none pr-11`}
          >
            <option value="" disabled>
              {subjects.join(", ")}
            </option>
            {subjects.map((s) => (
              <option key={s} value={s}>
                {s}
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
        <label htmlFor="message" className={label}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Tell us briefly what you need"
          className={`${control} h-[120px] resize-none py-3`}
        />
      </div>

      <button
        type="submit"
        className="h-[52px] w-fit rounded-md bg-action px-8 text-button text-on-brand hover:bg-action-hover"
      >
        Send message
      </button>
    </form>
  );
}
