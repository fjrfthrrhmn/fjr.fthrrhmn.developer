import { SatelliteIcon } from "lucide-react"

import { useLanyardPresence } from "@/hooks"

import {
	Drawer,
	DrawerContent,
	DrawerHeader,
	DrawerTrigger,
	ErrorState,
	RainbowButton,
	Skeleton,
	Title
} from "@/ui"

import { LanyardActivities, LanyardProfile } from "../"

export const Lanyard = () => {
	const userId = "794908435908788231"
	const { data, isError, error, isLoading, isPending } =
		useLanyardPresence(userId)

	if (isLoading || isPending)
		return <Skeleton className="w-full lg:max-w-[200px] h-8" />

	return (
		<Drawer>
			<DrawerTrigger asChild>
				<RainbowButton className="w-full lg:max-w-[200px]">
					<SatelliteIcon />
					Live Updates
				</RainbowButton>
			</DrawerTrigger>

			<DrawerContent className="fixed inset-0 h-dvh z-[9999] pointer-events-auto">
				<div
					className={`w-full ${isError ? "sm:w-3xl" : "sm:w-lg"} mx-auto px-4`}
				>
					<DrawerHeader>
						<Title
							text="About Me"
							description="Real-time Discord presence powered by Lanyard."
						/>
					</DrawerHeader>

					{!data || isError ? (
						<ErrorState
							errorMessage={error?.message ?? "Failed to load presence data."}
						/>
					) : (
						<div className="flex flex-col gap-8">
							<LanyardProfile data={data} userId={userId} />
							<LanyardActivities />
						</div>
					)}
				</div>
			</DrawerContent>
		</Drawer>
	)
}
