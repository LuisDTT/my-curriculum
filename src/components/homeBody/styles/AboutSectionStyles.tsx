import { styled } from 'styled-components'

export const AboutSectionStyles = styled.section`
	width: 70%;
	/* min-width: 787px; */
	@media screen and (max-width: 1100px) {
		width: 100%;
	}
	@media screen and (max-width: 720px) {
		width: 100%;
		text-align: center;
		h1 {
			padding: 0 2rem;
			min-width: 250px;
			box-sizing: border-box;
		}
	}
	h1 {
		margin-top: 2.5rem;
		color: ${({ theme }) => theme.colors.headline};
		user-select: none;
		font-weight: 500;
		span {
			color: ${({ theme }) => theme.colors.secondary};
		}
	}
	.text {
		color: ${({ theme }) => theme.colors.paragraph};
		position: relative;
		margin: 2.5rem 0;
		z-index: 100;
	}
`
