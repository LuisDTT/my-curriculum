import GlobalStyle from './styles/GlobalStyle.ts'
import { LangProvider } from './context/LangContext.tsx'
import { ThemeProvider } from './context/ThemeContext.tsx'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import { HelmetProvider } from 'react-helmet-async'

function App(): JSX.Element {
	return (
		<ThemeProvider>
			<GlobalStyle />
			<LangProvider>
				<HelmetProvider>
					<RouterProvider router={router} />
				</HelmetProvider>
			</LangProvider>
		</ThemeProvider>
	)
}

export default App
