import { NextResponse } from "next/server"

import axios from "axios"

import { API_ENDPOINTS, API_KEYS } from "@/constants"

export async function GET() {
	try {
		const endpoints = {
			stats: "stats/last_7_days",
			allTime: "all_time_since_today",
			user: ""
		}

		// Make requests to Wakatime API
		const responses = await axios.all(
			Object.entries(endpoints).map(([key, ep]) =>
				axios
					.get(`${API_ENDPOINTS.wakatime}/users/current/${ep}`, {
						headers: {
							Authorization: `Basic ${API_KEYS.wakatime}`
						}
					})
					.then((res) => [key, res.data.data])
			)
		)

		// Transform responses into a single object
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
