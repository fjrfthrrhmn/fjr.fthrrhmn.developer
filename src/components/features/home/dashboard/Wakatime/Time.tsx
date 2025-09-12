import { formatDate } from "@/lib/utils"

import { Typography } from "@/components/ui"
import { CardStyle } from "@/components/widgets"

export const Time = ({ start, end }: { start: string; end: string }) => {
	return (
		<div className="col-span-4 grid lg:grid-cols-2 gap-6">
			<CardStyle>
				<Typography.Text
					variant="xs/normal"
					className="flex gap-2 items-center mb-2"
				>
					Dari Tanggal
				</Typography.Text>
				<Typography.Title variant="5/bold">
					{formatDate(new Date(start), "d MMM yyyy")}
				</Typography.Title>
			</CardStyle>

			<CardStyle>
				<Typography.Text
					variant="xs/normal"
					className="flex gap-2 items-center mb-2"
				>
					Berakhir Tanggal
				</Typography.Text>
				<Typography.Title variant="5/bold">
					{formatDate(new Date(end), "d MMM yyyy")}
				</Typography.Title>
			</CardStyle>
		</div>
	)
}
