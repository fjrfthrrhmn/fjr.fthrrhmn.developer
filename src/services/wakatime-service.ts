import axios from "axios"

import { API_ENDPOINTS } from "@/constants/config/api.config"

import { WakatimeResponseType } from "./wakatime-types"

export const wakatimeService = {
	getStats: async () => {
		const URL = `${API_ENDPOINTS.wakatime}/users/jessen/stats/last_7_days`
		const res = await axios.get<WakatimeResponseType>(URL)
		return res.data
	}
}
