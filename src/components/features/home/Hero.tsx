"use client"

import { useTranslations } from "next-intl"
import Image from "next/image"
import Link from "next/link"

import { ANIMATES, TRANSITIONS } from "@/motion"
import { LucideArrowRight, LucideSend } from "lucide-react"
import { motion } from "motion/react"

import {
	Button,
	Container,
	GradientText,
	Section,
	Spotlight,
	Typography
} from "@/components/ui"

const Hero = () => {
	const t = useTranslations("HeroSection")
	const image =
		"https://i.pinimg.com/1200x/f7/7a/35/f77a35a04feb7ed10d5bd51b5922657c.jpg"

	return (
		<Section name="hero">
			<Container className="min-h-[75dvh] grid grid-cols-1 gap-y-10 lg:grid-cols-3 lg:items-center">
				<div className="w-full h-max lg:max-w-lg border flex flex-col gap-6 lg:col-span-2">
					<motion.div
						variants={ANIMATES.BLUR_FADE_ROTATE}
						transition={{ ...TRANSITIONS.SPRING_SMOOTH, delay: 0.2 }}
						initial="initial"
						animate="animate"
						exit="exit"
					>
						<Typography.Title variant="1/black">{t("title")}</Typography.Title>
						<GradientText>
							<Typography.Title variant="1/black">
								{t("highlight")}.
							</Typography.Title>
						</GradientText>
					</motion.div>
					<motion.div
						variants={ANIMATES.BLUR_FADE_ROTATE}
						transition={{ ...TRANSITIONS.SPRING_SMOOTH, delay: 0.3 }}
						initial="initial"
						animate="animate"
						exit="exit"
					>
						<Typography.Text>{t("desc")}</Typography.Text>
					</motion.div>

					<motion.div
						variants={ANIMATES.BLUR_FADE_ROTATE}
						transition={{ ...TRANSITIONS.SPRING_SMOOTH, delay: 0.4 }}
						initial="initial"
						animate="animate"
						exit="exit"
						className="flex flex-wrap flex-col md:flex-row gap-4"
					>
						<Button size="lg">
							<LucideSend strokeWidth={2.5} />
							{t("buttonOne")}
						</Button>
						<Button asChild size="lg" variant={"secondary"}>
							<Link href={"#about"}>
								{t("buttonTwo")}
								<LucideArrowRight strokeWidth={2.5} />
							</Link>
						</Button>
					</motion.div>
				</div>

				<motion.div
					variants={ANIMATES.BLUR_FADE_ROTATE}
					transition={{ ...TRANSITIONS.SPRING_SMOOTH, delay: 0.5 }}
					initial="initial"
					animate="animate"
					exit="exit"
					className="order-first lg:order-last w-full h-max border flex lg:justify-end"
				>
					<Image
						src={image}
						alt="profile"
						width={400}
						height={400}
						quality={100}
						className="rounded-full border-8 shadow-2xl object-cover aspect-square size-24 sm:size-28 lg:size-72"
						priority
						unoptimized
					/>
				</motion.div>
			</Container>

			<div className="absolute z-0 w-full h-full top-0 left-0">
				<Spotlight />
			</div>
		</Section>
	)
}

export default Hero
