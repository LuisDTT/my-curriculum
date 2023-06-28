import { styled } from 'styled-components'

export const GetInTouchStyles = styled.div`
	margin-top: 60px;
	user-select: none;
	text-align: center;
	cursor: pointer;
	border: ${({ theme }) => {
		return `solid 3px ${theme.colors.white} `
	}};
	border-radius: 8px;
	padding: 18px 0;
	width: 90%;
	&:hover {
		background-color: ${({ theme }) => theme.colors.transparentColors.primary};
	}
	.text {
		text-transform: uppercase;

		color: ${({ theme }) => {
			return theme.colors.white
		}};
	}
`
