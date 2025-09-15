"use client"

import { useTranslations } from "next-intl"
import Image from "next/image"

import { SatelliteIcon } from "lucide-react"

import { useLanyardPresence } from "@/hooks/useLanyard"

import {
	Avatar,
	Container,
	Drawer,
	DrawerContent,
	DrawerHeader,
	DrawerTrigger,
	RainbowButton,
	Section,
	Title
} from "@/ui"

import { ExperiencesContent, ProfileContent } from "./about/"

const About = () => {
	const t = useTranslations("AboutSection")

	return (
		<Section name="about">
			<Container className="overflow-x-hidden">
				<Title
					withAnimation
					text={t("title")}
					variant={"1/extrabold"}
					description={t("description")}
				>
					<div className="flex justify-end items-end">
						<Drawer>
							<DrawerTrigger asChild>
								<RainbowButton className="w-full lg:max-w-[200px]">
									<SatelliteIcon />
									Live Updates
								</RainbowButton>
							</DrawerTrigger>

							<DrawerContent className="h-dvh">
								<div className="border w-xl mx-auto">
									<DrawerHeader>
										<Title
											text="About Me"
											description="Real-time Discord presence powered by Lanyard."
										/>
									</DrawerHeader>
									{/* * Content is here... */}
									<Content />
								</div>
							</DrawerContent>
						</Drawer>
					</div>
				</Title>

				<div className="mt-10 grid grid-cols-1 lg:grid-cols-7 gap-6">
					{/* * Content Profile */}
					<ProfileContent />

					{/* * Content Experiences */}
					<ExperiencesContent />

					{/* * Content Skills and Tools */}
					{/* <SkillsContent /> */}
				</div>
			</Container>
		</Section>
	)
}

export default About

const Content = () => {
	const userId = "794908435908788234"
	const { response, data } = useLanyardPresence(userId)

	console.log(response)

	return (
		<div>
			<Avatar className="size-16">
				<Image
					src={`https://cdn.discordapp.com/avatars/${userId}/${data?.discord_user.avatar}.png?size=512`}
					alt="profile"
					width={100}
					height={100}
					unoptimized
				/>
			</Avatar>
		</div>
	)
}
