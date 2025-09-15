import { useQuery } from "@tanstack/react-query"

import {
	LanyardPresenceType,
	LanyardResponseType,
	lanyardService
} from "@/services"

/**
 * @name useLanyardPresence
 * @description useLanyardPresence is a custom hook that returns the Discord presence from the Lanyard API
 * @param userId Discord user ID
 * @returns UseQueryResult<LanyardResponseType, Error>
 */
export const useLanyardPresence = (userId: string) => {
	const { data: response, ...rest } = useQuery<LanyardResponseType>({
		queryKey: ["lanyard-presence", userId],
		queryFn: async () => await lanyardService.getPresence(userId),
		enabled: !!userId
	})

	return {
		response: response,
		data: response?.data as LanyardPresenceType | undefined,
		activities: response?.data.activities,
		spotify: response?.data.spotify,
		...rest
	}
}
