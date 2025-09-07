import { create } from "zustand"

import { ToggleItemsData } from "@/data"

type ToggleItems = (typeof ToggleItemsData)[number]["name"]

type DashboardState = {
	active: ToggleItems
	setActive: (active: ToggleItems) => void
}

export const useDashboardStore = create<DashboardState>()((set) => ({
	active: ToggleItemsData[0].name,
	setActive: (active) => set({ active })
}))
