import Image from "next/image"

import { cn } from "@/lib/utils"

import { Marquee, Section } from "@/ui"

export const PhotosData = [
	{
		name: "Jack",
		src: "https://avatar.vercel.sh/jack"
	},
	{
		name: "Jill",
		src: "https://avatar.vercel.sh/jill"
	},
	{
		name: "John",
		src: "https://avatar.vercel.sh/john"
	},
	{
		name: "Jane",
		src: "https://avatar.vercel.sh/jane"
	},
	{
		name: "Jenny",
		src: "https://avatar.vercel.sh/jenny"
	},
	{
		name: "James",
		src: "https://avatar.vercel.sh/james"
	}
]

export function PhotosMarquee() {
	return (
		<Section name="photos">
			<Marquee className="[--gap:2rem] [--duration:40s] overflow-clip py-6">
				{PhotosData.map((item, index) => {
					const rotateClass = [
						"rotate-0",
						"rotate-2",
						"-rotate-2",
						"rotate-3",
						"-rotate-3"
					][index % 5]

					return (
						<Image
							key={item.name}
							src={item.src}
							alt={item.name}
							width={400}
							height={400}
							className={cn(
								"w-full h-52 aspect-auto rounded-2xl border-8",
								"hover:scale-110 transition duration-200 ease-in-out hover:rotate-0",
								rotateClass
							)}
							unoptimized
						/>
					)
				})}
			</Marquee>
		</Section>
	)
}
