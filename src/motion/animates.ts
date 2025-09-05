import { Variants } from "motion/react"

const BLUR_FADE_ROTATE = {
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

const BLUR_FADE = {
	initial: {
		opacity: 0,
		filter: "blur(4px)",
		y: 40
	},
	animate: {
		opacity: 1,
		filter: "blur(0px)",
		y: 0
	}
} satisfies Variants

export const ANIMATES = {
	BLUR_FADE_ROTATE,
	BLUR_FADE
}
