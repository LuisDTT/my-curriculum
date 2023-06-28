import { createContext, useMemo, useState } from 'react'
import { PaletteMode, createTheme, responsiveFontSizes } from '@mui/material'
import { getDesignTokens } from '../styles/themeMui.ts'
import { lightTheme, darkTheme } from '../styles/themeStyled.ts'
import { ThemeProvider as ThemeMuiProvider } from '@mui/material'
import { ThemeProvider as ThemeStyledProvider } from 'styled-components'

interface ThemeContext {
	toggleTheme: () => void
	checked: boolean
}

const ThemeContext = createContext<ThemeContext>({
	toggleTheme: () => {},
	checked: false
})

interface ThemeProviderProps {
	children: JSX.Element | JSX.Element[]
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
	let defaultMode: PaletteMode

	const currentMode = localStorage.getItem('theme')

	if (currentMode) {
		if (currentMode === 'light') {
			defaultMode = 'light'
		} else {
			defaultMode = 'dark'
		}
	} else {
		defaultMode = 'light'
	}

	const [mode, setMode] = useState(defaultMode)

	const Theme = useMemo(
		() => ({
			// The dark mode switch would invoke this method
			toggleTheme: () => {
				setMode((prevMode: PaletteMode) =>
					prevMode === 'light' ? 'dark' : 'light'
				)
			}
		}),
		[]
	)
	let MuiTheme = useMemo(() => createTheme(getDesignTokens(mode)), [mode])
	MuiTheme = responsiveFontSizes(MuiTheme)

	localStorage.setItem('theme', mode)

	return (
		<ThemeContext.Provider
			value={{ ...Theme, checked: mode === 'light' ? false : true }}
		>
			<ThemeStyledProvider theme={mode === 'light' ? lightTheme : darkTheme}>
				<ThemeMuiProvider theme={MuiTheme}>{children}</ThemeMuiProvider>
			</ThemeStyledProvider>
		</ThemeContext.Provider>
	)
}

export { ThemeProvider, ThemeContext }
