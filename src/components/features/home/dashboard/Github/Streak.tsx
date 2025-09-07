"use client"

import { useMemo } from "react"

import { FlameIcon } from "lucide-react"

import { ContributionCalendar } from "@/services"

import { Typography } from "@/components/ui"
import { CardStyle } from "@/components/widgets"

type StreakProps = {
	weeks: ContributionCalendar["weeks"]
}

export const Streak = ({ weeks }: StreakProps) => {
	const { maxStreak } = useMemo(() => calculateStreaks(weeks), [weeks])

	return (
		<CardStyle className="lg:col-span-2 flex justify-center items-center text-center">
			<span className={getFireColor(maxStreak)}>
				<FlameIcon size={130} />
			</span>

			<Typography.Title variant="1/black" className="font-mono">
				{maxStreak}
			</Typography.Title>

			<div className="absolute bottom-0 right-0 -z-10 bg-orange-600/25 rounded-full h-32 w-32 blur-2xl" />
		</CardStyle>
	)
}

const getFireColor = (streak: number) => {
	if (streak < 30)
		return "text-orange-500 drop-shadow-custom drop-shadow-orange-700/70"
	if (streak < 100)
		return "text-violet-400 drop-shadow-custom drop-shadow-violet-700/70"
	return "text-zinc-500 drop-shadow-custom drop-shadow-zinc-500/70"
}

const calculateStreaks = (
	weeks: ContributionCalendar["weeks"]
): { currentStreak: number; maxStreak: number } => {
	const days = weeks.flatMap((week) => week.contributionDays)
	let maxStreak = 0
	let currentStreak = 0
	let tempStreak = 0

	for (let i = 0; i < days.length; i++) {
		if (days[i].contributionCount > 0) {
			tempStreak++
			if (tempStreak > maxStreak) maxStreak = tempStreak
		} else {
			tempStreak = 0
		}
	}

	for (let i = days.length - 1; i >= 0; i--) {
		if (days[i].contributionCount > 0) currentStreak++
		else break
	}

	return { currentStreak, maxStreak }
}
