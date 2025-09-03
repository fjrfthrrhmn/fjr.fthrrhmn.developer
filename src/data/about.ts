type ExperienceType = {
	title: string
	company?: string
	period: string
	description: string
	category: "work" | "academic" | "competition"
}

export const ExperiencesData: ExperienceType[] = [
	{
		title: "Fullstack Developer",
		company: "PKL CyberLabs",
		period: "Sep – Dec 2024",
		description:
			"Built and maintained fullstack web apps (frontend + backend).",
		category: "work"
	},
	{
		title: "Fullstack Developer",
		company: "Intern PT. Fath Synergy Group",
		period: "Jan – Mar 2025",
		description: "Developed scalable web solutions and improved UI/UX.",
		category: "work"
	},
	{
		title: "1st Place",
		company: "Web Technology – Kabupaten",
		period: "Jun 2025",
		description: "Winner of regional web technology competition.",
		category: "competition"
	},
	{
		title: "Top 10 Finalist",
		company: "Web Technology – Provinsi",
		period: "Jul 2025",
		description: "Ranked among top 10 at provincial level.",
		category: "competition"
	}
]
