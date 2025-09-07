"use client"

import { useTranslations } from "next-intl"
import Image from "next/image"
import Link from "next/link"

import { ANIMATES, TRANSITIONS } from "@/motion"
import { LucideArrowRight, LucideSend } from "lucide-react"
import { motion } from "motion/react"
import { toast } from "sonner"

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
			<Container className="min-h-[80dvh] pt-24 grid grid-cols-1 gap-y-10 lg:grid-cols-3 lg:items-center overflow-x-hidden">
				<div className="w-full h-max lg:max-w-lg flex flex-col gap-6 lg:col-span-2">
					<motion.div
						variants={ANIMATES.BLUR_FADE_ROTATE}
						transition={{ ...TRANSITIONS.SPRING_SMOOTH, delay: 0.2 }}
						initial="initial"
						animate="animate"
						exit="exit"
					>
						<Typography.Title variant="1/black" className="text-4xl">
							{t("title")}
						</Typography.Title>
						<GradientText>
							<Typography.Title className="text-5xl" variant="1/black">
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
						className="flex flex-wrap flex-col md:flex-row gap-6"
					>
						<motion.div whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.1 }}>
							<Button
								className="group w-full"
								size="lg"
								onClick={() =>
									toast.info("Sorry, this feature is not available yet.")
								}
							>
								<LucideSend
									className="group-hover:-rotate-12 transition-all duration-200"
									strokeWidth={2.5}
								/>
								{t("buttonOne")}
							</Button>
						</motion.div>
						<motion.div whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.1 }}>
							<Button
								asChild
								size="lg"
								variant={"secondary"}
								className="group w-full"
							>
								<Link href={"#about"}>
									{t("buttonTwo")}
									<LucideArrowRight
										className="group-hover:-rotate-12 transition-all duration-200"
										strokeWidth={2.5}
									/>
								</Link>
							</Button>
						</motion.div>
					</motion.div>
				</div>

				<motion.div
					variants={ANIMATES.BLUR_FADE_ROTATE}
					transition={{ ...TRANSITIONS.SPRING_SMOOTH, delay: 0.5 }}
					initial="initial"
					animate="animate"
					exit="exit"
					className="order-first lg:order-last w-full h-max flex lg:justify-end"
				>
					<Image
						src={image}
						alt="profile"
						width={400}
						height={400}
						quality={100}
						className="rounded-full border-8 shadow-2xl object-cover aspect-square size-24 sm:size-32 lg:size-auto"
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
