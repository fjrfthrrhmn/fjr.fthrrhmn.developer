"use client"

import React from "react"
import GitHubCalendar, {
	Activity,
	type Props as ActivityCalendarProps
} from "react-github-calendar"

import { ContributionCalendar } from "@/services"

import { ScrollArea, ScrollBar } from "@/ui"
import { CardStyle } from "@/widgets"

type CalendarProps = {
	calendar: ContributionCalendar
}

export const Calendar = ({ calendar }: CalendarProps) => {
	const contributionCalendar = calendar.weeks || []
	const transformed = transformContributions(contributionCalendar)

	return (
		<CardStyle className="w-full min-h-44 max-h-60 lg:col-span-7">
			<ScrollArea className="pb-4 flex justify-center items-center">
				<GitHubCalendar
					username="dummy"
					{...calendarConfig}
					transformData={() => transformed as Activity[]}
				/>
				<ScrollBar orientation="horizontal" />
			</ScrollArea>
		</CardStyle>
	)
}

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

const calendarConfig: Omit<
	ActivityCalendarProps,
	"transformData" | "username"
> = {
	blockSize: 12,
	blockMargin: 5,
	fontSize: 14,
	colorScheme: "dark",
	hideTotalCount: true,
	theme: { dark: ["#373737", "#065f46", "#059669", "#34d399", "#86efac"] },
	renderBlock: (block, activity) => {
		if (!activity) return block
		const { count, date } = activity
		const label =
			count > 0 ? `${count} contributions on ${date}` : `No contributions`

		return React.cloneElement(block, {}, <title>{label}</title>)
	}
}
