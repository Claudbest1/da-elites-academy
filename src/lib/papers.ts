export type PaperGuide = {
  id: string;
  body: string;
  title: string;
  summary: string;
  subjects: string[];
  inClass: string;
  href: string;
  linkLabel: string;
};

export const papers: PaperGuide[] = [
  {
    id: "waec",
    body: "WAEC",
    title: "West African Senior School Certificate",
    summary:
      "WAEC sets the school certificate most of our senior students are working toward. We do not host the council’s papers on this site. In class, tutors use questions the student already has, or direct them to material published by WAEC.",
    subjects: ["Mathematics", "English Language", "Physics", "Chemistry", "Biology"],
    inClass:
      "A lesson usually takes one question apart: what the stem is asking, where the marks sit, and how a complete answer looks. Students then attempt a similar question before the next class.",
    href: "https://www.waecnigeria.org/",
    linkLabel: "WAEC Nigeria",
  },
  {
    id: "jamb",
    body: "JAMB",
    title: "Unified Tertiary Matriculation Examination",
    summary:
      "JAMB’s UTME is a CBT paper. Practice has to feel like the screen, not only like a printed booklet. Official information about registration and the examination stays with JAMB.",
    subjects: ["Use of English", "Mathematics", "Physics", "Chemistry", "Biology"],
    inClass:
      "Students sit short CBT-style sets, then sort the misses into three piles: did not know the topic, misread the question, or ran out of time. The next lesson starts from that pile.",
    href: "https://www.jamb.gov.ng/",
    linkLabel: "JAMB",
  },
  {
    id: "ielts",
    body: "IELTS",
    title: "International English Language Testing System",
    summary:
      "IELTS band descriptors are public, and that is how writing and speaking feedback is framed. Test dates, centres, and official preparation advice belong to the IELTS partners.",
    subjects: ["Listening", "Reading", "Writing", "Speaking"],
    inClass:
      "Students complete a section under time, then mark it against the task. Speaking is done live. Writing is returned with comments tied to task response, coherence, vocabulary, and grammar.",
    href: "https://ielts.org/",
    linkLabel: "IELTS",
  },
  {
    id: "toefl",
    body: "TOEFL",
    title: "Test of English as a Foreign Language",
    summary:
      "TOEFL iBT tasks are integrated: a student reads, listens, then speaks or writes. Official registration and scoring information is published by ETS.",
    subjects: ["Reading", "Listening", "Speaking", "Writing"],
    inClass:
      "Lessons rehearse the order of an integrated task so note-taking has a purpose. Students compare their response with the points the lecture actually made.",
    href: "https://www.ets.org/toefl.html",
    linkLabel: "ETS TOEFL",
  },
];
