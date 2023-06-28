import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import { ThemeSwitchStyles } from './styles/ThemeSwitchStyles'

export const ThemeSwitch = () => {
	const { toggleTheme, checked } = useContext(ThemeContext)

	return <ThemeSwitchStyles checked={checked} onClick={toggleTheme} />
}
