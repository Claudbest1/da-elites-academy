export type Stage = {
  id: string;
  label: string;
  summary: string;
  points: string[];
};

export type Subject = {
  slug: string;
  name: string;
  kicker: string;
  summary: string;
  image: string;
  imageAlt: string;
  stages: Stage[];
};

const img = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1600&q=80`;

export const subjects: Subject[] = [
  {
    slug: "mathematics",
    name: "Mathematics",
    kicker: "Number, algebra, and exam method",
    summary:
      "Mathematics at Da’Elites is taught as a sequence of methods students can reuse under time. Lessons move from a worked example to independent questions, then to the way WAEC and JAMB award marks.",
    image: img("photo-1635070041078-e363dbe005cb"),
    imageAlt: "Chalkboard covered with algebraic working",
    stages: [
      {
        id: "junior",
        label: "Junior Secondary",
        summary:
          "JSS mathematics builds the habits senior papers depend on: neat working, estimation, and the language of word problems.",
        points: [
          "Number, fractions, decimals, and directed numbers",
          "Introductory algebra and simple equations",
          "Angles, triangles, and basic mensuration",
          "Data, averages, and reading a chart",
        ],
      },
      {
        id: "senior",
        label: "Senior Secondary",
        summary:
          "SS 1 to SS 3 follows the school scheme while keeping an eye on the certificate paper, so topics are not crammed in the final term.",
        points: [
          "Algebra, quadratic equations, and sequences",
          "Geometry, trigonometry, and circle work",
          "Statistics and probability",
          "Functions, graphs, and variation",
        ],
      },
      {
        id: "waec",
        label: "WAEC Mathematics",
        summary:
          "Objective and theory papers are practised as they are set: method marks, timing, and the questions students usually rush.",
        points: [
          "Paper structure and how marks are awarded",
          "Theory questions written out in full",
          "Timed objective sets",
          "Review of errors from the student’s own working",
        ],
      },
      {
        id: "jamb",
        label: "JAMB Mathematics",
        summary:
          "UTME mathematics is fast. Classes train students to recognise a question type and choose a reliable method before the clock runs down.",
        points: [
          "High-frequency UTME topics",
          "Short methods that still show understanding",
          "CBT-style practice sets",
          "A personal list of topics to repair",
        ],
      },
    ],
  },
  {
    slug: "english",
    name: "English Language",
    kicker: "Reading, writing, and examination English",
    summary:
      "English lessons cover the school language papers and the writing students need for JAMB Use of English. The aim is control: a clear reading of the passage, and a paragraph that answers the question asked.",
    image: img("photo-1455390582262-044cdead277a"),
    imageAlt: "Hands writing with a pen on paper",
    stages: [
      {
        id: "junior",
        label: "Junior Secondary",
        summary:
          "Junior classes strengthen reading stamina, sentence control, and spoken English so later exam essays have something solid underneath them.",
        points: [
          "Comprehension and vocabulary in context",
          "Sentence types, agreement, and punctuation",
          "Short composition and letter writing",
          "Oral English sounds and stress",
        ],
      },
      {
        id: "senior",
        label: "Senior Secondary",
        summary:
          "Senior English treats summary, vocabulary, and continuous writing as exam skills, not as separate grammar drills.",
        points: [
          "Summary that keeps the writer’s meaning",
          "Essays, articles, speeches, and letters",
          "Grammar tested the way exam questions test it",
          "Spoken English for the oral paper",
        ],
      },
      {
        id: "waec",
        label: "WAEC English",
        summary:
          "Students practise the full shape of the English language paper, including the writing tasks that cost the most marks when they are vague.",
        points: [
          "Planning an essay against the question",
          "Comprehension and summary under time",
          "Lexis, structure, and common traps",
          "Oral English revision",
        ],
      },
      {
        id: "jamb",
        label: "JAMB Use of English",
        summary:
          "Use of English is compulsory. Lessons treat it as its own paper: passages, lexis, structure, and the oral forms JAMB tests.",
        points: [
          "Reading passages at UTME speed",
          "Lexis and structure drills",
          "Closest-in-meaning and opposite questions",
          "Register, stress, and emphatic patterns",
        ],
      },
    ],
  },
  {
    slug: "sciences",
    name: "Sciences",
    kicker: "Physics, chemistry, and biology",
    summary:
      "Science teaching starts from the idea, then the calculation or the diagram, then the way the question is worded. Physics, chemistry, and biology are available as separate lesson tracks.",
    image: img("photo-1532094349884-543bc11b234d"),
    imageAlt: "Glass laboratory flasks on a bench",
    stages: [
      {
        id: "basic",
        label: "Basic Science",
        summary:
          "Junior science keeps the three subjects connected, so students meet energy, matter, and living systems before they split into separate papers.",
        points: [
          "Scientific method and fair testing",
          "Matter, energy, and simple forces",
          "Cells, classification, and habitats",
          "Safety and reading a practical instruction",
        ],
      },
      {
        id: "physics",
        label: "Physics",
        summary:
          "Physics lessons insist on units, diagrams, and a stated formula before any arithmetic. That is where most lost marks begin.",
        points: [
          "Mechanics, motion, and forces",
          "Waves, light, and sound",
          "Electricity, magnetism, and circuits",
          "Heat, energy, and practical graphs",
        ],
      },
      {
        id: "chemistry",
        label: "Chemistry",
        summary:
          "Students learn to move between a word equation, a symbol equation, and a calculation without losing the chemistry in the arithmetic.",
        points: [
          "Atomic structure and the periodic table",
          "Acids, bases, salts, and rates",
          "Organic families and simple reactions",
          "Mole calculations and practical analysis",
        ],
      },
      {
        id: "biology",
        label: "Biology",
        summary:
          "Biology is taught with diagrams students can reproduce, and with the definitions examiners expect to see written in full.",
        points: [
          "Cell biology and biological molecules",
          "Nutrition, transport, and respiration",
          "Ecology, genetics, and evolution",
          "Practical drawings and magnification",
        ],
      },
    ],
  },
  {
    slug: "ielts",
    name: "IELTS",
    kicker: "Four papers, one target band",
    summary:
      "The IELTS intensive is for students who need a band score for study or migration. Each paper is trained on its own criteria, then sat together so timing becomes familiar.",
    image: img("photo-1434030216411-0b793f4b4173"),
    imageAlt: "A student studying with notes at a desk",
    stages: [
      {
        id: "listening",
        label: "Listening",
        summary:
          "Students learn to track a conversation, a monologue, and an academic discussion without losing the answer that was said once.",
        points: [
          "Prediction before the audio starts",
          "Maps, forms, and multiple choice",
          "Spelling and number traps",
          "Transferring answers cleanly",
        ],
      },
      {
        id: "reading",
        label: "Reading",
        summary:
          "Reading classes train speed with accuracy: where to look, what to ignore, and how to match a paraphrase to the passage.",
        points: [
          "Skimming and locating keywords",
          "True, false, and not given",
          "Matching headings and features",
          "Timing a full reading section",
        ],
      },
      {
        id: "writing",
        label: "Writing",
        summary:
          "Task 1 and Task 2 are marked against the public band descriptors. Feedback names which criterion moved, and which did not.",
        points: [
          "Task 1 overviews for charts and processes",
          "Task 2 position, development, and examples",
          "Cohesion without stock phrases",
          "Grammar and lexical range under time",
        ],
      },
      {
        id: "speaking",
        label: "Speaking",
        summary:
          "Speaking practice is live. Students answer Parts 1, 2, and 3, then hear what a clearer answer would have done differently.",
        points: [
          "Extending a short answer",
          "The long turn, planned in one minute",
          "Discussion without memorised speeches",
          "Pronunciation, stress, and pace",
        ],
      },
    ],
  },
  {
    slug: "toefl",
    name: "TOEFL",
    kicker: "Academic English for admission",
    summary:
      "TOEFL preparation follows the academic tasks universities use the score for: reading a passage, listening to a lecture, and speaking or writing from those sources.",
    image: img("photo-1523240795612-9a054b0db644"),
    imageAlt: "Students working together around a laptop",
    stages: [
      {
        id: "reading",
        label: "Reading",
        summary:
          "Students practise academic passages: finding the purpose of a paragraph, a reference word, and an inference that the text will support.",
        points: [
          "Factual and inference questions",
          "Vocabulary in an academic sentence",
          "Insert-text and prose-summary items",
          "Pacing a passage",
        ],
      },
      {
        id: "listening",
        label: "Listening",
        summary:
          "Lecture and conversation notes are part of the lesson. Students learn a short note system they can still read afterwards.",
        points: [
          "Conversations and office-hour exchanges",
          "Lecture structure and examples",
          "Attitude and function questions",
          "Notes that stay useful",
        ],
      },
      {
        id: "speaking",
        label: "Speaking",
        summary:
          "Independent and integrated speaking tasks are recorded in class so students can hear their own timing and organisation.",
        points: [
          "Independent opinion responses",
          "Integrated reading and listening tasks",
          "A template that still sounds like the student",
          "Delivery within the time limit",
        ],
      },
      {
        id: "writing",
        label: "Writing",
        summary:
          "Integrated writing teaches students to report the reading and the lecture without copying either. The academic discussion task is practised separately.",
        points: [
          "Integrated essay structure",
          "Reporting contrast between sources",
          "Academic discussion responses",
          "Language for attribution and caution",
        ],
      },
    ],
  },
  {
    slug: "jamb",
    name: "JAMB Intensive",
    kicker: "UTME, including Use of English",
    summary:
      "The JAMB intensive sits alongside subject lessons. It is for students who already know which combination they will sit and need a revision rhythm, CBT practice, and Use of English.",
    image: img("photo-1427504494785-3a9ca7044f45"),
    imageAlt: "Students seated in a lecture hall",
    stages: [
      {
        id: "use-of-english",
        label: "Use of English",
        summary:
          "Every candidate sits Use of English. This track is shared with the English department and is built around UTME question styles.",
        points: [
          "Comprehension passages",
          "Lexis and structure",
          "Oral forms tested on paper",
          "Timed section practice",
        ],
      },
      {
        id: "combination",
        label: "Subject Combination",
        summary:
          "Students book the subjects in their combination from the academy’s curriculum: Mathematics, English, Physics, Chemistry, and Biology.",
        points: [
          "A written combination at enrolment",
          "Separate subject teaching, not a mixed survey",
          "Overlap watched between science papers",
          "A weekly plan across the combination",
        ],
      },
      {
        id: "cbt",
        label: "CBT Practice",
        summary:
          "Screen practice is different from writing in an exercise book. Classes include sets taken in CBT conditions, then a review of the ones that were guessed.",
        points: [
          "Navigation and timing on a screen",
          "When to skip and return",
          "Review of guessed items",
          "A score the student can explain",
        ],
      },
      {
        id: "revision",
        label: "Revision Plan",
        summary:
          "The last stretch is a plan, not a pile of topics. Each week has a short list, a practice set, and a note of what is still unsteady.",
        points: [
          "Topic order by exam weight and weakness",
          "Mixed sets once single topics are steady",
          "A rest day that is actually kept",
          "Final-week light review",
        ],
      },
    ],
  },
];

export function getSubject(slug: string) {
  return subjects.find((subject) => subject.slug === slug);
}
