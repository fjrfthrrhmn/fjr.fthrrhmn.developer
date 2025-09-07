import { EllipsisVerticalIcon } from "lucide-react"

import { useDashboardStore } from "@/stores/dashboard-store"

import {
	Button,
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
	RainbowButton
} from "@/ui"

import { ToggleItemsData } from "@/data"

export const Toggle = () => {
	const active = useDashboardStore((state) => state.active)
	const setActive = useDashboardStore((state) => state.setActive)

	const activeItem = ToggleItemsData.find((item) => item.name === active)
	const inactiveItems = ToggleItemsData.filter((item) => item.name !== active)

	return (
		<DropdownMenu>
			<div className="flex justify-end gap-4">
				<RainbowButton className="gap-2 w-full lg:max-w-[200px]">
					{activeItem?.icon && <activeItem.icon size={18} />}
					{active}
				</RainbowButton>

				<DropdownMenuTrigger asChild>
					<Button size={"icon"} variant={"secondary"}>
						<EllipsisVerticalIcon />
					</Button>
				</DropdownMenuTrigger>
			</div>

			<DropdownMenuContent align="end">
				<DropdownMenuLabel>Switch</DropdownMenuLabel>
				<DropdownMenuSeparator />
				{inactiveItems.map((item) => (
					<DropdownMenuItem
						key={item.name}
						className="gap-2"
						onClick={() => setActive(item.name)}
						disabled={item.disabled}
					>
						<item.icon size={18} />
						{item.name}
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
