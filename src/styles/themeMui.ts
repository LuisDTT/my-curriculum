import { PaletteMode, ThemeOptions } from '@mui/material'
import {
	headlineColor,
	paragraphColor,
	primaryColor,
	secondaryColor,
	white
} from './variables/lightColors'
import {
	darkHeadlineColor,
	darkParagraphColor,
	darkPrimaryColor,
	darkSecondaryColor
} from './variables/darkColors'
import hexToRgba from 'hex-to-rgba'

export const getDesignTokens = (mode: PaletteMode): ThemeOptions => ({
	palette: {
		mode,
		...(mode === 'light'
			? {
					// palette values for light mode
					primary: {
						main: primaryColor,
						contrastText: headlineColor
					},
					secondary: {
						main: secondaryColor
					},
					text: {
						primary: paragraphColor
					},

					custom: {
						primary: primaryColor,
						transparentColors: {
							primary: hexToRgba(primaryColor, '.3')
						},
						buttonText: white,
						contrast: primaryColor
					}
			  }
			: {
					// palette values for dark mode
					primary: {
						main: darkPrimaryColor,
						contrastText: darkHeadlineColor
					},
					secondary: {
						main: darkSecondaryColor
					},
					text: {
						primary: darkParagraphColor,
						secondary: white
					},
					custom: {
						primary: white,
						transparentColors: {
							primary: hexToRgba(white, '.3')
						},
						buttonText: white,
						contrast: darkSecondaryColor
					}
			  })
	},
	typography: {
		fontFamily: ['Lato'].join(',')
	}
})
