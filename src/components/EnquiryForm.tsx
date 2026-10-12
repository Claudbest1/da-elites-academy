"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/site";
import { subjects } from "@/lib/subjects";

const exams = [
  "US curriculum",
  "SAT or AP",
  "College math",
  "French",
  "Yoruba",
  "Coding",
  "WAEC",
  "JAMB",
  "IELTS",
  "TOEFL",
];
const formats = ["One-to-one", "Small group", "Not sure yet"];

type Errors = Partial<Record<"name" | "email" | "exam" | "subject" | "message", string>>;

export function EnquiryForm({
  intent,
  defaultSubject = "",
}: {
  intent: "session" | "message";
  defaultSubject?: string;
}) {
  const [errors, setErrors] = useState<Errors>({});
  const [draft, setDraft] = useState("");
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const exam = String(data.get("exam") ?? "").trim();
    const subject = String(data.get("subject") ?? "").trim();
    const format = String(data.get("format") ?? "").trim();
    const availability = String(data.get("availability") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const nextErrors: Errors = {};
    if (name.length < 2) nextErrors.name = "Enter the student’s name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (intent === "session" && !exam) nextErrors.exam = "Choose an exam.";
    if (intent === "session" && !subject) nextErrors.subject = "Choose a subject.";
    if (intent === "message" && message.length < 10) {
      nextErrors.message = "Add a short note so we know how to help.";
    }
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const lines = [
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : "",
      exam ? `Exam: ${exam}` : "",
      subject ? `Subject: ${subject}` : "",
      format ? `Format: ${format}` : "",
      availability ? `Availability: ${availability}` : "",
      "",
      message || "Please let me know the next available class.",
    ].filter((line, index, all) => line !== "" || all[index - 1] !== "");

    const body = lines.join("\n");
    const subjectLine =
      intent === "session" ? `Lesson enquiry: ${subject}` : "Message for Da’Elites Academy";
    const mailto = `mailto:${site.email}?subject=${encodeURIComponent(subjectLine)}&body=${encodeURIComponent(body)}`;
    setDraft(body);
    setSent(true);
    window.location.href = mailto;
  }

  if (sent) {
    return (
      <div className="surface-rest p-6 sm:p-8">
        <h2 className="font-display text-3xl text-ink">Your email app should open now.</h2>
        <p className="mt-3 text-sm leading-relaxed text-ink-soft">
          The enquiry is addressed to {site.email}. If nothing opened, copy the note below into
          a new message. A place in class is confirmed only when the academy replies.
        </p>
        <pre className="mt-5 overflow-x-auto whitespace-pre-wrap border border-line bg-paper p-4 text-sm text-ink">
          {draft}
        </pre>
        <button
          type="button"
          className="mt-5 rounded-full bg-blue-deep px-5 py-3 text-sm font-semibold text-white"
          onClick={() => {
            void navigator.clipboard?.writeText(draft);
          }}
        >
          Copy enquiry
        </button>
      </div>
    );
  }

  const fieldClass =
    "mt-2 w-full rounded-xl border border-line bg-white px-3 py-3 text-sm text-ink outline-none ring-blue/20 focus:border-blue-deep focus:ring-4";

  return (
    <form onSubmit={submit} noValidate className="surface-rest p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-semibold text-ink">
          Student name
          <input name="name" autoComplete="name" className={fieldClass} />
          {errors.name ? <span className="mt-1 block font-normal text-terra-deep">{errors.name}</span> : null}
        </label>
        <label className="block text-sm font-semibold text-ink">
          Email
          <input name="email" type="email" autoComplete="email" className={fieldClass} />
          {errors.email ? <span className="mt-1 block font-normal text-terra-deep">{errors.email}</span> : null}
        </label>
        <label className="block text-sm font-semibold text-ink sm:col-span-2">
          Phone <span className="font-normal text-mist">(optional)</span>
          <input name="phone" type="tel" autoComplete="tel" className={fieldClass} />
        </label>
        {intent === "session" ? (
          <>
            <label className="block text-sm font-semibold text-ink">
              Exam
              <select name="exam" defaultValue="" className={fieldClass}>
                <option value="" disabled>
                  Select an exam
                </option>
                {exams.map((exam) => (
                  <option key={exam}>{exam}</option>
                ))}
              </select>
              {errors.exam ? <span className="mt-1 block font-normal text-terra-deep">{errors.exam}</span> : null}
            </label>
            <label className="block text-sm font-semibold text-ink">
              Subject
              <select name="subject" defaultValue={defaultSubject} className={fieldClass}>
                <option value="" disabled>
                  Select a subject
                </option>
                {subjects.map((subject) => (
                  <option key={subject.slug} value={subject.name}>
                    {subject.name}
                  </option>
                ))}
              </select>
              {errors.subject ? (
                <span className="mt-1 block font-normal text-terra-deep">{errors.subject}</span>
              ) : null}
            </label>
            <label className="block text-sm font-semibold text-ink">
              Class format
              <select name="format" defaultValue={formats[0]} className={fieldClass}>
                {formats.map((format) => (
                  <option key={format}>{format}</option>
                ))}
              </select>
            </label>
            <label className="block text-sm font-semibold text-ink">
              Preferred days and times
              <input name="availability" className={fieldClass} placeholder="Weekday evenings, Saturdays…" />
            </label>
          </>
        ) : null}
        <label className="block text-sm font-semibold text-ink sm:col-span-2">
          {intent === "session" ? "Anything we should know" : "Message"}
          <textarea name="message" rows={5} className={fieldClass} />
          {errors.message ? (
            <span className="mt-1 block font-normal text-terra-deep">{errors.message}</span>
          ) : null}
        </label>
      </div>
      <button type="submit" className="mt-6 rounded-full bg-terra px-5 py-3 text-sm font-semibold text-white hover:bg-terra-deep">
        {intent === "session" ? "Send lesson enquiry" : "Send message"}
      </button>
    </form>
  );
}
