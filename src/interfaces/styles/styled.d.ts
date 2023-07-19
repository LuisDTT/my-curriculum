import 'styled-components'

declare module 'styled-components' {
	export interface DefaultTheme {
		colors: {
			white: string
			bg: string
			headline: string
			paragraph: string
			primary: string
			secondary: string
			tertiary: string
			transparentColors: {
				primary: string
				headline: string
				secondary: string
				bg: string
				shadowColor: string
				white: string
				projectCardHover: string
			}
			boxShadow: {
				primary: string
			}
			others: {
				headline: string
				primaryText: string
				icons: string
			}
			mode: string
		}
		typography: {
			fontFamily: string
		}
	}
}
