import axios from "axios"

import { LanyardResponseType } from "./"

export const lanyardService = {
	getPresence: async (userId: string) => {
		const URL = `https://api.lanyard.rest/v1/users/${userId}`
		const res = await axios.get<LanyardResponseType>(URL)
		return res.data
	}
}
