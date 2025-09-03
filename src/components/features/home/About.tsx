"use client"

import { useTranslations } from "next-intl"

import { BotIcon } from "lucide-react"
import { toast } from "sonner"

import { Button, Container, Section, Title, Typography } from "@/ui"
import { CardStyle } from "@/widgets"

import { ExperiencesData } from "@/data/about"

import { AboutUtils } from "./utils"

const About = () => {
	const t = useTranslations("AboutSection")

	// Reverse
	const ExperiencesSorted = [...ExperiencesData].reverse()

	return (
		<Section name="About">
			<Container>
				<Title
					text={t("title")}
					variant={"1/extrabold"}
					description={t("description")}
				>
					<Button onClick={() => toast.info(t("descriptionToast"))}>
						<BotIcon />
						{t("buttonOne")}
					</Button>
				</Title>

				{/* * Content Profile */}
				<div className="mt-10 grid grid-cols-1 lg:grid-cols-7 gap-6">
					<CardStyle className="lg:col-span-4">
						<div>
							<Typography.Title variant="2/extrabold">Profile</Typography.Title>

							<div className="grid gap-6 mt-10">
								{["first", "second", "third", "fourth"].map((item) => {
									const key = `aboutContent.${item}`

									return (
										<Typography.Text key={key} variant="sm/normal">
											{t(key)}
										</Typography.Text>
									)
								})}
							</div>
						</div>
					</CardStyle>

					{/* * Content Experiences */}
					<CardStyle className="lg:col-span-3">
						<div>
							<Title text="Experiences" />

							<div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-6 mt-10">
								{/* TODO Use ScrollBar */}
								{ExperiencesSorted.map((item) => {
									const Icon = AboutUtils.getIconExperiences(item.category)
									const color = AboutUtils.getColorExperiences(item.category)

									return (
										<div
											key={item.title}
											className="flex flex-col lg:flex-row lg:items-center gap-4"
										>
											<div
												className={`flex justify-center items-center ${color} rounded-full p-2.5 w-max h-max`}
											>
												{Icon && <Icon size={32} />}
											</div>

											<div className="flex flex-col gap-1">
												<Typography.Text
													variant="xs/normal"
													className="font-mono"
												>
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
				</div>
			</Container>
		</Section>
	)
}

export default About
