import axios from "axios"

import { API_ENDPOINTS, API_KEYS } from "@/constants/config/api.config"

import { GithubResponseType } from "./"

export const QUERY = `
  {
    viewer {
      login
      name
      avatarUrl
      location
      bio
      url
      followers { totalCount }
      following { totalCount }
      contributionsCollection {
        totalCommitContributions
        totalPullRequestContributions
        totalIssueContributions
        totalRepositoryContributions
        contributionCalendar {
        weeks {
          contributionDays {
              date
              contributionCount
            }
          }
        }
      }
    }
  }
`

export const githubService = {
	getProfile: async (): Promise<GithubResponseType> => {
		const response = await axios.post(
			API_ENDPOINTS.github,
			{ query: QUERY },
			{ headers: { Authorization: `Bearer ${API_KEYS.github}` } }
		)

		return response.data
	}
}
