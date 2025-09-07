"use client"

import Link from "next/link"

import { GithubIcon } from "lucide-react"

import { useGithubProfile } from "@/hooks"

import { Typography } from "@/components/ui"
import { CardStyle } from "@/widgets"
import { DashboardSkeleton } from "@/skeletons"

import { CalendarContent, ProfileContent, StatsContent } from "."

export const Github = () => {
	const { data, contributions, isLoading, isPending, isFetching } =
		useGithubProfile()

	if (isLoading || !data || !contributions || isPending || isFetching)
		return <DashboardSkeleton />

	return (
		<>
			<ProfileContent profile={data} />
			<StatsContent stats={contributions} />
			<CalendarContent calendar={contributions.contributionCalendar} />

			<CardStyle className="bg-foreground text-background hidden lg:flex lg:col-span-2 items-center justify-center gap-4 text-center flex-col w-full h-full border">
				<Link
					href={data.url}
					target="_blank"
					className="items-center justify-center gap-4 text-center flex flex-col w-full h-full border"
				>
					<GithubIcon size={50} />
					<Typography.Title className="font-mono" variant="5/black">
						@{data.login}
					</Typography.Title>
				</Link>
			</CardStyle>
			{/* <StreakContent weeks={contributions.contributionCalendar.weeks} /> */}
		</>
	)
}
