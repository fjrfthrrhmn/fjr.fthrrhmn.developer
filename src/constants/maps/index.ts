import { IconType } from "react-icons"

import { FolderGit2Icon, GitForkIcon } from "lucide-react"

import { UserType } from "@/services"

export const CHAR_MAP = { ı: "i", ç: "c", ş: "s", ğ: "g", ü: "u", ö: "o" }

export const GITHUB_STATS_MAP = (
	contributions?: UserType["contributionsCollection"]
): { value: number; label: string; icon: IconType }[] => {
	return [
		{
			value: contributions?.totalCommitContributions ?? 0,
			label: "Total Contributions",
			icon: GitForkIcon
		},
		{
			value: contributions?.totalRepositoryContributions ?? 0,
			label: "Repository Contributions",
			icon: FolderGit2Icon
		}
	]
}
