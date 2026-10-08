export const site = {
  name: "Da’Elites Academy",
  legalName: "Da’Elites Virtual Tutoring",
  description:
    "Live virtual tutoring for WAEC, JAMB, IELTS, and TOEFL. Mathematics, English, and the sciences, taught in small classes from Nigeria.",
  /**
   * Inbox for lesson enquiries. Replace this before the site goes live.
   */
  email: "hello@daelitesacademy.com",
  linkedin: "https://www.linkedin.com/company/da-elites-virtual-tutoring",
  location: "Nigeria",
  format: "Live classes on Zoom",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://daeliteacademy.netlify.app",
};

export const containerClass = "mx-auto w-full max-w-6xl px-5 sm:px-8";

export const mainNav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/tutors", label: "Our Tutors" },
  { href: "/contact", label: "Contact" },
] as const;

export const academics = [
  {
    href: "/curriculum",
    label: "Our Curriculum",
    description: "Subjects, stages, and what each paper covers",
  },
  {
    href: "/start-studying",
    label: "Start Studying",
    description: "How a student joins a live class",
  },
  {
    href: "/past-papers",
    label: "Past Papers",
    description: "How official questions are used in lessons",
  },
  {
    href: "/book",
    label: "Book a Session",
    description: "Send an enquiry for a one-to-one or group class",
  },
] as const;

export const exams = [
  {
    name: "WAEC",
    detail: "School certificate papers in Mathematics, English, and the sciences.",
  },
  {
    name: "JAMB",
    detail: "UTME preparation, including Use of English and CBT-style practice.",
  },
  {
    name: "IELTS",
    detail: "Listening, reading, writing, and speaking, taught toward a target band.",
  },
  {
    name: "TOEFL",
    detail: "Academic English for university admission, including integrated tasks.",
  },
] as const;
