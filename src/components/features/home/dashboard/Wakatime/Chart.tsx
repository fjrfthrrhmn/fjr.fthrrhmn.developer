import { useTranslations } from "next-intl"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import { WakatimeCategoryType, WakatimeLanguageType } from "@/services/"

import {
	ChartConfig,
	ChartContainer,
	ChartLegend,
	ChartLegendContent,
	ChartTooltip,
	ChartTooltipContent,
	Typography
} from "@/ui"
import { CardStyle } from "@/widgets"

interface ChartProps {
	languages: WakatimeLanguageType[]
	categories: WakatimeCategoryType[]
}

export const Chart = ({ languages, categories }: ChartProps) => {
	return (
		<div className="col-span-9 grid lg:grid-cols-9 gap-6">
			<Languages data={languages} />
			<Categories data={categories} />
		</div>
	)
}

const Categories = ({ data }: { data: WakatimeCategoryType[] }) => {
	const t = useTranslations("DashboardSection")

	const chartData = data
		.slice(0, 5)
		.map((item) => ({ name: item.name, percent: item.percent }))

	const chartConfig = {
		percent: {
			label: "Percent of Time by Category",
			color: "#fbbf24"
		}
	} satisfies ChartConfig

	return (
		<CardStyle className="lg:col-span-4">
			<div className="flex flex-col gap-2">
				<Typography.Title variant="3/bold">
					{t("categories.title")}
				</Typography.Title>
				<Typography.Text variant="xs/normal">
					{t("categories.description")}
				</Typography.Text>
			</div>

			<ChartContainer config={chartConfig} className="mt-8 h-[300px] w-full">
				<BarChart accessibilityLayer data={chartData}>
					<CartesianGrid vertical={false} />
					<XAxis
						dataKey="name"
						tickLine={false}
						tickMargin={10}
						axisLine={false}
					/>
					<ChartTooltip content={<ChartTooltipContent />} />
					<ChartLegend content={<ChartLegendContent />} />
					<Bar dataKey="percent" fill="var(--color-percent)" radius={4} />
				</BarChart>
			</ChartContainer>
		</CardStyle>
	)
}

const Languages = ({ data }: { data: WakatimeLanguageType[] }) => {
	const t = useTranslations("DashboardSection")

	const chartData = data
		.slice(0, 6)
		.map((item) => ({ name: item.name, percent: item.percent }))

	const chartConfig = {
		percent: {
			label: "Percent of Time by Language",
			color: "#fbbf24"
		}
	} satisfies ChartConfig

	return (
		<CardStyle className="lg:col-span-5">
			<div className="flex flex-col gap-2">
				<Typography.Title variant="3/bold">
					{t("languages.title")}
				</Typography.Title>
				<Typography.Text variant="xs/normal">
					{t("languages.description")}
				</Typography.Text>
			</div>

			<ChartContainer config={chartConfig} className="mt-8 h-[300px] w-full">
				<BarChart accessibilityLayer data={chartData}>
					<CartesianGrid vertical={false} />
					<XAxis
						dataKey="name"
						tickLine={false}
						tickMargin={10}
						axisLine={false}
					/>
					<ChartTooltip content={<ChartTooltipContent />} />
					<ChartLegend content={<ChartLegendContent />} />
					<Bar dataKey="percent" fill="var(--color-percent)" radius={4} />
				</BarChart>
			</ChartContainer>
		</CardStyle>
	)
}
