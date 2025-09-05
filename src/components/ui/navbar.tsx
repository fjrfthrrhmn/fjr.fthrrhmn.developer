"use client"

import { useTranslations } from "next-intl"
import Image from "next/image"
import Link from "next/link"

import { Spin as Hamburger } from "hamburger-react"
import { BotIcon } from "lucide-react"
import { motion } from "motion/react"
import { toast } from "sonner"

import { Avatar, RainbowButton, Typography } from "@/ui"

import { NavItemsData } from "@/data"

const NavHeader = ({ onClick }: { onClick: () => void }) => {
	const image =
		"https://i.pinimg.com/1200x/f7/7a/35/f77a35a04feb7ed10d5bd51b5922657c.jpg"

	return (
		<>
			<motion.div>
				<Avatar className="size-12 border-4">
					<Image
						src={image}
						alt="profile"
						width={48}
						height={48}
						className="object-cover w-full h-full"
						unoptimized
					/>
				</Avatar>
			</motion.div>

			<div className="block lg:hidden bg-foreground shadow-2xl rounded-full">
				<Hamburger color="black" onToggle={onClick} size={18} />
			</div>
		</>
	)
}

const NavMenuDesktop = () => {
	const t = useTranslations("AboutSection")

	return (
		<div className="hidden lg:flex gap-4 items-center">
			<div className="border px-6 rounded-2xl py-2 flex items-center gap-6 bg-zinc-800/40 shadow-2xl backdrop-blur w-max">
				{NavItemsData.map((item) => {
					return <div key={item.name}>{item.name}</div>
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
				{NavItemsData.map((item) => {
					return (
						<motion.div key={item.name}>
							<Link href={item.href}>
								<Typography.Title
									variant="3/extrabold"
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

			<RainbowButton
				className="w-full"
				onClick={() => toast.info(t("descriptionToast"))}
			>
				<BotIcon />
				{t("buttonOne")}
			</RainbowButton>
		</div>
	)
}

export { NavHeader, NavMenuDesktop, NavMenuMobile }
