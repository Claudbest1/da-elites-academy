export type TutorBlock =
  | { type: "paragraphs"; text: string[] }
  | { type: "list"; items: string[] }
  | { type: "groups"; groups: { title: string; intro?: string; items: string[] }[] }
  | { type: "steps"; items: { title: string; text: string }[] };

export type TutorSection = {
  title: string;
  blocks: TutorBlock[];
};

export type Tutor = {
  id: string;
  name: string;
  role: string;
  tagline: string;
  facts: string[];
  image: string;
  imageAlt: string;
  sections: TutorSection[];
};

export const tutors: Tutor[] = [
  {
    id: "joseph-nwanjo",
    name: "Joseph Nwanjo",
    role: "Online English, Literature and ELA Tutor",
    tagline: "Helping students read better, write better, think better, and perform better.",
    facts: [
      "15+ years of teaching experience",
      "English Language, Literature-in-English, and ELA",
      "WAEC, NECO, JAMB, Cambridge, IGCSE, SAT, and IELTS preparation",
      "Lessons of 30, 60, or 90 minutes",
    ],
    image: "/tutors/joseph-nwanjo.jpg",
    imageAlt: "Portrait of Joseph Nwanjo",
    sections: [
      {
        title: "Professional profile",
        blocks: [
          {
            type: "paragraphs",
            text: [
              "Joseph is an English educator and private tutor with over 15 years of teaching experience. He specialises in English Language, Literature-in-English, English Language Arts (ELA), writing, reading comprehension, grammar, vocabulary, public speaking, and examination preparation.",
              "He has worked with learners across age groups and educational systems, including primary and elementary pupils, middle school, secondary and high school, university students, adults, ESL learners, and professionals.",
              "His teaching covers Nigerian and international curricula, including WAEC, NECO, JAMB, Cambridge Checkpoint, IGCSE, SAT, IELTS and proficiency preparation, and international ELA programmes.",
              "The approach is student-centred and practical. A lesson does not stop at an explanation. He first identifies what the learner understands, where the difficulties lie, and what the learner needs to achieve, then designs lessons with clear explanations, guided practice, independent work, feedback, and measurable progress.",
              "The goal is to help every learner become a more confident, capable, independent, and successful communicator.",
            ],
          },
        ],
      },
      {
        title: "What he teaches",
        blocks: [
          {
            type: "groups",
            groups: [
              {
                title: "English Language",
                intro: "Foundations and advanced skills in:",
                items: [
                  "Grammar, sentence structure, subject-verb agreement, tenses, and parts of speech",
                  "Vocabulary, word formation, punctuation, and spelling",
                  "Reading comprehension, context clues, main ideas, supporting details, inference, and summary writing",
                  "Essay, creative, narrative, descriptive, expository, argumentative, reflective, formal, and informal writing",
                  "Editing and proofreading",
                ],
              },
              {
                title: "Literature-in-English",
                intro:
                  "Students learn to move past simply reading a text, and to understand, analyse, interpret, and respond to it.",
                items: [
                  "Prose, poetry, and drama",
                  "Characterisation, plot, setting, theme, conflict, and point of view",
                  "Literary techniques, symbolism, tone, and mood",
                  "Close reading, literary analysis, essay responses, and examination questions",
                ],
              },
              {
                title: "English Language Arts",
                intro: "For international learners, instruction covers:",
                items: [
                  "Fiction and nonfiction",
                  "Reading comprehension, main idea, supporting details, theme, and central idea",
                  "Cause and effect, compare and contrast, character analysis, plot, and conflict",
                  "Inference, close reading, and text annotation",
                  "Argumentative writing, personal narrative, reflective writing, and literary response",
                  "Grammar and conventions",
                ],
              },
              {
                title: "Examination preparation",
                intro:
                  "Preparation covers both the content and the technique: how to understand questions, manage time, analyse passages, construct answers, avoid common errors, and improve through targeted practice.",
                items: [
                  "WAEC, NECO, and JAMB",
                  "Cambridge Checkpoint and Cambridge IGCSE",
                  "SAT English",
                  "IELTS and proficiency-related English",
                  "School examinations and international school assessments",
                ],
              },
            ],
          },
        ],
      },
      {
        title: "Who he teaches",
        blocks: [
          {
            type: "groups",
            groups: [
              {
                title: "Primary and elementary students",
                items: [
                  "Reading, phonics, and pronunciation",
                  "Spelling, vocabulary, and grammar",
                  "Comprehension, sentence construction, and creative writing",
                ],
              },
              {
                title: "Middle school students",
                items: [
                  "Reading comprehension, grammar, and vocabulary",
                  "Writing and literary analysis",
                  "Critical thinking and examination skills",
                ],
              },
              {
                title: "Secondary and high school students",
                items: [
                  "English Language, Literature-in-English, and ELA",
                  "Essay writing, reading, and comprehension",
                  "Grammar, examination preparation, and literary analysis",
                ],
              },
              {
                title: "University students",
                items: [
                  "Academic writing and essay development",
                  "Reading and analysis",
                  "Grammar, communication, presentation, and public speaking",
                ],
              },
              {
                title: "Adults, professionals, and ESL learners",
                items: [
                  "General English, communication, writing, vocabulary, and grammar",
                  "Public speaking and English proficiency",
                  "Lessons adapted to the learner’s current level and communication goals",
                ],
              },
            ],
          },
        ],
      },
      {
        title: "Teaching approach",
        blocks: [
          {
            type: "groups",
            groups: [
              {
                title: "Student-centred learning",
                intro:
                  "Lessons are adjusted to the student’s level, learning needs, pace, and goals. Some students learn quickly through explanation. Others need examples, visual materials, discussion, repetition, practice, or guided activities.",
                items: [],
              },
              {
                title: "Clear, step-by-step teaching",
                intro:
                  "Lessons move from explanation, to example, to guided practice, to independent practice, to feedback, and then assessment. Students learn what the answer is, and why it is correct.",
                items: [],
              },
              {
                title: "Active learning",
                intro: "Lessons are interactive rather than a lecture. They may include:",
                items: [
                  "Questions and discussion",
                  "Reading and writing exercises",
                  "Vocabulary challenges, quizzes, and games",
                  "Visual materials, short videos, and guided analysis",
                  "Revision and examination-style questions",
                ],
              },
              {
                title: "Continuous feedback",
                intro:
                  "Feedback covers accuracy, grammar, vocabulary, organisation, comprehension, writing, critical thinking, and examination technique. Where appropriate, parents or guardians receive progress reports.",
                items: [],
              },
            ],
          },
        ],
      },
      {
        title: "What makes the lessons different",
        blocks: [
          {
            type: "list",
            items: [
              "Teaching for understanding, not memorised answers.",
              "Teaching according to the learner’s level. A lesson for a younger pupil does not look like a lesson for a senior student.",
              "Teaching and practice in the same lesson, so the student applies what was just learned.",
              "Use of real assessment data: tests, assignments, writing samples, and class performance.",
              "Examination technique, so the student can show what they know on the paper.",
              "Confidence, so students become more willing to read, write, speak, ask questions, and express ideas.",
            ],
          },
        ],
      },
      {
        title: "A typical lesson",
        blocks: [
          {
            type: "steps",
            items: [
              { title: "Learning goal", text: "Identify exactly what the student should be able to do by the end of the lesson." },
              { title: "Warm-up and review", text: "Review previous learning and activate prior knowledge." },
              { title: "Direct instruction", text: "Explain the new concept with age-appropriate examples." },
              { title: "Guided practice", text: "Work through examples together." },
              { title: "Independent practice", text: "The student applies the skill alone." },
              { title: "Feedback and correction", text: "Examine errors and discuss how to improve." },
              { title: "Assessment", text: "A short activity checks whether the learning objective was met." },
              { title: "Follow-up", text: "Where appropriate, the student receives practice work or a target for the next lesson." },
            ],
          },
        ],
      },
      {
        title: "Lesson options",
        blocks: [
          {
            type: "list",
            items: [
              "Standard lesson, 60 minutes: regular weekly tutoring and skills development.",
              "Revision lesson, 30 minutes: focused revision, homework support, or a single concept.",
              "Intensive lesson, 90 minutes: examination preparation, extended writing, literary analysis, and intensive revision.",
              "Duration can be adjusted to the student’s age, goals, and programme.",
            ],
          },
        ],
      },
      {
        title: "Curriculum experience",
        blocks: [
          {
            type: "groups",
            groups: [
              {
                title: "Nigerian curriculum",
                items: ["WAEC, NECO, and JAMB", "Junior and Senior Secondary English", "Literature-in-English"],
              },
              {
                title: "Cambridge curriculum",
                items: ["Cambridge Checkpoint", "Cambridge IGCSE"],
              },
              {
                title: "American and other English programmes",
                items: [
                  "English Language Arts and SAT English preparation",
                  "IELTS and proficiency-related English",
                  "International school ELA programmes",
                ],
              },
            ],
          },
          {
            type: "paragraphs",
            text: [
              "That range is useful for students moving between educational systems, or studying in an international school.",
            ],
          },
        ],
      },
      {
        title: "Areas of specialisation",
        blocks: [
          {
            type: "groups",
            groups: [
              {
                title: "Reading and comprehension",
                items: ["Understanding texts, identifying important information, making inferences, analysing ideas, and responding accurately."],
              },
              {
                title: "Writing",
                items: ["Developing ideas, organising paragraphs, choosing vocabulary, improving grammar, and producing clear writing."],
              },
              {
                title: "Grammar",
                items: ["Making difficult grammar understandable through explanation, examples, practice, and correction."],
              },
              {
                title: "Literature",
                items: ["Understanding literary texts and writing strong analytical responses."],
              },
              {
                title: "Examination preparation",
                items: ["Subject knowledge, question analysis, answer development, time management, and practice."],
              },
              {
                title: "Academic confidence",
                items: ["Becoming more comfortable expressing ideas through reading, writing, speaking, and discussion."],
              },
            ],
          },
        ],
      },
      {
        title: "Progress and assessment",
        blocks: [
          {
            type: "paragraphs",
            text: ["Tutoring should produce measurable progress. Depending on the programme, students may receive:"],
          },
          {
            type: "list",
            items: [
              "An initial diagnostic assessment",
              "Regular quizzes, homework, and practice",
              "Writing and reading comprehension assessments",
              "Examination-style tests",
              "Progress tracking, individual feedback, and parent or guardian reports",
            ],
          },
          {
            type: "paragraphs",
            text: ["Results are used to answer a practical question: what should the student work on next?"],
          },
        ],
      },
      {
        title: "Support for parents",
        blocks: [
          {
            type: "paragraphs",
            text: ["Where appropriate, parents or guardians are told:"],
          },
          {
            type: "list",
            items: [
              "Topics covered and how the student participated",
              "Strengths and areas that need improvement",
              "Assessment performance, homework, and recommended practice",
              "Progress over time",
            ],
          },
        ],
      },
      {
        title: "Teaching philosophy",
        blocks: [
          {
            type: "paragraphs",
            text: [
              "Every student can improve with clear instruction, an appropriate challenge, practice, feedback, and encouragement. Mistakes are part of learning. An incorrect answer shows what the student understands and where further teaching is required.",
              "The tutor’s job is not only to provide answers. It is to help students develop the skill and confidence to find better answers themselves.",
            ],
          },
        ],
      },
      {
        title: "Professional experience",
        blocks: [
          {
            type: "paragraphs",
            text: [
              "English and Literature-in-English educator, with more than 15 years of teaching. Experience includes English Language, Literature-in-English, English Language Arts, French, public speaking, curriculum planning, lesson development, student assessment, examination preparation, mentoring, and academic coaching.",
              "He has also worked in school leadership and academic coordination, including teaching quality, curriculum implementation, student development, and academic performance.",
            ],
          },
        ],
      },
      {
        title: "Beyond the classroom",
        blocks: [
          {
            type: "paragraphs",
            text: [
              "Support has included debate, public speaking, spelling competitions, creative writing, reading development, academic competitions, and examination preparation. Language education should develop examination performance, and also communication, confidence, critical thinking, and creativity.",
            ],
          },
        ],
      },
      {
        title: "What students can expect",
        blocks: [
          {
            type: "list",
            items: [
              "Clear explanations and patient instruction",
              "Structured lessons and relevant practice",
              "Constructive feedback and individual support",
              "Examination-focused preparation where it is required",
              "Progress monitoring in a supportive learning environment",
              "Lessons designed around the student’s goals",
            ],
          },
        ],
      },
      {
        title: "For parents",
        blocks: [
          {
            type: "paragraphs",
            text: [
              "A child’s needs are not the same as another student’s. Some learners need help with reading. Some struggle with grammar. Some understand English but find writing difficult. Others need stronger examination technique, or the confidence to participate and express themselves.",
              "The programme starts from where the learner is now, and from where the learner needs to go.",
            ],
          },
        ],
      },
      {
        title: "Why online tutoring",
        blocks: [
          {
            type: "paragraphs",
            text: [
              "Online tutoring gives individual attention without the limits of a crowded classroom. Lessons can use digital materials, shared documents, interactive exercises, reading passages, writing activities, quizzes, visual resources, discussion, immediate feedback, and progress tracking. The aim is learning that is interactive, purposeful, and engaging.",
            ],
          },
        ],
      },
      {
        title: "A typical student journey",
        blocks: [
          {
            type: "steps",
            items: [
              { title: "Start", text: "Assessment and goal setting." },
              { title: "Plan", text: "An individual learning programme." },
              { title: "Learn", text: "Structured online lessons." },
              { title: "Practise", text: "Guided and independent activities." },
              { title: "Assess", text: "Quizzes, assignments, and tests." },
              { title: "Review", text: "Feedback and error correction." },
              { title: "Improve", text: "Targeted practice." },
              { title: "Progress", text: "Regular monitoring and reporting." },
            ],
          },
        ],
      },
      {
        title: "Subjects at a glance",
        blocks: [
          {
            type: "groups",
            groups: [
              { title: "English Language", items: ["Grammar, vocabulary, reading, writing, and comprehension"] },
              { title: "Literature-in-English", items: ["Prose, poetry, drama, and analysis"] },
              { title: "ELA", items: ["Reading, writing, literary response, and language"] },
              { title: "Examination preparation", items: ["WAEC, NECO, JAMB, Checkpoint, IGCSE, and SAT"] },
              { title: "Academic writing", items: ["Essays, paragraphs, structure, and editing"] },
              { title: "Creative writing", items: ["Narrative, descriptive, and reflective writing"] },
              { title: "Public speaking", items: ["Confidence, organisation, and delivery"] },
              { title: "ESL and English proficiency", items: ["Grammar, vocabulary, reading, writing, and communication"] },
            ],
          },
        ],
      },
      {
        title: "Working together",
        blocks: [
          {
            type: "paragraphs",
            text: [
              "Whether a student needs stronger foundations, better academic writing, a clearer reading of literature, examination preparation, or more confidence as a communicator, the tutoring is built around that need.",
              "The goal is not simply to complete another lesson. The goal is progress: learn, practise, improve, achieve.",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "omowunmi-folarin",
    name: "Omowunmi Folarin",
    role: "English Tutor for SATs, 11+ and GCSE English",
    tagline:
      "Many children don’t struggle with English because they can’t do it. They struggle because nobody has shown them exactly how to answer the question in front of them. That is the gap she closes.",
    facts: [
      "More than five years teaching English online",
      "SATs, 11+, and GCSE English",
      "Children, teenagers, and adults",
      "B.A. English Language and Literature, University of Ibadan",
      "TEFL certified",
    ],
    image: "/tutors/omowunmi-folarin.jpg",
    imageAlt: "Portrait of Omowunmi Folarin",
    sections: [
      {
        title: "Profile",
        blocks: [
          {
            type: "paragraphs",
            text: [
              "Omowunmi has taught English online for over five years, working with children, teenagers, and adults. She helps pupils prepare for SATs, 11+, and GCSE English, and she makes sure the basics underneath — grammar, punctuation, reading, and writing — are solid enough to carry them through.",
            ],
          },
        ],
      },
      {
        title: "How lessons work",
        blocks: [
          {
            type: "paragraphs",
            text: [
              "She begins with a short assessment so everyone knows where the child is starting from. Then every lesson follows the same routine: she teaches one idea, shows how it is done, gives the child a chance to practise with feedback, and then they try it on their own. Children like knowing what comes next, and it keeps them focused.",
            ],
          },
        ],
      },
      {
        title: "What your child will work on",
        blocks: [
          {
            type: "list",
            items: [
              "Grammar, punctuation, and spelling",
              "Reading comprehension, including finding evidence and inferring meaning",
              "Descriptive, creative, and argumentative writing",
              "Past papers, so the format and timing feel familiar by exam day",
            ],
          },
        ],
      },
      {
        title: "What parents will see",
        blocks: [
          {
            type: "list",
            items: [
              "A lesson plan built around the child’s goals and exam date",
              "Marked work with clear feedback on what went well and what to fix",
              "Regular progress updates on what was covered, the child’s strengths, and what to practise at home",
            ],
          },
        ],
      },
      {
        title: "Qualifications",
        blocks: [
          {
            type: "list",
            items: [
              "B.A. English Language and Literature, University of Ibadan",
              "TEFL certified",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "oluwole-samuel",
    name: "Oluwole Samuel",
    role: "Biology and Chemistry Tutor",
    tagline:
      "A Mathematics and Science educator with a background in microbiology, laboratory technology, marine engineering, STEM, and health and safety.",
    facts: [
      "HND in Microbiology",
      "OND in Science Laboratory Technology",
      "OND in Marine Engineering",
      "Mathematics, Physics, Chemistry, Biology, and AP Biology",
      "GCSE Mathematics and Science",
    ],
    image: "/tutors/oluwole-samuel.jpg",
    imageAlt: "Portrait of Oluwole Samuel",
    sections: [
      {
        title: "Profile",
        blocks: [
          {
            type: "paragraphs",
            text: [
              "Oluwole is a Mathematics and Science educator with a multidisciplinary background spanning Microbiology, Science Laboratory Technology, Marine Engineering, STEM education, and Health, Safety and Environment (HSE).",
              "He holds an HND in Microbiology, alongside OND qualifications in Science Laboratory Technology and Marine Engineering. That scientific and technical foundation is what he teaches from: Mathematics, Physics, Chemistry, Biology, and AP Biology.",
            ],
          },
        ],
      },
      {
        title: "Where he has taught",
        blocks: [
          {
            type: "paragraphs",
            text: [
              "His teaching experience spans Calvary Education Centre, De Prominent Montessori School, PAIX International School, Grace Land International School, and DA-Elite Virtual Academy. The work covers classroom instruction, physical and online tutoring, academic revision, examination preparation, assessment, and individual student support.",
            ],
          },
        ],
      },
      {
        title: "At Da’Elites",
        blocks: [
          {
            type: "paragraphs",
            text: [
              "Through DA-Elite Virtual Academy he provides structured learning, including GCSE Mathematics and Science. The emphasis is conceptual understanding, critical thinking, and problem-solving.",
            ],
          },
        ],
      },
      {
        title: "Subjects",
        blocks: [
          {
            type: "list",
            items: [
              "Biology and Chemistry",
              "AP Biology",
              "Physics",
              "Mathematics",
              "GCSE Mathematics and Science",
            ],
          },
        ],
      },
      {
        title: "Qualifications",
        blocks: [
          {
            type: "list",
            items: [
              "HND in Microbiology",
              "OND in Science Laboratory Technology",
              "OND in Marine Engineering",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "osakpolor-igbinakenzua",
    name: "Osakpolor IgbinakenZua",
    role: "Mathematics and Physics Tutor",
    tagline:
      "He simplifies difficult concepts, encourages students to take part, and helps them solve problems on their own.",
    facts: [
      "Second Class Upper, Engineering, University of Benin",
      "Mathematics: Grade 2–9, GCSE, schoolwork, and entrance exams",
      "Physics: GCSE, A-Level, Edexcel, and OCR",
      "Online one-to-one lessons",
    ],
    image: "/tutors/osakpolor-igbinakenzua.jpg",
    imageAlt: "Portrait of Osakpolor IgbinakenZua",
    sections: [
      {
        title: "Profile",
        blocks: [
          {
            type: "paragraphs",
            text: [
              "Osakpolor is an engineering student at the University of Benin, where he earned a Second Class Upper. He is a Mathematics and Physics tutor with experience teaching students across primary and secondary levels through online one-to-one lessons.",
              "He focuses on simplifying difficult concepts, encouraging active participation, and helping students build confidence in solving problems independently.",
            ],
          },
        ],
      },
      {
        title: "Subjects and levels",
        blocks: [
          {
            type: "groups",
            groups: [
              {
                title: "Mathematics",
                items: ["Grade 2–9", "GCSE Mathematics", "Schoolwork and entrance examination preparation"],
              },
              {
                title: "Physics",
                items: ["GCSE Physics", "A-Level Physics", "Edexcel and OCR examination preparation"],
              },
            ],
          },
        ],
      },
      {
        title: "Areas of experience",
        blocks: [
          {
            type: "list",
            items: [
              "Mathematics and Physics tutoring",
              "Examination and entrance examination preparation",
              "Past-paper and assessment practice",
              "Homework and schoolwork support",
              "Student progress monitoring and monthly reporting",
              "Identifying learning gaps and providing targeted support",
            ],
          },
        ],
      },
      {
        title: "Teaching approach",
        blocks: [
          {
            type: "paragraphs",
            text: [
              "He uses clear explanations, worked examples, guided practice, and independent questions so students understand the concept. He adjusts the teaching to each student’s age, level, and learning needs.",
            ],
          },
        ],
      },
      {
        title: "Key strengths",
        blocks: [
          {
            type: "list",
            items: [
              "Clear and patient communication",
              "Simplifying complex concepts",
              "Adaptability to different learning levels",
              "Exam-focused teaching",
              "Regular progress tracking",
              "One-to-one online lesson delivery",
            ],
          },
        ],
      },
      {
        title: "Professional goal",
        blocks: [
          {
            type: "paragraphs",
            text: [
              "To help students develop strong subject knowledge, improve their academic performance, and become more confident and independent learners.",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "oparinde-samuel-oluwadamilare",
    name: "Oparinde Samuel Oluwadamilare",
    role: "Mathematics, Further Mathematics, and Physics Tutor",
    tagline:
      "He connects abstract mathematics with practical use, and uses what students’ work shows to help them succeed.",
    facts: [
      "Mathematics, Further Mathematics, and Physics",
      "GCSE, PSAT, and SAT preparation",
      "STEM educator, data scientist, and academic administrator",
    ],
    image: "/tutors/oparinde-samuel-oluwadamilare.jpg",
    imageAlt: "Portrait of Oparinde Samuel Oluwadamilare",
    sections: [
      {
        title: "Profile",
        blocks: [
          {
            type: "paragraphs",
            text: [
              "Oparinde is a STEM educator, data scientist, and academic administrator. He helps students make full use of their educational opportunities, drawing on a foundation in mathematics, computer science, and data analytics.",
              "He aims to bridge abstract mathematical concepts with practical applications, and to use data-driven insight for student success and institutional growth.",
            ],
          },
        ],
      },
      {
        title: "Skills and what he does",
        blocks: [
          {
            type: "groups",
            groups: [
              {
                title: "Teaching and lessons",
                items: [
                  "Mathematics, Further Mathematics, and Physics",
                  "Preparation for GCSE, PSAT, and SAT",
                ],
              },
              {
                title: "Classroom methods",
                items: [
                  "Difficult concepts broken into simple, everyday steps so every student can follow",
                ],
              },
              {
                title: "Tracking progress",
                items: [
                  "Basic digital tools and simple data insights to monitor progress and give useful feedback",
                ],
              },
              {
                title: "Communication",
                items: [
                  "Works with parents, fellow teachers, and students, and can handle several tasks at once",
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "aturamu-damilola",
    name: "Aturamu Damilola",
    role: "Mathematics and Technical Drawing Tutor",
    tagline:
      "Clear, engaging teaching that helps students master difficult ideas and grow more confident at solving problems.",
    facts: [
      "First Class, Agricultural and Environmental Engineering, CGPA 4.70/5.00",
      "Algebra, geometry, calculus, and statistics",
      "GCSE Mathematics, SAT Mathematics, and AP Statistics",
      "Nine Dean’s Awards for Excellence",
    ],
    image: "/tutors/aturamu-damilola.jpg",
    imageAlt: "Portrait of Aturamu Damilola",
    sections: [
      {
        title: "Profile",
        blocks: [
          {
            type: "paragraphs",
            text: [
              "Aturamu is a Mathematics and Technical Drawing educator. He combines subject expertise with clear, engaging instruction so students can master challenging concepts and build confidence in solving problems.",
              "He is a First-Class graduate in Agricultural and Environmental Engineering, with a CGPA of 4.70/5.00. That analytical foundation is what he brings to algebra, geometry, calculus, and statistics.",
              "He has taught in the classroom and online, including GCSE Mathematics, SAT Mathematics, and AP Statistics. Further training covers International Maths Olympiad preparation, SAT Mathematics, and Functions and Calculus.",
            ],
          },
        ],
      },
      {
        title: "Where he has taught",
        blocks: [
          {
            type: "paragraphs",
            text: [
              "His teaching experience spans Adex International Group of Schools, Prime Peculiar College, Immanuel International College, and Graceland International School, where he taught General Mathematics and Further Mathematics.",
              "Since 2023 he has taught Mathematics and Technical Drawing at Royal Oxbridge International School, led its Competition Club, and mentored students for national and international academic competitions. He also tutors through DA-Elite Virtual Academy and Royale Virtual Tutors.",
            ],
          },
        ],
      },
      {
        title: "Subjects",
        blocks: [
          {
            type: "list",
            items: [
              "Mathematics and Technical Drawing",
              "General Mathematics and Further Mathematics",
              "Algebra, geometry, calculus, and statistics",
              "GCSE Mathematics, SAT Mathematics, and AP Statistics",
              "Functions and Calculus",
              "International Maths Olympiad preparation",
            ],
          },
        ],
      },
      {
        title: "Academic achievements",
        blocks: [
          {
            type: "list",
            items: [
              "First Class in Agricultural and Environmental Engineering, CGPA 4.70/5.00",
              "Nine Dean’s Awards for Excellence",
              "I-Scholar Initiative Scholarship",
              "State General Secretary, Nigeria Christian Corpers’ Fellowship, Rivers State Chapter",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "victor-ayokunle-atunramu",
    name: "Victor Ayokunle Atunramu",
    role: "Academic Tutor",
    tagline:
      "Academic support tailored to international curricula and higher education.",
    facts: [
      "US curriculum, Grades 1–12, including SAT, PSAT, and AP",
      "UK curriculum from primary through GCSE, IGCSE, and A-Level",
      "Canadian curriculum, Grades 1–12",
      "College mathematics, from calculus through statistics",
    ],
    image: "/tutors/victor-ayokunle-atunramu.jpg",
    imageAlt: "Portrait of Victor Ayokunle Atunramu",
    sections: [
      {
        title: "Academic tutoring services",
        blocks: [
          {
            type: "paragraphs",
            text: [
              "Da’Elites’ Virtual Academy offers comprehensive academic support tailored to international curricula and higher education levels. Below is a detailed breakdown of the educational programs and services provided.",
            ],
          },
        ],
      },
      {
        title: "US curriculum support (Grades 1–12)",
        blocks: [
          {
            type: "paragraphs",
            text: [
              "Structured academic coaching, homework help, and core subject mastery aligned with American state standards and Common Core guidelines.",
            ],
          },
          {
            type: "groups",
            groups: [
              {
                title: "Elementary School (Grades 1–5)",
                items: [
                  "Foundational reading comprehension, grammar, spelling, basic arithmetic, number sense, elementary science, and social studies",
                ],
              },
              {
                title: "Middle School (Grades 6–8)",
                items: [
                  "Intermediate English Language Arts (ELA), pre-algebra, algebra I, earth and life sciences, civics, and US history",
                ],
              },
              {
                title: "High School (Grades 9–12)",
                items: [
                  "Advanced coursework preparation including Algebra II, Geometry, Trigonometry, Pre-Calculus, Calculus, Biology, Chemistry, Physics, English Literature, and American History",
                ],
              },
              {
                title: "US test prep",
                items: [
                  "Targeted coaching for standardized assessments including the SAT, PSAT, and AP (Advanced Placement) exams",
                ],
              },
            ],
          },
        ],
      },
      {
        title: "UK curriculum support (Years 1–A-Levels)",
        blocks: [
          {
            type: "paragraphs",
            text: [
              "Comprehensive tutoring mapped to the National Curriculum for England, supporting all key stages up to university entrance.",
            ],
          },
          {
            type: "groups",
            groups: [
              {
                title: "Primary (Key Stages 1 and 2 / Years 1–6)",
                items: [
                  "Core literacy (phonics, reading, creative writing), grammar, numeracy, mental math, and primary science",
                ],
              },
              {
                title: "Lower and Upper Secondary (Key Stage 3 and GCSE / Years 7–11)",
                items: [
                  "Subject-specific preparation for GCSE and IGCSE examinations, covering English Language, English Literature, Mathematics, Combined and Triple Sciences (Biology, Chemistry, Physics), History, Geography, and Computer Science",
                ],
              },
              {
                title: "Sixth Form (Key Stage 5 / Years 12–13 / AS and A-Levels)",
                items: [
                  "Deep academic mentoring for specialised A-Level subjects, with rigorous preparation for university admissions",
                  "Popular subjects include Mathematics, Further Mathematics, Physics, Chemistry, Biology, Economics, and English Literature",
                ],
              },
            ],
          },
        ],
      },
      {
        title: "Canadian curriculum support (Grades 1–12)",
        blocks: [
          {
            type: "paragraphs",
            text: [
              "Curriculum-aligned support adapted to provincial educational standards across Canada.",
            ],
          },
          {
            type: "groups",
            groups: [
              {
                title: "Elementary and Middle Grades (Grades 1–8)",
                items: [
                  "English and Language Arts, Mathematics (number sense, geometry, data management), General Science, and Social Studies",
                ],
              },
              {
                title: "Senior Grades (Grades 9–12)",
                items: [
                  "Functions, Advanced Functions, Calculus and Vectors, Sciences (Chemistry, Biology, Physics), and English, preparing students for Canadian high school diplomas and post-secondary transitions",
                ],
              },
            ],
          },
        ],
      },
      {
        title: "College mathematics",
        blocks: [
          {
            type: "paragraphs",
            text: [
              "To bridge the gap between secondary school and university-level academics, the college math program covers advanced quantitative disciplines.",
            ],
          },
          {
            type: "groups",
            groups: [
              {
                title: "Core university math",
                items: [
                  "Single and multivariable calculus, linear algebra, differential equations, and discrete mathematics",
                ],
              },
              {
                title: "Applied mathematics",
                items: [
                  "Statistics, probability, business calculus, and quantitative methods for economics and the sciences",
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];
