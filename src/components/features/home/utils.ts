import { Activity as ActivityCalendarProps } from "react-github-calendar"

import { Briefcase, GraduationCap, Sparkles, Trophy } from "lucide-react"

import { ContributionCalendar } from "@/services"

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

// Dashboard
const transformContributions = (weeks: ContributionCalendar["weeks"]) => {
	const allDays = weeks.flatMap((week) => week.contributionDays)
	const maxCount = Math.max(...allDays.map((d) => d.contributionCount), 1)

	const getLevel = (count: number) => {
		if (count === 0) return 0
		if (count <= 0.25 * maxCount) return 1
		if (count <= 0.5 * maxCount) return 2
		if (count <= 0.75 * maxCount) return 3
		return 4
	}

	return allDays.map((day) => ({
		date: day.date,
		count: day.contributionCount,
		level: getLevel(day.contributionCount)
	}))
}

export const renderBlockCalendar = (
	block: React.ReactElement,
	activity?: ActivityCalendarProps
) => {
	if (!activity) return null

	const { count, date } = activity
	const label =
		count > 0 ? `${count} contributions on ${date}` : `No contributions`

	return { block, label }
}

export const DashboardUtils = {
	transformContributions,
	renderBlockCalendar
}
