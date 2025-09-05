"use client"

import { useTranslations } from "next-intl"

import { ANIMATES, TRANSITIONS } from "@/motion"
import { motion } from "motion/react"

import { GlassIcon, Title } from "@/components/ui"
import { CardStyle } from "@/widgets"

import { SkillsData } from "@/data"

export const SkillsContent = () => {
	const t = useTranslations("AboutSection.skillsContent")

	return (
		<CardStyle className="lg:col-span-7">
			<div>
				<div className="max-w-xl">
					<Title text={t("title")} description={t("description")} />
				</div>

				<div className="relative z-20 flex gap-12 flex-wrap my-10">
					{SkillsData.map((item, index) => (
						<motion.div
							key={item.name}
							whileHover={{ scale: 1.1 }}
							variants={ANIMATES.BLUR_FADE}
							transition={{ ...TRANSITIONS.SPRING_SMOOTH, delay: 0.2 * index }}
							viewport={{ once: true, amount: 0.3 }}
							initial="initial"
							whileInView="animate"
							exit="exit"
						>
							<GlassIcon {...item} />
						</motion.div>
					))}
				</div>
			</div>
		</CardStyle>
	)
}
