"use client"

import { SiGithub } from "react-icons/si"
import Link from "next/link"

import { useGithubProfile } from "@/hooks"

import { ErrorState, Typography } from "@/ui"
import { CardStyle } from "@/widgets"
import { DashboardSkeleton } from "@/skeletons"

import { CalendarContent, ProfileContent, StatsContent } from "."

export const Github = () => {
	const {
		data,
		contributions,
		isLoading,
		isPending,
		isFetching,
		isError,
		error
	} = useGithubProfile()

	if (isLoading || isPending || isFetching) return <DashboardSkeleton />

	if (isError || !data || !contributions)
		return <ErrorState className="col-span-9" errorMessage={error?.message} />

	return (
		<>
			<ProfileContent profile={data} />
			<StatsContent stats={contributions} />
			<CalendarContent calendar={contributions.contributionCalendar} />

			<CardStyle className="w-full h-full bg-foreground text-background hidden lg:flex lg:col-span-2 items-center justify-center gap-4 text-center flex-col border">
				<Link
					href={data.url}
					target="_blank"
					className="items-center justify-center gap-4 text-center flex flex-col w-full h-full border"
				>
					<SiGithub size={50} />
					<Typography.Title className="font-mono" variant="5/black">
						@{data.login}
					</Typography.Title>
				</Link>
			</CardStyle>

			{/* * Streak Component */}
		</>
	)
}
