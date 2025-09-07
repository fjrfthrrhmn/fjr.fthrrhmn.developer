import { IconType } from "react-icons"
import { useTranslations } from "next-intl"
import Link from "next/link"

import { ScrollArea, Title, Typography } from "@/ui"
import { CardStyle } from "@/widgets"

import { ExperiencesData, ExperienceType } from "@/data"

import { AboutUtils } from "../utils"

export const ExperiencesContent = () => {
	const t = useTranslations("AboutSection.experiencesContent")

	return (
		<CardStyle className="lg:col-span-3">
			<div>
				<Title text={t("title")} />

				<ScrollArea className="mt-10 min-h-[200px] max-h-[450px] overflow-y-auto pr-4">
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-y-6">
						{[...ExperiencesData].reverse().map((item, index) => {
							const Icon = AboutUtils.getIconExperiences(item.category)
							const color = AboutUtils.getColorExperiences(item.category)

							return (
								<ExperienceItem
									key={index}
									{...item}
									color={color}
									icon={Icon}
								/>
							)
						})}
					</div>
				</ScrollArea>
			</div>
		</CardStyle>
	)
}

type ExperienceItemProps = {
	icon: IconType
	color: string
} & ExperienceType

const ExperienceItem = ({ ...props }: ExperienceItemProps) => {
	const { color, icon: Icon, period, title, company, url } = props

	const LinkComponent = url ? Link : "div"

	return (
		<div className="flex flex-col lg:flex-row lg:items-center gap-4">
			<div
				className={`flex justify-center items-center ${color} rounded-full p-2.5 w-max h-max`}
			>
				{Icon && <Icon size={28} />}
			</div>

			<div className="flex flex-col gap-1">
				<Typography.Text variant="xs/normal" className="font-mono">
					{period}
				</Typography.Text>
				<LinkComponent
					href={url || "#"}
					target={url && "_blank"}
					rel={url && "noopener noreferrer"}
					className={
						url &&
						"underline underline-offset-8 decoration-2 decoration-blue-500"
					}
				>
					<Typography.Title variant="6/semibold">{company}</Typography.Title>
				</LinkComponent>
				<Typography.Text variant="xs/normal">{title}</Typography.Text>
			</div>
		</div>
	)
}
