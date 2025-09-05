"use client"

import { NavHeader, NavMenuDesktop } from "@/ui"

export const Navigation = () => {
	return (
		<div className="fixed top-0 left-0 right-0 z-50 w-full h-max border my-6">
			<div className="flex justify-between items-center gap-4 container mx-auto">
				<NavHeader />

				<NavMenuDesktop />
			</div>
		</div>
	)
}
