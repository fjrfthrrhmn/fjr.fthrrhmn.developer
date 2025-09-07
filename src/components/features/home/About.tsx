"use client"

import { useTranslations } from "next-intl"

import { SatelliteIcon } from "lucide-react"
import { toast } from "sonner"

import { Container, RainbowButton, Section, Title } from "@/ui"

import { ExperiencesContent, ProfileContent, SkillsContent } from "./about/"

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
						<RainbowButton
							onClick={() => toast.info(t("descriptionToast"))}
							className="w-full lg:max-w-[200px]"
						>
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
