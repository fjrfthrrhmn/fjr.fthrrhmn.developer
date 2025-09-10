import { useWakatimeProfile } from "@/hooks"

import { ProfileContent, StatsContent } from "."

export const Wakatime = () => {
	const { data, isLoading, isPending } = useWakatimeProfile()

	if (isLoading || isPending) return "Loading..."

	return (
		<>
			<ProfileContent profile={data!.user} />
			<StatsContent data={data!} />
		</>
	)
}
