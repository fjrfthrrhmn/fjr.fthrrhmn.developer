import { AlertCircleIcon } from "lucide-react"

import Typography from "./typography"

type ErrorStateProps = {
	message?: string
	errorMessage?: string
	title?: string
	className?: string
}

export const ErrorState = ({
	message,
	title,
	className,
	errorMessage
}: ErrorStateProps) => {
	return (
		<div
			className={`h-max py-20 border-4 border-zinc-700 border-dashed rounded-3xl w-full flex flex-col justify-center items-center gap-4 text-center ${className}`}
		>
			<span className="text-red-500 bg-red-500/15 rounded-full p-4">
				<AlertCircleIcon size={44} />
			</span>

			<Typography.Title variant="3/bold">
				{title || "Ups, Something went wrong"}
			</Typography.Title>
			<Typography.Text className="max-w-xs mb-6">
				{message ??
					"We couldn’t complete your request.  Please try again later."}
			</Typography.Text>

			{errorMessage && (
				<Typography.Text className="font-mono text-red-500 bg-red-500/15 px-2">
					{errorMessage}
				</Typography.Text>
			)}
		</div>
	)
}
