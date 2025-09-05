"use client"

import { useEffect } from "react"
import { useTranslations } from "next-intl"
import Image from "next/image"

import { ANIMATES, TRANSITIONS } from "@/motion"
import { Bot } from "lucide-react"
import { motion, useAnimation, useScroll } from "motion/react"
import { toast } from "sonner"

import { Avatar, RainbowButton } from "@/ui"

const NAV_ITEMS = [
	{
		name: "Home",
		href: "#hero"
	},
	{
		name: "About",
		href: "#about"
	},
	{
		name: "Certifications",
		href: "#certifications"
	},
	{
		name: "Projects",
		href: "#projects"
	}
]

const NavHeader = () => {
	const controls = useAnimation()
	const { scrollY } = useScroll()

	useEffect(() => {
		return scrollY.onChange((y) => {
			if (y > 0) {
				controls.start("animate")
			} else {
				controls.start("initial")
			}
		})
	}, [scrollY, controls])

	const image =
		"https://i.pinimg.com/1200x/f7/7a/35/f77a35a04feb7ed10d5bd51b5922657c.jpg"
	return (
		<motion.div
			initial="initial"
			animate={controls}
			variants={ANIMATES.BLUR_FADE}
			transition={{ ...TRANSITIONS.SPRING_SMOOTH }}
		>
			<Avatar>
				<Image
					src={image}
					alt="profile"
					width={100}
					height={100}
					className="object-cover bg-center"
					unoptimized
				/>
			</Avatar>
		</motion.div>
	)
}

const NavMenuDesktop = () => {
	const t = useTranslations("AboutSection")

	return (
		<div className="flex gap-4 items-center">
			<div className="border px-6 rounded-2xl py-2 flex items-center gap-6 bg-zinc-800/40 shadow-2xl backdrop-blur w-max">
				{NAV_ITEMS.map((item) => {
					return <div key={item.name}>{item.name}</div>
				})}
			</div>

			<RainbowButton onClick={() => toast.info(t("descriptionToast"))}>
				<Bot />
				{t("buttonOne")}
			</RainbowButton>
		</div>
	)
}

export { NavHeader, NavMenuDesktop }
