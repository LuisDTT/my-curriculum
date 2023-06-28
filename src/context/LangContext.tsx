import { createContext, useState } from 'react'
import { IntlProvider } from 'react-intl'
import SpanishLang from '../lang/es-MX.json'
import EnglishLang from '../lang/en-US.json'

interface LangContextProps {
	changeLang: (lang: string) => void
	lang: string
}

const LangContext = createContext<LangContextProps>({
	changeLang: (_lang: string) => {},
	lang: ''
})

interface LangProviderProps {
	children: JSX.Element | JSX.Element[]
}

const LangProvider = ({ children }: LangProviderProps) => {
	let defaultLocale
	let defaultLangMsg
	const lang = localStorage.getItem('lang')

	if (lang) {
		defaultLocale = lang
		if (lang === 'es-MX') {
			defaultLangMsg = SpanishLang
		} else if (lang === 'en-US') {
			defaultLangMsg = EnglishLang
		}
	} else {
		defaultLocale = 'en-US'
		defaultLangMsg = EnglishLang
	}
	const [langMsg, setLangMsg] = useState(defaultLangMsg)
	const [locale, setLocale] = useState(defaultLocale)

	const changeLang = (lang: string) => {
		switch (lang) {
			case 'en-US':
				setLangMsg(EnglishLang)
				setLocale(lang)
				localStorage.setItem('lang', lang)
				break
			case 'es-MX':
				setLangMsg(SpanishLang)
				setLocale(lang)
				localStorage.setItem('lang', lang)
				break
			default:
				setLangMsg(EnglishLang)
				setLocale('en-US')
				localStorage.setItem('lang', 'en-US')
		}
	}
	return (
		<LangContext.Provider value={{ changeLang, lang: locale }}>
			<IntlProvider locale={locale} messages={langMsg}>
				{children}
			</IntlProvider>
		</LangContext.Provider>
	)
}

export { LangContext, LangProvider }
