"use client"

import { useTranslations } from "next-intl"

import { Container, Section, Title } from "@/ui"

import { Content } from "./dashboard/Content"
import { Toggle } from "./dashboard/Toggle"

const Dashboard = () => {
	const t = useTranslations("DashboardSection")

	return (
		<Section name="dashboard">
			<Container className="overflow-x-hidden">
				<Title
					withAnimation
					text={t("title")}
					variant={"1/extrabold"}
					description={t("description")}
				>
					<Toggle />
				</Title>

				<Content />
			</Container>
		</Section>
	)
}

export default Dashboard
