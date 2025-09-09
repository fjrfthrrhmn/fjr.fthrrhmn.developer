import { GITHUB_STATS_MAP } from "@/constants"

import { ContributionsType } from "@/services"

import { NumberTicker, Typography } from "@/ui"
import { CardStyle } from "@/widgets"

type StatsProps = {
	stats: ContributionsType
}

export const Stats = ({ stats }: StatsProps) => {
	const COLOR = {
		TEXT: "text-[#34d399]",
		UNDERLINE: "decoration-[#34d399]"
	}

	return (
		<div className="lg:col-span-5 w-full h-max lg:min-h-44 lg:max-h-60 grid sm:grid-cols-2 gap-6">
			{GITHUB_STATS_MAP(stats)?.map((stat, index) => (
				<CardStyle key={index}>
					<div className="relative z-20 flex p-4 flex-col items-center justify-center text-center gap-2">
						<Typography.Title variant="2/black">
							<NumberTicker
								value={stat.value}
								className={`font-mono ${COLOR.TEXT}`}
							/>
						</Typography.Title>
						<Typography.Text variant="sm/normal" className="text-foreground">
							{stat.label}
						</Typography.Text>
					</div>
				</CardStyle>
			))}
		</div>
	)
}
