import { styled } from 'styled-components'

export const GetInTouchStyles = styled.div`
	margin-top: 8%;
	user-select: none;
	text-align: center;
	cursor: pointer;
	border: ${({ theme }) => {
		return `solid 3px ${theme.colors.white} `
	}};
	border-radius: 8px;
	/* padding: 18px 0; */
	width: 90%;
	height: 70px;
	&:hover {
		background-color: ${({ theme }) => theme.colors.transparentColors.primary};
	}
	.text {
		text-transform: uppercase;

		color: ${({ theme }) => {
			return theme.colors.white
		}};
	}
	a {
		display: block;
		text-decoration: none;
		height: 100%;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`
