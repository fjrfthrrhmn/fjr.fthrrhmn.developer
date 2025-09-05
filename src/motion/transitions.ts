import { Transition } from "motion"

const SPRING_SMOOTH: Transition = {
	type: "spring",
	stiffness: 70,
	damping: 10
} satisfies Transition

const SPRING_BOUNCY: Transition = {
	type: "spring",
	stiffness: 200,
	damping: 12
} satisfies Transition

const SPRING_HEAVY: Transition = {
	type: "spring",
	stiffness: 300,
	damping: 30,
	mass: 2
} satisfies Transition

const TWEEN_EASE: Transition = {
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
