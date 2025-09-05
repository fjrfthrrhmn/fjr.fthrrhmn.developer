import { Transition } from "motion/react"

const SPRING_SMOOTH = {
	type: "spring",
	stiffness: 70,
	damping: 10
} satisfies Transition

const SPRING_BOUNCY = {
	type: "spring",
	stiffness: 200,
	damping: 12
} satisfies Transition

const SPRING_HEAVY = {
	type: "spring",
	stiffness: 300,
	damping: 30,
	mass: 2
} satisfies Transition

const TWEEN_EASE = {
	type: "tween",
	ease: "easeInOut",
	duration: 0.4
} satisfies Transition

export const TRANSITIONS = {
	SPRING_SMOOTH,
	SPRING_BOUNCY,
	SPRING_HEAVY,
	TWEEN_EASE
}
