import { styled } from 'styled-components'

export const ProjectInfoStyles = styled.div`
	width: 100%;
	height: 100%;
	.project-paragraph {
		margin: 2rem 0;
		color: ${({ theme }) => theme.colors.paragraph};
	}
`

export const CustomAccentStyles = styled.span`
	position: relative;
	left: 0.5em;
	&::before {
		content: '';
		background-color: ${({ theme }) =>
			theme.colors.transparentColors.secondary};
		display: block;
		position: absolute;
		height: 60%;
		top: 0px;
		right: -20px;
		z-index: -1;
		width: 150px;
	}
`
