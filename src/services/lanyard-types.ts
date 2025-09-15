export interface LanyardDiscordUserType {
	id: string
	username: string
	discriminator: string
	avatar: string | null
	bot?: boolean
}

export interface LanyardActivityType {
	id: string
	name: string
	interface: number
	created_at: number
	state?: string
	details?: string
	timestamps?: {
		start?: number
		end?: number
	}
	assets?: {
		large_image?: string
		large_text?: string
		small_image?: string
		small_text?: string
	}
	application_id?: string
}

export interface LanyardPresenceType {
	discord_user: LanyardDiscordUserType
	discord_status: "online" | "idle" | "dnd" | "offline"
	active_on_discord_mobile: boolean
	active_on_discord_desktop: boolean
	activities: LanyardActivityType[]
	listening_to_spotify: boolean
	spotify?: {
		track_id: string
		timestamps: { start: number; end: number }
		album: string
		album_art_url: string
		artist: string
		song: string
	}
}

export interface LanyardResponseType {
	success: boolean
	data: LanyardPresenceType
}
