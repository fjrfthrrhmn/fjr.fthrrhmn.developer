import axios from "axios"

import { WakatimeResponseType } from "./wakatime-types"

export const wakatimeService = {
	getStats: async () => {
		const res = await axios.get<WakatimeResponseType>("/api/wakatime")
		return res.data
	}
}
