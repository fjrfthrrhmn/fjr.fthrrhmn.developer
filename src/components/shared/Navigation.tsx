"use client"

import { useState } from "react"

import { AnimatePresence, motion } from "motion/react"

import { NavHeader, NavMenuDesktop, NavMenuMobile } from "@/ui"

export const Navigation = () => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<div className="fixed top-0 left-0 right-0 z-40 w-full h-max py-6">
			<div className="relative z-50 flex justify-end items-center gap-4 container px-4 mx-auto">
				<NavHeader isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
				<NavMenuDesktop />
			</div>

			<AnimatePresence>
				{isOpen && (
					<div className="block lg:hidden fixed inset-0 z-30 ">
						{/* Backdrop */}
						<motion.div
							className="fixed inset-0 z-30 bg-black/60"
							initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
							animate={{ opacity: 1, backdropFilter: "blur(4px)" }}
							exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
							onClick={() => setIsOpen(false)}
							transition={{
								type: "tween",
								ease: "easeOut",
								duration: 0.5
							}}
						/>

						{/* Mobile Menu */}
						<NavMenuMobile />
					</div>
				)}
			</AnimatePresence>
		</div>
	)
}
