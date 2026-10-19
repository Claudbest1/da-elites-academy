export const site = {
	name: "Da’Elites Academy",
	legalName: "Da’Elites Virtual Tutoring",
	description:
		"Live virtual tutoring for students in the United States. US curriculum, SAT, AP, college math, French, Yoruba, and coding, taught on Zoom.",
	/**
	 * Inbox for lesson enquiries. Replace this before the site goes live.
	 */
	email: "daelitesvirtualtutors@gmail.com",
	phones: ["+2349013823996", "+2348039327362"],
	linkedin: "https://www.linkedin.com/company/da-elites-virtual-tutoring",
	location: "Nigeria",
	format: "Live classes on Zoom",
	url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://daeliteacademy.netlify.app",
};

export const academyCopy = {
	hookEyebrow: "Welcome to Da’Elites’ Virtual Academy",
	hook:
		"Guiding potential. Elevating flight. Welcome to Da’Elites’ Virtual Academy—where your child’s academic journey transforms into a journey of excellence.",
	vision:
		"Redefining digital education by nurturing self-assured, high-achieving scholars equipped for global academic excellence.",
	mission:
		"To deliver structured, engaging, and results-driven instruction in English, literature, and standardized test prep that turns every student’s hidden capability into proven achievement.",
	aboutTitle: "Built for Your Child’s Real-World Curriculum",
	about: [
		"Your child already has a school day, a syllabus, and specific assignments to conquer. Da’Elites’ Virtual Academy is designed to keep the focus precisely on that work: grade by grade, subject by subject, test by test.",
		"We teach virtually because excellence shouldn’t be limited by location. Your child doesn’t need to live down the street to access world-class mentorship; they just need to log in ready to engage. Together, we turn looming school stress into proven academic confidence.",
	],
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

const programmeImage = (id: string) =>
	`https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=80`;

export const programmes = [
	{
		id: "us-curriculum",
		title: "US curriculum support (Grades 1–12)",
		image: programmeImage("photo-1509062522246-3755977927d7"),
		imageAlt: "Students working together in a classroom",
		intro:
			"Structured academic coaching, homework help, and core subject mastery aligned with American state standards and Common Core guidelines.",
		items: [
			"Elementary School (Grades 1–5): foundational reading comprehension, grammar, spelling, basic arithmetic, number sense, elementary science, and social studies.",
			"Middle School (Grades 6–8): intermediate English Language Arts (ELA), pre-algebra, algebra I, earth and life sciences, civics, and US history.",
			"High School (Grades 9–12): Algebra II, Geometry, Trigonometry, Pre-Calculus, Calculus, Biology, Chemistry, Physics, English Literature, and American History.",
			"US test prep: SAT, PSAT, and AP (Advanced Placement) exams.",
		],
	},
	{
		id: "uk-curriculum",
		title: "UK curriculum support (Years 1–A-Levels)",
		image: programmeImage("photo-1523050854058-8df90110c9f1"),
		imageAlt: "Historic university campus buildings",
		intro:
			"Tutoring mapped to the National Curriculum for England, supporting all key stages up to university entrance.",
		items: [
			"Primary (Key Stages 1 and 2 / Years 1–6): phonics, reading, creative writing, grammar, numeracy, mental math, and primary science.",
			"Lower and Upper Secondary (Key Stage 3 and GCSE / Years 7–11): GCSE and IGCSE preparation in English Language, English Literature, Mathematics, Combined and Triple Sciences, History, Geography, and Computer Science.",
			"Sixth Form (Key Stage 5 / Years 12–13 / AS and A-Levels): Mathematics, Further Mathematics, Physics, Chemistry, Biology, Economics, and English Literature, with preparation for university admissions.",
		],
	},
	{
		id: "canadian-curriculum",
		title: "Canadian curriculum support (Grades 1–12)",
		image: programmeImage("photo-1523240795612-9a054b0db644"),
		imageAlt: "Students studying on a campus lawn",
		intro:
			"Curriculum-aligned support adapted to provincial educational standards across Canada.",
		items: [
			"Elementary and Middle Grades (Grades 1–8): English and Language Arts, Mathematics (number sense, geometry, data management), General Science, and Social Studies.",
			"Senior Grades (Grades 9–12): Functions, Advanced Functions, Calculus and Vectors, Chemistry, Biology, Physics, and English, for Canadian high school diplomas and post-secondary transitions.",
		],
	},
	{
		id: "college-mathematics",
		title: "College mathematics",
		image: programmeImage("photo-1635070041078-e363dbe005cb"),
		imageAlt: "Mathematics equations on a chalkboard",
		intro:
			"A college math program that bridges secondary school and university-level academics.",
		items: [
			"Core university math: single and multivariable calculus, linear algebra, differential equations, and discrete mathematics.",
			"Applied mathematics: statistics, probability, business calculus, and quantitative methods for economics and the sciences.",
		],
	},
] as const;

export const exams = [
	{
		name: "WAEC",
		detail:
			"School certificate papers in Mathematics, English, and the sciences.",
	},
	{
		name: "JAMB",
		detail:
			"UTME preparation, including Use of English and CBT-style practice.",
	},
	{
		name: "IELTS",
		detail:
			"Listening, reading, writing, and speaking, taught toward a target band.",
	},
	{
		name: "TOEFL",
		detail:
			"Academic English for university admission, including integrated tasks.",
	},
] as const;
