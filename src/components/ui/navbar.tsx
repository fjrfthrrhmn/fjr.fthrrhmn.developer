"use client"

import { useTranslations } from "next-intl"
import Link from "next/link"

import { ANIMATES, TRANSITIONS } from "@/motion"
import { Spin as Hamburger } from "hamburger-react"
import { BotIcon } from "lucide-react"
import { motion } from "motion/react"
import { toast } from "sonner"

import { RainbowButton, Typography } from "@/ui"

import { NavItemsData } from "@/data"

const NavHeader = ({
	onClick,
	isOpen
}: {
	onClick: () => void
	isOpen: boolean
}) => {
	return (
		<>
			<div className="block lg:hidden bg-foreground shadow-2xl rounded-full">
				<Hamburger color="black" toggle={onClick} toggled={isOpen} size={18} />
			</div>
		</>
	)
}

const NavMenuDesktop = () => {
	const t = useTranslations("AboutSection")

	return (
		<div className="hidden lg:flex gap-4 items-center">
			<div className="border px-6 rounded-2xl py-2.5 flex items-center gap-6 bg-zinc-800/60 shadow-2xl backdrop-blur w-max">
				{NavItemsData.map((item) => {
					return (
						<div key={item.name}>
							<Link href={item.href}>
								<Typography.Text variant="xs/bold" className="text-foreground">
									{item.name}
								</Typography.Text>
							</Link>
						</div>
					)
				})}
			</div>

			<RainbowButton onClick={() => toast.info(t("descriptionToast"))}>
				<BotIcon />
				Ask AI About Me
			</RainbowButton>
		</div>
	)
}

const NavMenuMobile = () => {
	const t = useTranslations("AboutSection")

	return (
		<div className="relative z-40 w-full sm:max-w-sm mx-auto h-full flex flex-col justify-center px-6">
			<div className="flex flex-col justify-center gap-6 mb-10">
				{NavItemsData.map((item, index) => {
					return (
						<motion.div
							key={item.name}
							variants={ANIMATES.BLUR_FADE_ROTATE}
							transition={{ ...TRANSITIONS.SPRING_SMOOTH, delay: 0.2 * index }}
							initial="initial"
							animate="animate"
							exit="exit"
						>
							<Link href={item.href}>
								<Typography.Title
									variant="3/bold"
									className="flex items-center gap-4 text-center"
								>
									<item.icon size={32} />
									{item.name}
								</Typography.Title>
							</Link>
						</motion.div>
					)
				})}
			</div>

			<motion.div
				variants={ANIMATES.BLUR_FADE_ROTATE}
				transition={{ ...TRANSITIONS.SPRING_SMOOTH }}
				initial="initial"
				animate="animate"
				exit="exit"
			>
				<RainbowButton
					className="w-full"
					onClick={() => toast.info(t("descriptionToast"))}
				>
					<BotIcon />
					{t("buttonOne")}
				</RainbowButton>
			</motion.div>
		</div>
	)
}

export { NavHeader, NavMenuDesktop, NavMenuMobile }
