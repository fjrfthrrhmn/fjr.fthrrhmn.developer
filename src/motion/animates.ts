import { Variants } from "motion"

const BLUR_FADE_ROTATE: Variants = {
	initial: {
		opacity: 0,
		y: 70,
		filter: "blur(14px)",
		rotate: 4
	},
	animate: {
		opacity: 1,
		y: 0,
		filter: "blur(0px)",
		rotate: 0
	},
	exit: {
		opacity: 0,
		y: 70,
		filter: "blur(14px)",
		rotate: 4
	}
} satisfies Variants

export const ANIMATES = {
	BLUR_FADE_ROTATE
}
