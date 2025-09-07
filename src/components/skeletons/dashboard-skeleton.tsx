import { cn } from "@/lib/utils"

import { Skeleton } from "@/ui"

const items = [
	{
		className: "lg:col-span-2"
	},
	{
		className: "lg:col-span-4"
	},
	{
		className: "lg:col-span-3"
	},
	{
		className: "lg:col-span-3 hidden lg:block"
	},
	{
		className: "lg:col-span-4 hidden lg:block"
	},
	{
		className: "lg:col-span-2 hidden lg:block"
	}
]

export const DashboardSkeleton = () => {
	return (
		<>
			{items.map((item, index) => {
				return (
					<Skeleton
						key={index}
						className={cn("h-44 w-full col-span-6", item.className)}
					/>
				)
			})}
		</>
	)
}
