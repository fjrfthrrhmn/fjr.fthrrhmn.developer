import { IconType } from "react-icons"

import { cn } from "@/lib/utils"

import { DotPattern } from "@/ui"

type IconPlacement = "topLeft" | "topRight" | "bottomLeft" | "bottomRight"

type CardStyleProps = {
	children: React.ReactNode
	className?: string
	classNameIcon?: string
	classNameContent?: string
	icon?: IconType
	iconSize?: number
	iconPlacement?: IconPlacement
} & React.HTMLAttributes<HTMLDivElement>

export const CardStyle = ({ ...props }: CardStyleProps): React.ReactNode => {
	const { children, className } = props
	const containerClasses = cn(
		"relative overflow-hidden p-6 rounded-3xl border-2 border-zinc-700 bg-zinc-800",
		className
	)

	return (
		<div {...props} className={containerClasses}>
			{/* Content */}
			<div className={cn("relative z-20")}>{children}</div>

			{/* Decorative Icon */}
			{/* {Icon && (
				<div className={iconClasses}>
					<Icon size={iconSize} strokeWidth={2} />
				</div>
			)} */}

			{/* Background pattern */}
			<DotPattern
				className={cn(
					"[-webkit-mask-image:radial-gradient(ellipse_at_bottom_right,white_10%,transparent_90%)]",
					"[mask-image:radial-gradient(ellipse_at_bottom_right,white_10%,transparent_90%)]"
				)}
			/>
		</div>
	)
}
