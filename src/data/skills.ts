import { IconType } from "react-icons"
import {
	SiCanva as IconCanva,
	SiCss3 as IconCss,
	SiFigma as IconFigma,
	SiGit as IconGit,
	SiJavascript as IconJavascript,
	SiLaravel as IconLaravel,
	SiMysql as IconMysql,
	SiNextdotjs as IconNextJs,
	SiNodedotjs as IconNodeJs,
	SiPhp as IconPhp,
	SiReact as IconReact,
	SiTailwindcss as IconTailwindCss,
	SiTypescript as IconTypescript,
	SiVercel as IconVercel
} from "react-icons/si"
import {
	TbBrandAstro as IconAstro,
	TbBrandFramerMotion as IconFramerMotion,
	TbBrandGithub as IconGithub,
	TbBrandNotion as IconNotion,
	TbTerminal as IconTerminal,
	TbBrandVisualStudio as IconVscode
} from "react-icons/tb"

type SkillType = {
	icon: IconType
	name: string
	background: string
}

export const SkillsData: SkillType[] = [
	{
		name: "CSS",
		icon: IconCss,
		background: "bg-blue-600"
	},
	{
		name: "JavaScript",
		icon: IconJavascript,
		background: "bg-yellow-500"
	},
	{
		name: "React",
		icon: IconReact,
		background: "bg-sky-400"
	},
	{
		name: "TypeScript",
		icon: IconTypescript,
		background: "bg-blue-600"
	},
	{
		name: "Tailwind",
		icon: IconTailwindCss,
		background: "bg-sky-400"
	},
	{
		name: "Next.js",
		icon: IconNextJs,
		background: "bg-black"
	},
	{
		name: "Node.js",
		icon: IconNodeJs,
		background: "bg-green-600"
	},
	{
		name: "PHP",
		icon: IconPhp,
		background: "bg-indigo-500"
	},
	{
		name: "MySQL",
		icon: IconMysql,
		background: "bg-blue-700"
	},
	{
		name: "Laravel",
		icon: IconLaravel,
		background: "bg-red-500"
	},
	{
		name: "Astro",
		icon: IconAstro,
		background: "bg-purple-600"
	},
	{
		name: "Motion",
		icon: IconFramerMotion,
		background: "bg-pink-500"
	},
	{
		name: "Vercel",
		icon: IconVercel,
		background: "bg-black"
	},

	// --- Tools ---
	{
		name: "V Code",
		icon: IconVscode,
		background: "bg-blue-400"
	},
	{
		name: "Figma",
		icon: IconFigma,
		background: "bg-pink-400"
	},
	{
		name: "CLI",
		icon: IconTerminal,
		background: "bg-gray-700"
	},
	{
		name: "Notion",
		icon: IconNotion,
		background: "bg-black"
	},
	{
		name: "Canva",
		icon: IconCanva,
		background: "bg-indigo-400"
	},
	{
		name: "Git",
		icon: IconGit,
		background: "bg-orange-500"
	},
	{
		name: "GitHub",
		icon: IconGithub,
		background: "bg-gray-800"
	}
]
