"use client"

import { IconType } from "react-icons"

import {
	BriefcaseIcon,
	FileCode2Icon,
	FolderGit2Icon,
	GitForkIcon
} from "lucide-react"

import { GithubContributionsType, WakatimeResponseType } from "@/services"

export const CHAR_MAP = { ı: "i", ç: "c", ş: "s", ğ: "g", ü: "u", ö: "o" }

export const GITHUB_STATS_MAP = (
	contributions?: GithubContributionsType
): { value: number; label: string; icon: IconType }[] => {
	return [
		{
			value: contributions?.totalCommitContributions ?? 0,
			label: "Total Contributions",
			icon: GitForkIcon
		},
		{
			value: contributions?.totalRepositoryContributions ?? 0,
			label: "Total Repository",
			icon: FolderGit2Icon
		}
	]
}

export const WAKATIME_STATS_MAP = (
	value: WakatimeResponseType["data"]
): { value: string; label: string; icon: IconType }[] => {
	return [
		{
			value: value.stats?.human_readable_total_including_other_language,
			label: "Total Coding Time",
			icon: GitForkIcon
		},
		{
			value: value.allTime.text,
			label: "All Time Logged",
			icon: FolderGit2Icon
		},
		{
			value: value.stats.best_day.text,
			label: "Best Day",
			icon: FolderGit2Icon
		},
		{
			value: value.stats.human_readable_daily_average,
			label: "Daily Average",
			icon: FolderGit2Icon
		},
		{
			value: `${value.stats.languages?.[0]?.name} (${value.stats.languages?.[0]?.text})`,
			label: "Top Language",
			icon: FileCode2Icon
		},
		{
			value: `${value.stats.projects?.[0]?.name} (${value.stats.projects?.[0]?.text})`,
			label: "Top Project",
			icon: BriefcaseIcon
		}
	]
}
