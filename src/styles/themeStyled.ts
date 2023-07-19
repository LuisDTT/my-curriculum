import {
	bgColor,
	headlineColor,
	paragraphColor,
	tertiaryColor,
	primaryColor,
	secondaryColor,
	white,
	black
} from './variables/lightColors'

import {
	darkBgColor,
	darkHeadlineColor,
	darkParagraphColor,
	darkPrimaryColor,
	darkSecondaryColor,
	darkTertiaryColor
} from './variables/darkColors'

import { DefaultTheme } from 'styled-components'
import hexToRgba from 'hex-to-rgba'

export const lightTheme: DefaultTheme = {
	colors: {
		white: white,
		bg: bgColor,
		headline: headlineColor,
		paragraph: paragraphColor,
		primary: primaryColor,
		secondary: secondaryColor,
		tertiary: tertiaryColor,
		transparentColors: {
			primary: hexToRgba(primaryColor, '0.40'),
			headline: hexToRgba(headlineColor, '.5'),
			secondary: hexToRgba(secondaryColor, '0.83'),
			bg: hexToRgba(bgColor, '0.80'),
			shadowColor: hexToRgba(primaryColor, '.25'),
			white: hexToRgba(white, '.2'),
			projectCardHover: hexToRgba(headlineColor, '.50')
		},
		boxShadow: {
			primary: hexToRgba(black, '.25')
		},
		others: {
			headline: black,
			primaryText: white,
			icons: primaryColor
		},
		mode: 'light'
	},
	typography: {
		fontFamily: 'Lato'
	}
}

export const darkTheme: DefaultTheme = {
	colors: {
		white: white,
		bg: darkBgColor,
		headline: darkHeadlineColor,
		paragraph: darkParagraphColor,
		primary: darkPrimaryColor,
		secondary: darkSecondaryColor,
		tertiary: darkTertiaryColor,
		transparentColors: {
			primary: hexToRgba(darkBgColor, '0.88'),
			secondary: hexToRgba(darkSecondaryColor, '0.83'),
			headline: hexToRgba(darkHeadlineColor, '.83'),
			bg: hexToRgba(darkBgColor, '.65'),
			shadowColor: hexToRgba(darkSecondaryColor, '.1'),
			white: hexToRgba(white, '.05'),
			projectCardHover: hexToRgba(darkBgColor, '.50')
		},
		boxShadow: {
			primary: hexToRgba(white, '.25')
		},
		others: {
			headline: white,
			primaryText: white,
			icons: darkSecondaryColor
		},
		mode: 'dark'
	},
	typography: {
		fontFamily: 'Lato'
	}
}
