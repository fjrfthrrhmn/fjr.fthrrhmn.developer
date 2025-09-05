import { useTranslations } from "next-intl"

import { Typography } from "@/components/ui"
import { CardStyle } from "@/components/widgets"

export const ProfileContent = () => {
	const t = useTranslations("AboutSection.profileContent")
	const items = ["first", "second", "third", "fourth"]

	return (
		<CardStyle className="lg:col-span-4">
			<div>
				<Typography.Title variant="2/extrabold">{t("title")}</Typography.Title>

				<div className="grid grid-cols-1 gap-y-6 mt-10">
					{items.map((item) => {
						return (
							<Typography.Text key={item} variant="sm/normal">
								{t(item)}
							</Typography.Text>
						)
					})}
				</div>
			</div>
		</CardStyle>
	)
}
