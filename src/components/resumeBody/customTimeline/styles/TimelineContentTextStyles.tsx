import { styled } from 'styled-components'

export const LeftContentStyles = styled.div`
	min-width: 160px;
	@media screen and (min-width: 1500px) {
		min-width: 220px;
	}
	@media screen and (max-width: 500px) {
		min-width: 100px;
	}
	.heading {
		color: ${({ theme }) => theme.colors.headline};
		font-weight: 600;
		margin: 0;
		font-size: 18px;
	}
	.text {
		color: ${({ theme }) => theme.colors.paragraph};
		margin-top: 20px;
	}
`

export const RightContentStyles = styled.div`
	.heading {
		color: ${({ theme }) => theme.colors.others.headline};
		font-weight: 800;
		margin: 0;
		text-transform: capitalize;
	}
	.text {
		color: ${({ theme }) => theme.colors.paragraph};
		display: block;
		margin-bottom: 20px;
		margin-top: 5px;
	}
`
