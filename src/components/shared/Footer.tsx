import Link from "next/link"

import { cn } from "@/lib/utils"

import { Section, Typography } from "@/ui"

import { NavItemsData } from "@/data"

export const Footer = () => {
	return (
		<Section name="footer" className="pt-20 pb-10">
			<div className="container mx-auto">
				<div className="grid lg:grid-cols-3">
					<div className="col-span-2">
						<Typography.Text variant="xs/normal">
							© 2021 – present Fajar Fathurrahman.
						</Typography.Text>
					</div>

					<div className="flex items-center gap-4">
						{NavItemsData.map((item) => {
							return (
								<Link key={item.name} href={item.href}>
									<Typography.Text
										variant="xs/normal"
										className={cn(
											"relative inline-block",
											"after:content-[''] after:block after:h-[2px] after:bg-sky-500 after:scale-x-0 hover:after:scale-x-100 after:origin-left",
											"after:transition-transform after:duration-500"
										)}
									>
										{item.name}
									</Typography.Text>
								</Link>
							)
						})}
					</div>
				</div>
			</div>
		</Section>
	)
}
