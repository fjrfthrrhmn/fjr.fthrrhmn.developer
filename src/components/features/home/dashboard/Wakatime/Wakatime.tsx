import { useWakatimeProfile } from "@/hooks"

import { ProfileContent } from "."

export const Wakatime = () => {
	const { response, isLoading, isPending } = useWakatimeProfile()

	if (isLoading || isPending) return "Loading..."

	return (
		<>
			<ProfileContent profile={response!.user} />
		</>
	)
}
