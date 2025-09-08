import { NextResponse } from "next/server"

import axios from "axios"

import { API_ENDPOINTS } from "@/constants"

import { WakatimeResponseType } from "@/services"

export async function GET() {
	try {
		const URL = `${API_ENDPOINTS.wakatime}/users/jessen/stats/last_7_days`
		const res = await axios.get<WakatimeResponseType>(URL)

		return NextResponse.json({ message: "Wakatime API", data: res.data.data })
	} catch (error) {
		return NextResponse.json(
			{ message: "Internal Server Error", error },
			{ status: 500 }
		)
	}
}
