export const API_ENDPOINTS = {
	github:
		process.env.NEXT_PUBLIC_GITHUB_URL || "https://api.github.com/graphql",
	monkeyType:
		process.env.NEXT_PUBLIC_MONKEY_TYPE_URL || "https://api.monkeytype.com",
	wakatime:
		process.env.NEXT_PUBLIC_WAKATIME_URL || "https://wakatime.com/api/v1"
}

export const API_KEYS = {
	github: process.env.NEXT_PUBLIC_GITHUB_TOKEN,
	wakatime: process.env.NEXT_PUBLIC_WAKATIME_TOKEN
}
