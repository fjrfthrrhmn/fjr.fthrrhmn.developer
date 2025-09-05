"use client"

import React from "react"

import { cn } from "@/lib/utils"

import { BoxReveal } from "./box-reveal"
import Typography from "./typography"

type TitleVariant =
	| "1/black"
	| "1/extrabold"
	| "1/bold"
	| "2/black"
	| "2/extrabold"
	| "2/bold"
	| "3/black"
	| "3/extrabold"
	| "3/bold"

type TitleProps = {
	text: string
	description?: string
	variant?: TitleVariant
	as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" // semantic control
	withAnimation?: boolean
} & React.ComponentProps<"div">

export const Title = ({
	text,
	description,
	variant = "3/extrabold",
	children,
	className,
	withAnimation = false,
	...props
}: TitleProps) => {
	const classes = cn("", children && "md:col-span-2", className)

	const Wrapper = withAnimation
		? BoxReveal
		: ({ children }: { children: React.ReactNode }) => <>{children}</>

	const content = (
		<>
			<Wrapper>
				<Typography.Title variant={variant}>{text}</Typography.Title>
			</Wrapper>
			{description && (
				<Wrapper className="mt-4 max-w-xl">
					<Typography.Text>{description}</Typography.Text>
				</Wrapper>
			)}
		</>
	)

	if (children) {
		return (
			<div className="grid grid-cols-1 md:grid-cols-3 justify-end items-end gap-6 overflow-x-hidden">
				<div className={classes} {...props}>
					{content}
				</div>
				{children}
			</div>
		)
	}

	return (
		<div className={classes} {...props}>
			{content}
		</div>
	)
}
