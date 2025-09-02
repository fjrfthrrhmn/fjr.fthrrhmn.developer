"use client"

import { ReactNode } from "react"
import { ThemeProvider } from "next-themes"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Toaster } from "sonner"

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 1000 * 60 * 5,
			gcTime: 1000 * 60 * 30,
			refetchOnWindowFocus: false,
			refetchOnReconnect: true,
			retry: 2
		},
		mutations: {
			retry: false
		}
	}
})

export function Providers({ children }: { children: ReactNode }) {
	return (
		<ThemeProvider
			attribute="class"
			defaultTheme="dark"
			storageKey="theme"
			forcedTheme="dark"
			enableSystem
		>
			<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
			<Toaster />
		</ThemeProvider>
	)
}
