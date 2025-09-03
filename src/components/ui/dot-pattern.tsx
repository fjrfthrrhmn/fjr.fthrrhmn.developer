import { cn } from "@/lib/utils"

interface DotPatternProps extends React.SVGProps<SVGSVGElement> {
	width?: number
	height?: number
	cx?: number
	cy?: number
	cr?: number
	className?: string
}

export const DotPattern = ({
	width = 16,
	height = 16,
	cx = 1,
	cy = 1,
	cr = 1,
	className,
	...props
}: DotPatternProps) => {
	const id = "dot-pattern"

	return (
		<svg
			aria-hidden="true"
			className={cn(
				"pointer-events-none absolute inset-0 h-full w-full z-0",
				className
			)}
			{...props}
		>
			<defs>
				<pattern
					id={id}
					width={width}
					height={height}
					patternUnits="userSpaceOnUse"
				>
					<circle
						cx={cx}
						cy={cy}
						r={cr}
						className="text-zinc-400/30"
						fill="currentColor"
					/>
				</pattern>
			</defs>
			<rect width="100%" height="100%" fill={`url(#${id})`} />
		</svg>
	)
}
