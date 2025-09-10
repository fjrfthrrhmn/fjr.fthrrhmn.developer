import Image from "next/image"
import Link from "next/link"

import { GithubUserType } from "@/services"

import { Avatar, AvatarFallback, Typography } from "@/ui"
import { CardStyle } from "@/widgets"

export const Profile = ({
	profile
}: {
	profile: Pick<
		GithubUserType,
		"avatarUrl" | "name" | "url" | "bio" | "login" | "location"
	>
}) => {
	const { avatarUrl, name, url, bio, location } = profile
	const COLOR = {
		TEXT: "text-[#34d399]",
		UNDERLINE: "decoration-[#34d399]"
	}

	return (
		<CardStyle className="lg:col-span-4 h-max lg:max-h-36">
			<div className="flex flex-row items-center gap-4">
				<Avatar className="size-20 border-4 shadow-2xl">
					<Image
						src={avatarUrl}
						alt="Profile"
						width={100}
						height={100}
						unoptimized
					/>
					<AvatarFallback>{name.slice(0, 2)}</AvatarFallback>
				</Avatar>

				<div className="flex flex-col gap-2">
					<Typography.Text variant="xs/normal" className="font-mono">
						{location}
					</Typography.Text>
					<Link href={url} target="_blank" rel="noopener noreferrer">
						<Typography.Title
							variant="4/bold"
							className={`capitalize decoration-2 underline underline-offset-8 ${COLOR.UNDERLINE}`}
						>
							{name}
						</Typography.Title>
					</Link>
					<Typography.Text variant="xs/normal">{bio}</Typography.Text>
				</div>
			</div>
		</CardStyle>
	)
}
