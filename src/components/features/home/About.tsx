"use client"

import { useState } from "react"
import { useTranslations } from "next-intl"

import { ChevronDown, SatelliteIcon } from "lucide-react"
import { toast } from "sonner"

import {
	Button,
	Container,
	GlassIcon,
	RainbowButton,
	Section,
	Title,
	Typography
} from "@/ui"
import { CardStyle } from "@/widgets"

import { ExperiencesData, SkillsData } from "@/data"

import { AboutUtils } from "./utils"

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
					<div className="flex flex-col justify-end">
						<RainbowButton onClick={() => toast.info(t("descriptionToast"))}>
							<SatelliteIcon />
							Live Updates
						</RainbowButton>
					</div>
				</Title>

				<div className="mt-10 grid grid-cols-1 lg:grid-cols-7 gap-6">
					{/* * Content Profile */}
					<ProfileContent />

					{/* * Content Experiences */}
					<ExperiencesContent />

					{/* * Content Skills and Tools */}
					<SkillsContent />
				</div>
			</Container>
		</Section>
	)
}

export default About

export const ProfileContent = () => {
	const t = useTranslations("AboutSection")
	const [isExpanded, setIsExpanded] = useState(false)
	const items = ["first", "second", "third", "fourth"]
	const itemsFilter = isExpanded ? items : items

	return (
		<CardStyle className="lg:col-span-4">
			<div>
				<Typography.Title variant="2/extrabold">Profile</Typography.Title>

				<div className="grid grid-cols-1 gap-y-6 mt-10">
					{itemsFilter.map((item) => {
						const key = `profileContent.${item}`

						return (
							<Typography.Text key={key} variant="sm/normal">
								{t(key)}
							</Typography.Text>
						)
					})}

					<div>
						{!isExpanded && (
							<Button onClick={() => setIsExpanded(true)}>
								Show More
								<ChevronDown />
							</Button>
						)}
					</div>
				</div>
			</div>
		</CardStyle>
	)
}

export const ExperiencesContent = () => {
	const t = useTranslations("AboutSection.experiencesContent")

	return (
		<CardStyle className="lg:col-span-3">
			<div>
				<Title text={t("title")} />

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-y-6 mt-10">
					{/* TODO Use ScrollBar */}
					{[...ExperiencesData].reverse().map((item) => {
						const Icon = AboutUtils.getIconExperiences(item.category)
						const color = AboutUtils.getColorExperiences(item.category)

						return (
							<div
								key={item.company}
								className="flex flex-col lg:flex-row lg:items-center gap-4"
							>
								<div
									className={`flex justify-center items-center ${color} rounded-full p-2.5 w-max h-max`}
								>
									{Icon && <Icon size={32} />}
								</div>

								<div className="flex flex-col gap-1">
									<Typography.Text variant="xs/normal" className="font-mono">
										{item.period}
									</Typography.Text>
									<Typography.Title variant="6/semibold">
										{item.company}
									</Typography.Title>
									<Typography.Text variant="xs/normal">
										{item.title}
									</Typography.Text>
								</div>
							</div>
						)
					})}
				</div>
			</div>
		</CardStyle>
	)
}

export const SkillsContent = () => {
	const t = useTranslations("AboutSection.skillsContent")
	const [isExpanded, setIsExpanded] = useState(false)
	const items = isExpanded ? SkillsData : SkillsData.slice(0, 15)

	return (
		<CardStyle className="lg:col-span-7">
			<div>
				<div className="max-w-xl">
					<Title text={t("title")} description={t("description")} />
				</div>

				<div className="relative z-20 flex gap-12 flex-wrap my-10">
					{items.map((item) => (
						<GlassIcon key={item.name} {...item} />
					))}
				</div>

				<div>
					{!isExpanded && (
						<Button onClick={() => setIsExpanded(true)}>
							Show More
							<ChevronDown />
						</Button>
					)}
				</div>
			</div>
		</CardStyle>
	)
}
