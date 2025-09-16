"use client"

import { useTranslations } from "next-intl"

import { Container, Section, Title } from "@/ui"

import { ExperiencesContent, LanyardContent, ProfileContent } from "./about/"

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
						<LanyardContent />
					</div>
				</Title>

				<div className="mt-10 grid grid-cols-1 lg:grid-cols-7 gap-6">
					{/* * Content Profile, Experiences & Skills */}
					<ProfileContent />
					<ExperiencesContent />
					{/* <SkillsContent /> */}
				</div>
			</Container>
		</Section>
	)
}

export default About
