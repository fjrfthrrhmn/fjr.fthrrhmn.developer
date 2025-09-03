import { Briefcase, GraduationCap, Sparkles, Trophy } from "lucide-react"

// About
const getIconExperiences = (type: "work" | "academic" | "competition") => {
	switch (type) {
		case "work":
			return Briefcase
		case "academic":
			return GraduationCap
		case "competition":
			return Trophy
		default:
			return Sparkles
	}
}

const getColorExperiences = (type: "work" | "academic" | "competition") => {
	switch (type) {
		case "work":
			return "bg-blue-800/25 text-blue-400"
		case "academic":
			return "bg-green-800/25 text-green-400"
		case "competition":
			return "bg-amber-800/25 text-amber-400"
		default:
			return "bg-foreground/25 text-foreground"
	}
}

export const AboutUtils = {
	getIconExperiences,
	getColorExperiences
}
