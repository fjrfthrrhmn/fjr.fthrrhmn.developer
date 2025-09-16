import Image from "next/image"
import Link from "next/link"

import { LucideSend } from "lucide-react"

import { LanyardPresenceType } from "@/services"

import { Avatar, Button, Typography } from "@/ui"
import { CardStyle } from "@/widgets"

import { AboutUtils } from "../../utils"

interface LanyardProfileProps {
	data: LanyardPresenceType
	userId: string
}

export const LanyardProfile = ({ userId, ...props }: LanyardProfileProps) => {
	const { discord_user, discord_status } = props.data
	const user = discord_user

	const URL_IMAGE = `https://cdn.discordapp.com/avatars/${userId}/${user.avatar}.png`
	const statusColor = AboutUtils.getColorStatus(discord_status)
	const URL_PROFILE = `https://discord.com/users/${userId}`

	return (
		<CardStyle>
			<div className="flex flex-col sm:flex-row gap-6 sm:items-center sm:justify-evenly">
				<Avatar className="size-16">
					<Image
						src={URL_IMAGE}
						alt="profile"
						width={100}
						height={100}
						unoptimized
					/>
				</Avatar>

				<div>
					<Typography.Title variant="4/bold" className="capitalize">
						{user.username}
					</Typography.Title>
					<div className="flex items-center gap-2 mt-1">
						<div
							className={`w-2 h-2 rounded-full ${statusColor} shadow-lg animate-pulse`}
						/>
						<Typography.Text className="capitalize">
							{discord_status}
						</Typography.Text>
					</div>
				</div>

				<Button asChild>
					<Link href={URL_PROFILE} rel="noopener noreferrer" target="_blank">
						Send Message
						<LucideSend />
					</Link>
				</Button>
			</div>
		</CardStyle>
	)
}
