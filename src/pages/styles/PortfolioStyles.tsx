import { styled } from 'styled-components'

export const PortfolioStyles = styled.div`
	.subtitle {
		color: ${({ theme }) => theme.colors.paragraph};
	}
	.cards-container {
		margin-top: 2rem;
		display: grid;
		gap: 2.5rem;
		/* justify-content: center; */
		grid-template-columns: repeat(auto-fill, minmax(372px, 1fr));
		@media screen and (max-width: 1400px) {
			grid-template-columns: repeat(auto-fill, minmax(462px, 1fr));
		}
		@media screen and (max-width: 1000px) {
			grid-template-columns: 1fr;
		}
	}
`
