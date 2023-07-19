import { Container } from './styles/TranslateButtonStyles'
import SpainFlag from '../../assets/images/translateIcons/spain-flag.svg'
import EnglandFlag from '../../assets/images/translateIcons/england-flag.svg'
import { useContext } from 'react'
import { LangContext } from '../../context/LangContext'

export const TranslateButton = () => {
	const { changeLang, lang } = useContext(LangContext)

	return (
		<Container>
			<button
				onClick={() => changeLang('en-US')}
				className={lang === 'en-US' ? lang : ''}
				title="Translate to english"
			>
				<img src={EnglandFlag} alt="Flag" />
			</button>
			<button
				onClick={() => changeLang('es-MX')}
				className={lang === 'es-MX' ? lang : ''}
				title="Traducir a español"
			>
				<img src={SpainFlag} alt="Flag" />
			</button>
		</Container>
	)
}
