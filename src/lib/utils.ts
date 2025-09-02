import { clsx, type ClassValue } from "clsx"
import { format as dateFnsFormat, setDefaultOptions } from "date-fns"
import { enUS, tr } from "date-fns/locale"
import { twMerge } from "tailwind-merge"

import { APP_CONFIG } from "@/constants"

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export const sleep = (ms: number) => {
	return new Promise((resolve) => setTimeout(resolve, ms))
}

export const formatDate = (
	date: Date,
	format = "d MMMM yyyy",
	locale: "tr" | "en" = APP_CONFIG.DEFAULT_LANGUAGE
) => {
	setDefaultOptions({ locale: locale === "tr" ? tr : enUS })
	return dateFnsFormat(date, format)
}
