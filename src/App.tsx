import GlobalStyle from './styles/GlobalStyle.ts'
import { LangProvider } from './context/LangContext.tsx'
import { ThemeProvider } from './context/ThemeContext.tsx'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'

function App(): JSX.Element {
	return (
		<ThemeProvider>
			<GlobalStyle />
			<LangProvider>
				<RouterProvider router={router} />
			</LangProvider>
		</ThemeProvider>
	)
}

export default App
