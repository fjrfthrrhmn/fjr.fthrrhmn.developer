import { clsx, type ClassValue } from "clsx"
import { format as dateFnsFormat, setDefaultOptions } from "date-fns"
import { enUS, tr } from "date-fns/locale"
import { twMerge } from "tailwind-merge"

import {
	APP_CONFIG,
	CURRENCY_CONFIG,
	DEFAULT_CURRENCY,
	type CurrencyCode
} from "@/constants"

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

export const formatCurrency = (
	amount: number,
	currency: CurrencyCode = DEFAULT_CURRENCY
) => {
	const config = CURRENCY_CONFIG[currency]

	return new Intl.NumberFormat(config.locale, {
		style: "currency",
		currency: currency,
		minimumFractionDigits: config.minimumFractionDigits,
		maximumFractionDigits: config.maximumFractionDigits
	}).format(amount)
}
