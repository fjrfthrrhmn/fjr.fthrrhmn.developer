import { HeroSection } from "@/components/features/home"
import { DotPattern } from "@/ui"
import { PhotosMarquee } from "@/widgets"

export default function HomePage() {
	return (
		<>
			<div className="absolute top-0 left-0 w-full h-[400px]">
				<DotPattern
					width={12}
					height={12}
					className="[mask-image:radial-gradient(ellipse_at_top_left,white_10%,transparent_80%)]"
				/>
			</div>

			<HeroSection />
			<PhotosMarquee />
		</>
	)
}
