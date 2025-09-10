import { WAKATIME_STATS_MAP } from "@/constants"

import { WakatimeResponseType } from "@/services"

import { Typography } from "@/components/ui"
import { CardStyle } from "@/components/widgets"

export const Stats = ({ data }: { data: WakatimeResponseType["data"] }) => {
	const COLOR = {
		TEXT: "text-amber-400",
		UNDERLINE: "decoration-amber-400"
	}

	return (
		<>
			<div className="col-span-9 grid grid-cols-1 lg:grid-cols-3 gap-4">
				{WAKATIME_STATS_MAP(data).map((item, index) => {
					return (
						<CardStyle key={index}>
							<Typography.Text
								variant="xs/normal"
								className="flex gap-2 items-center mb-2"
							>
								<item.icon size={22} />
								{item.label}
							</Typography.Text>
							<Typography.Title
								variant="4/bold"
								className={`${COLOR.TEXT} line-clamp-2`}
							>
								{item.value}
							</Typography.Title>
						</CardStyle>
					)
				})}
			</div>
		</>
	)
}
