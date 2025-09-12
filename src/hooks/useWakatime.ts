import { useQuery } from "@tanstack/react-query"

import { WakatimeResponseType, wakatimeService } from "@/services"

/**
 * @name useWakatimeProfile
 * @description useWakatimeProfile is a custom hook that returns the user profile from the Wakatime API
 * @returns UseQueryResult<WakatimeResponseType, Error>
 */
export const useWakatimeProfile = () => {
	const { data: response, ...rest } = useQuery<WakatimeResponseType>({
		queryKey: ["wakatime-profile"],
		queryFn: async () => await wakatimeService.getStats()
	})

	return {
		response: response,
		data: response?.data,
		languages: response?.data.stats.languages,
		categories: response?.data.stats.categories,
		...rest
	}
}
