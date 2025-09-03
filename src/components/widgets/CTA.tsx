import { useTranslations } from "next-intl"

import { MessagesSquare } from "lucide-react"

import { Button, Container, GradientText, Typography } from "@/ui"

import { CardStyle } from "./CardStyle"

const CTA = () => {
	const t = useTranslations("CTA")

	return (
		<Container>
			<CardStyle className="w-full h-max md:px-12 md:py-8">
				<div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-y-4 gap-x-10">
					<div className="lg:col-span-2 flex flex-col gap-6 w-full sm:max-w-xl">
						<div className="flex border border-red-500">
							<Typography.Title
								variant="1/black"
								className="border border-blue-500"
							>
								{t("title")}
							</Typography.Title>
							<GradientText className="border border-green-500">
								<Typography.Title
									variant="1/black"
									className="m-0 inline-block"
								>
									{t("highlight")}
								</Typography.Title>
							</GradientText>
						</div>

						<Typography.Text>{t("description")}</Typography.Text>
					</div>

					<Button size={"lg"}>
						<MessagesSquare strokeWidth={2.5} />
						{t("button")}
					</Button>
				</div>
			</CardStyle>
		</Container>
	)
}

export default CTA
