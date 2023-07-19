import { styled } from 'styled-components'

export const SuccessfulCardStyles = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 4rem auto;
	max-width: 350px;
	color: ${({ theme }) => theme.colors.headline};
	.tick {
		color: #008f39;
		font-size: 140px;
	}
`
