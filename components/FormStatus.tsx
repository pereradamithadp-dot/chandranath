import type { FormState } from "@/app/actions/forms";

/** Result message for a form; announced to screen readers when it changes. */
export default function FormStatus({ state }: { state: FormState }) {
  return (
    <p
      role={state.status === "error" ? "alert" : "status"}
      className={
        state.status === "idle"
          ? "sr-only"
          : `rounded-md px-4 py-3 text-body-sm ${
              state.status === "success"
                ? "border border-line bg-tint text-ink"
                : "border border-action bg-surface-200 text-text-brand"
            }`
      }
    >
      {state.message}
    </p>
  );
}

/** Hidden field that only bots fill in. */
export function Honeypot() {
  return (
    <div aria-hidden className="absolute -left-[9999px] h-px w-px overflow-hidden">
      <label>
        Leave this empty
        <input type="text" name="website" tabIndex={-1} autoComplete="off" />
      </label>
    </div>
  );
}
