import { styled } from 'styled-components'

export const BodyError = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	background-color: ${({ theme }) => theme.colors.bg};
	height: 100vh;
	text-align: center;
	gap: 20px;
	h2 {
		color: ${({ theme }) => theme.colors.headline};
		margin-top: 20px;
		font-weight: 700;
	}
	p {
		color: ${({ theme }) => theme.colors.paragraph};
	}
`
export const ErrorContainer = styled.section`
	font-size: 30px;
	color: ${({ theme }) => theme.colors.headline};
	display: flex;
	gap: 10px;
	justify-content: center;
`
