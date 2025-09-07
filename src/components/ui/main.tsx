import React, { ComponentProps } from "react"

import { cn } from "@/lib/utils"

type SectionProps = {
	name: string
} & ComponentProps<"section">

type ContainerProps = {
	container?: boolean
} & ComponentProps<"div">

const Section = ({ ...props }: SectionProps): React.ReactNode => {
	const { children, name, className } = props
	const classes = cn("relative z-10 w-full h-full", className)

	return (
		<section {...props} id={name} className={classes}>
			{children}
		</section>
	)
}

const Container = ({ ...props }: ContainerProps): React.ReactNode => {
	const { children, container = true, className } = props
	const classes = cn(
		"relative z-10",
		container && "container mx-auto px-4 py-6 sm:px-12",
		className
	)

	return (
		<div {...props} className={classes}>
			{children}
		</div>
	)
}

export { Section, Container }
