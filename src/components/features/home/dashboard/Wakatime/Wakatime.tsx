import { useWakatimeProfile } from "@/hooks"

export const Wakatime = () => {
	const { response } = useWakatimeProfile()

	console.log(response)

	return <div>WakaTime</div>
}
