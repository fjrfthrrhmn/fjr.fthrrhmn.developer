import { useQuery } from "@tanstack/react-query"

import { wakatimeService } from "@/services"

/**
 * @name useWakatimeProfile
 * @description useWakatimeProfile is a custom hook that returns the user profile from the Wakatime API
 * @returns UseQueryResult<WakatimeResponseType, Error>
 */
export const useWakatimeProfile = () => {
	const { data: response, ...rest } = useQuery({
		queryKey: ["wakatime-profile"],
		queryFn: async () => (await wakatimeService.getStats()).data
	})

	return {
		response: response,
		...rest
	}
}
