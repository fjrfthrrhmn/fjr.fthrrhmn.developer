import { useQuery } from "@tanstack/react-query"

import { githubService } from "@/services/github-service"

/**
 * @name useGithubProfile
 * @description useGithubProfile is a custom hook that returns the user profile from the Github API
 * @returns UseQueryResult<GithubResponseType, Error>
 */
export const useGithubProfile = () => {
	const { data: response, ...rest } = useQuery({
		queryKey: ["github-profile"],
		queryFn: async () => (await githubService.getProfile()).data
	})

	return {
		response: response,
		data: response?.viewer,
		contributions: response?.viewer?.contributionsCollection,
		...rest
	}
}
