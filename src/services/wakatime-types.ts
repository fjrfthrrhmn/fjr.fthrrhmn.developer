export interface WakatimeResponseType {
	message: string
	data: {
		stats: StatsType
		allTime: AllTimeType
		user: UserType
	}
}

export interface StatsType {
	id: string
	user_id: string
	range: string
	start: string
	end: string
	timeout: number
	writes_only: boolean
	timezone: string
	holidays: number
	status: string
	created_at: string
	modified_at: string
	editors: EditorType[]
	human_readable_total_including_other_language: string
	dependencies: DependencyType[]
	languages: LanguageType[]
	operating_systems: OperatingSystemType[]
	machines: MachineType[]
	total_seconds: number
	human_readable_daily_average_including_other_language: string
	categories: CategoryType[]
	is_up_to_date_pending_future: boolean
	best_day: BestDayType
	human_readable_daily_average: string
	percent_calculated: number
	days_minus_holidays: number
	is_up_to_date: boolean
	daily_average_including_other_language: number
	projects: ProjectType[]
	total_seconds_including_other_language: number
	daily_average: number
	human_readable_total: string
	days_including_holidays: number
	is_already_updating: boolean
	is_stuck: boolean
	is_cached: boolean
	username: string
	is_including_today: boolean
	human_readable_range: string
	is_coding_activity_visible: boolean
	is_language_usage_visible: boolean
	is_editor_usage_visible: boolean
	is_category_usage_visible: boolean
	is_os_usage_visible: boolean
}

export interface EditorType extends TimeStatsType {
	name: string
}

export interface DependencyType extends TimeStatsType {
	name: string
}

export interface LanguageType extends TimeStatsType {
	name: string
}

export interface OperatingSystemType extends TimeStatsType {
	name: string
}

export interface MachineType extends TimeStatsType {
	name: string
	machine_name_id: string
}

export interface CategoryType extends TimeStatsType {
	name: string
}

export interface ProjectType extends TimeStatsType {
	name: string
}

export interface TimeStatsType {
	total_seconds: number
	percent: number
	digital: string
	decimal: string
	text: string
	hours: number
	minutes: number
}

export interface BestDayType {
	date: string
	total_seconds: number
	text: string
}

export interface AllTimeType {
	total_seconds: number
	text: string
	decimal: string
	digital: string
	daily_average: number
	is_up_to_date: boolean
	percent_calculated: number
	range: {
		start: string
		start_date: string
		start_text: string
		end: string
		end_date: string
		end_text: string
		timezone: string
	}
	timeout: number
}

export interface UserType {
	id: string
	email: string
	timezone: string
	timeout: number
	writes_only: boolean
	created_at: string
	username: string
	time_format_24hr: boolean
	linkedin_username: string
	website: string
	profile_url_escaped: string
	bio: string
	durations_slice_by: string
	date_format: string
	plan: string
	logged_time_public: boolean
	show_machine_name_ip: boolean
	wonderfuldev_username: string
	last_plugin_name: string
	public_profile_time_range: string
	is_email_public: boolean
	last_branch: string
	suggest_dangling_branches: boolean
	color_scheme: string
	city: CityType
	profile_url: string
	photo: string
}

interface CityType {
	id: string
	name: string
	ascii_name: string
	state: string
	ascii_state: string
	country_code: string
	population: number
	timezone: string
	title: string
	short_title: string
	country: string
}
