export interface GithubResponseType {
	data: {
		viewer: UserType
	}
}

export interface UserType {
	login: string
	name: string
	avatarUrl: string
	bio: string
	url: string
	location: string
	followers: {
		totalCount: number
	}
	following: {
		totalCount: number
	}
	contributionsCollection: ContributionsType
}

export interface ContributionsType {
	totalCommitContributions: number
	totalPullRequestContributions: number
	totalIssueContributions: number
	totalRepositoryContributions: number
	contributionCalendar: ContributionCalendar
}

export interface ContributionCalendar {
	weeks: {
		contributionDays: {
			date: string
			contributionCount: number
		}[]
	}[]
}
