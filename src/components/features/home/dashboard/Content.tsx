import { useDashboardStore } from "@/stores/dashboard-store"

import { GithubContent } from "./Github"
import { WakatimeContent } from "./Wakatime"

export const Content = () => {
	const active = useDashboardStore((state) => state.active)

	return (
		<div className="grid lg:grid-cols-9 gap-6 mt-10">
			{active === "Github" && <GithubContent />}
			{active === "WakaTime" && <WakatimeContent />}
		</div>
	)
}
