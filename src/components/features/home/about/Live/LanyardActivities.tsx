import Image from "next/image"

import { LanyardPresenceType } from "@/services"

import { Title, Typography } from "@/ui"
import { CardStyle } from "@/widgets"

export const LanyardActivities = ({ data }: { data: LanyardPresenceType }) => {
	const { activities, spotify: spotifyData } = data

	const filteredActivities = activities?.filter(
		(a) => !a.name.toLowerCase().includes("spotify")
	)

	const isEmpty = !filteredActivities || filteredActivities.length === 0

	return (
		<div>
			<Title
				text="Live Activities"
				description=" A peek into what I’m doing right now."
			/>

			<div className="flex flex-col gap-6 mt-6">
				{/*  */}
				{isEmpty && (
					<div className="text-center py-12">
						<Typography.Title variant="6/bold">
							No activities right now ✨
						</Typography.Title>
						<Typography.Text variant="xs/normal">
							Just chilling, nothing to show.
						</Typography.Text>
					</div>
				)}

				{spotifyData && (
					<CardStyle className="p-4">
						<div className="flex gap-4">
							<Image
								src={spotifyData.album_art_url}
								alt={spotifyData.song}
								width={100}
								height={100}
								className="rounded-2xl border-4 shadow-2xl"
								unoptimized
							/>

							<div className="flex flex-col">
								<Typography.Text variant="xs/normal" className="text-green-400">
									Listening on Spotify
								</Typography.Text>
								<Typography.Title variant="6/bold">
									{spotifyData.song}
								</Typography.Title>
								<Typography.Text variant="xs/normal">
									by {spotifyData.artist}
								</Typography.Text>
							</div>
						</div>
					</CardStyle>
				)}

				{filteredActivities?.map((activity, i) => {
					const isCoding = activity.name.toLowerCase().includes("code")
					const URL_IMAGE = resolveActivityImage(
						activity.application_id!,
						activity.assets?.large_image
					)

					return (
						<CardStyle className="p-4" key={i}>
							<div className="flex gap-4">
								{activity.assets?.large_image && (
									<Image
										src={URL_IMAGE!}
										alt={activity.name}
										width={100}
										height={100}
										className="rounded-2xl border-4 shadow-2xl"
										unoptimized
									/>
								)}

								<div className="flex flex-col">
									<Typography.Text
										variant="xs/normal"
										className="text-blue-400"
									>
										{isCoding && "Probably fixing bugs"}
									</Typography.Text>
									<Typography.Title variant="6/bold">
										{activity.state?.split(":")[0]}
									</Typography.Title>
									{activity.details && (
										<Typography.Text variant="xs/normal">
											{activity.details}
										</Typography.Text>
									)}
								</div>
							</div>
						</CardStyle>
					)
				})}
			</div>
		</div>
	)
}

function resolveActivityImage(applicationId: string, image?: string) {
	if (!image) return null

	// External image (mp:external/...)
	if (image.startsWith("mp:external")) {
		const url = image.split("https/")[1]
		if (url) return `https://${url}`
	}

	// Discord CDN image
	return `https://cdn.discordapp.com/app-assets/${applicationId}/${image}.png`
}
