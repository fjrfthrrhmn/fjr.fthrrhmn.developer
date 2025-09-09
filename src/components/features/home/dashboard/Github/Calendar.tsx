"use client"

import React from "react"
import GitHubCalendar, {
	Activity,
	Activity as ActivityCalendarProps,
	Props as ConfigCalendarProps
} from "react-github-calendar"

import { ContributionCalendar } from "@/services"

import { ScrollArea, ScrollBar } from "@/ui"
import { CardStyle } from "@/widgets"

import { DashboardUtils } from "../../"

export const Calendar = ({ calendar }: { calendar: ContributionCalendar }) => {
	const contributionCalendar = calendar.weeks || []
	const transformed =
		DashboardUtils.transformContributions(contributionCalendar)

	return (
		<CardStyle className="w-full h-max lg:min-h-44 lg:max-h-60 lg:col-span-7">
			<ScrollArea className="pb-4 flex justify-center items-center">
				<GitHubCalendar
					username="dummy"
					{...configCalendar}
					transformData={() => transformed as Activity[]}
				/>
				<ScrollBar orientation="horizontal" />
			</ScrollArea>
		</CardStyle>
	)
}

const configCalendar: Omit<ConfigCalendarProps, "transformData" | "username"> =
	{
		blockSize: 12,
		blockMargin: 5,
		fontSize: 14,
		colorScheme: "dark",
		hideTotalCount: true,
		theme: { dark: ["#373737", "#065f46", "#059669", "#34d399", "#86efac"] },
		renderBlock: (block, activity) => {
			const res = DashboardUtils.renderBlockCalendar(
				block,
				activity as ActivityCalendarProps
			)

			if (!res) return block

			return React.cloneElement(res.block, {}, <title>{res.label}</title>)
		}
	}
