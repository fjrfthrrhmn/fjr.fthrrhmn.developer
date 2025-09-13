import Image from "next/image"

import { ArrowRight } from "lucide-react"
import { motion } from "motion/react"

import { Button, Typography } from "@/components/ui"
import { CardStyle } from "@/components/widgets"

export const ProjectsList = () => {
	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
			{[...Array(4)].map((item, index) => {
				return <ProjectItem key={index} />
			})}
		</div>
	)
}

const ProjectItem = () => {
	return (
		<CardStyle className="group">
			<div className="flex flex-col justify-between mb-6">
				<Typography.Title variant="2/extrabold">UnTab</Typography.Title>

				<div className="flex-1 flex flex-col gap-4 my-6">
					<Typography.Text>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
						quaerat, facere doloribus quae quam odio optio ratione placeat
						veniam architecto.
					</Typography.Text>
					<Typography.Text>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
						aspernatur.
					</Typography.Text>
				</div>

				<div className="flex gap-4 flex-row justify-between">
					<motion.div whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.1 }}>
						<Button>
							Live
							<ArrowRight className="-rotate-45" />
						</Button>
					</motion.div>
					<motion.div whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.1 }}>
						<Button variant="secondary">
							Github <ArrowRight className="-rotate-45" />
						</Button>
					</motion.div>
				</div>
			</div>

			<div className="relative overflow-hidden rounded-2xl aspect-video object-cover">
				<Image
					src={
						"https://i.pinimg.com/736x/df/c4/af/dfc4af36361640d225bca68e1365d8e1.jpg"
					}
					alt="project"
					width={100}
					height={100}
					className="w-full h-full rounded-2xl object-cover grayscale-100 group-hover:grayscale-0 transition duration-300 ease-linear"
					unoptimized
				/>
			</div>
		</CardStyle>
	)
}
