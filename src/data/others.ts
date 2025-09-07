import {
	AwardIcon,
	BriefcaseIcon,
	GithubIcon,
	MessageCircleMoreIcon,
	TimerIcon,
	UserIcon,
	ZapIcon
} from "lucide-react"

export const NavItemsData = [
	{
		name: "About",
		href: "#about",
		icon: UserIcon
	},
	{
		name: "Certifications",
		href: "#certifications",
		icon: AwardIcon
	},
	{
		name: "Projects",
		href: "#projects",
		icon: BriefcaseIcon
	},
	{
		name: "Contact",
		href: "#contact",
		icon: MessageCircleMoreIcon
	}
] as const

export const ToggleItemsData = [
	{
		name: "Github",
		icon: GithubIcon,
		disabled: false
	},
	{
		name: "MonkeyType",
		icon: ZapIcon,
		disabled: true
	},
	{
		name: "WakaTime",
		icon: TimerIcon,
		disabled: true
	}
] as const
