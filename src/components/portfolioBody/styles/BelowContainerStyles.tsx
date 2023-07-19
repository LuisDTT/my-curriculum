import { styled } from 'styled-components'

export const BelowContainerStyles = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 15px;

	.subtitle {
		color: ${({ theme }) => theme.colors.paragraph};
		display: flex;
		gap: 5px;
		align-items: center;
		a {
			color: ${({ theme }) => theme.colors.transparentColors.secondary};
			text-decoration: none;
			&:hover {
				text-decoration: underline;
			}
		}
	}

	.backLink {
		span {
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 3px;
		}
		display: flex;
		max-height: 25px;
		text-decoration: none;
		text-transform: uppercase;
		padding: 5px 10px;
		border-radius: 8px;
		box-shadow: 0px 5px 8px 0 ${({ theme }) => theme.colors.boxShadow.primary};
		margin-left: 40px;
		background-color: ${({ theme }) => theme.colors.tertiary};
		color: ${({ theme }) => theme.colors.white};
		&:hover {
			opacity: 0.92;
			box-shadow: none;
		}
	}
`
