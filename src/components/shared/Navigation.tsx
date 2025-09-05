"use client"

import { useState } from "react"

import { AnimatePresence, motion } from "motion/react"

import { NavHeader, NavMenuDesktop, NavMenuMobile } from "@/ui"

export const Navigation = () => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<div className="fixed top-0 left-0 right-0 z-40 w-full h-full py-6">
			<div className="relative z-50 flex justify-between items-center gap-4 container px-4 mx-auto">
				<NavHeader onClick={() => setIsOpen(!isOpen)} />
				<NavMenuDesktop />
			</div>

			<AnimatePresence mode="wait">
				{isOpen && (
					<div className="block lg:hidden fixed inset-0 z-30">
						{/* Backdrop */}
						<motion.div
							className="fixed inset-0 bg-black/60 backdrop-blur z-30"
							onClick={() => setIsOpen(false)}
						/>

						{/* Mobile Menu */}
						<NavMenuMobile />
					</div>
				)}
			</AnimatePresence>
		</div>
	)
}
