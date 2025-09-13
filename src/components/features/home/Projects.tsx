"use client"

import { useTranslations } from "next-intl"

import { Container, Section, Title } from "@/ui"

import { ProjectsList } from "./projects/ProjectsList"

const Projects = () => {
	const t = useTranslations("ProjectsSection")

	return (
		<Section name="dashboard">
			<Container className="overflow-x-hidden space-y-10">
				<Title
					withAnimation
					text={t("title")}
					variant={"1/extrabold"}
					description={t("description")}
				/>

				<ProjectsList />
			</Container>
		</Section>
	)
}

export default Projects
