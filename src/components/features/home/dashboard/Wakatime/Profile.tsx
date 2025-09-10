import Image from "next/image"
import Link from "next/link"

import { WakatimeUserType } from "@/services"

import { Avatar, AvatarFallback, Typography } from "@/ui"
import { CardStyle } from "@/widgets"

export const Profile = ({ profile }: { profile: WakatimeUserType }) => {
	if (!profile) return null

	const { username, city, photo, profile_url, bio } = profile

	const COLOR = {
		TEXT: "text-amber-400",
		UNDERLINE: "decoration-amber-400"
	}

	return (
		<CardStyle className="col-span-5 h-max">
			<div className="w-full flex flex-col sm:items-center sm:justify-between md:flex-row gap-4">
				<div className="w-full flex flex-col sm:flex-row sm:items-center gap-4">
					<Avatar className="size-14">
						<Image
							src={photo}
							alt="profile"
							width={100}
							height={100}
							unoptimized
						/>
						<AvatarFallback>{username.slice(0, 2)}</AvatarFallback>
					</Avatar>

					<div className="flex flex-col gap-2">
						<Link href={profile_url} target="_blank" rel="noopener noreferrer">
							<Typography.Title
								variant="4/bold"
								className={`cursor-pointer capitalize decoration-2 underline underline-offset-[6px] ${COLOR.UNDERLINE}`}
							>
								{username}
							</Typography.Title>
						</Link>
						<Typography.Text variant="xs/normal">{bio}</Typography.Text>
					</div>
				</div>

				<div className="flex flex-col sm:items-end w-full">
					<Typography.Text variant="xs/light" className="text-foreground">
						January 2023
					</Typography.Text>
					<Typography.Text variant="xs/normal" className="text-foreground">
						{city.short_title}
					</Typography.Text>
				</div>
			</div>
		</CardStyle>
	)
}
