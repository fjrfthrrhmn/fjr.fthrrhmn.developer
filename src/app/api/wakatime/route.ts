import { NextResponse } from "next/server"

import axios from "axios"

import { API_ENDPOINTS, API_KEYS } from "@/constants"

const endpoints = {
	stats: "stats/last_7_days",
	allTime: "all_time_since_today",
	user: ""
}
/**
 * Handles GET requests by fetching Wakatime user statistics from multiple endpoints.
 *
 * returns a JSON response with the collected stats.
 * Returns a 401 error if the API key is missing, or a 500 error for server failures.
 *
 * @returns {Promise<NextResponse>} JSON response containing Wakatime stats or error message.
 */
export async function GET() {
	if (!API_KEYS.wakatime) {
		return NextResponse.json(
			{ message: "Wakatime API key is missing or invalid." },
			{ status: 401 }
		)
	}

	try {
		const responses = await Promise.all(
			Object.entries(endpoints).map(async ([key, ep]) => {
				const res = await axios.get(
					`${API_ENDPOINTS.wakatime}/users/current/${ep}`,
					{
						headers: {
							Authorization: `Basic ${API_KEYS.wakatime}`
						}
					}
				)
				return [key, res.data.data]
			})
		)

		const data = Object.fromEntries(responses)

		const RESPONSE = { message: "Wakatime Stats", data }

		return NextResponse.json(RESPONSE)
	} catch (error) {
		return NextResponse.json(
			{ message: "Internal Server Error", error: (error as Error).message },
			{ status: 500 }
		)
	}
}
