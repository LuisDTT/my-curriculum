import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import { IllustrationStyle } from './styles/IllustrationHomeStyles'

export const IllustrationHome = () => {
	const darkMode = useContext(ThemeContext).checked

	return (
		<IllustrationStyle>
			<div
				className={`illustration illustration-squares ${
					!darkMode ? 'squares-enter' : 'squares-leave'
				}`}
			>
				<span className={`squares ${!darkMode ? 'squares-loop' : ''}`}></span>
			</div>

			<div
				className={`illustration illustration-moon ${
					darkMode ? 'moon-enter' : 'moon-leave'
				}`}
			>
				<span className={`moon ${darkMode ? 'moon-loop' : ''}`}></span>
			</div>
		</IllustrationStyle>
	)
}
