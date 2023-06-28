import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    *  { 
        ${({ theme }) => {
					return (
						theme.colors.mode === 'dark' &&
						`scrollbar-color: #666 ${theme.colors.bg};
                        &::-webkit-scrollbar {
                            background: ${theme.colors.bg};
                            
                        }
                        &::-webkit-scrollbar-thumb {
                            background-color: #666;
                        }

                        `
					)
				}}
    }
`

export default GlobalStyle
