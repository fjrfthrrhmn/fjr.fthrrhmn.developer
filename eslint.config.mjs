// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import { dirname } from "path"
import { fileURLToPath } from "url"

import { FlatCompat } from "@eslint/eslintrc"
import storybook from "eslint-plugin-storybook"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
	baseDirectory: __dirname
})

const eslintConfig = [
	...storybook.configs["flat/recommended"],
	...compat.config({
		extends: ["next/core-web-vitals", "next/typescript"],
		rules: {
			"no-unused-vars": "off",
			"@typescript-eslint/no-explicit-any": "off"
		}
	})
]

export default eslintConfig
