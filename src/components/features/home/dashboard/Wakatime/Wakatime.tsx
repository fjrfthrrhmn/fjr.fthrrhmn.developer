import { useWakatimeProfile } from "@/hooks"

import { DashboardSkeleton } from "@/components/skeletons"
import { ErrorState } from "@/components/ui"

import { ProfileContent, StatsContent } from "."

export const Wakatime = () => {
	const { data, isLoading, isPending, isFetching, isError, error } =
		useWakatimeProfile()

	if (isLoading || isPending || isFetching) return <DashboardSkeleton />

	if (isError || !data)
		return <ErrorState className="col-span-9" errorMessage={error?.message} />

	return (
		<>
			<ProfileContent profile={data!.user} />
			<StatsContent data={data!} />
		</>
	)
}
