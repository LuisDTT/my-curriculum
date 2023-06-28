import { styled } from 'styled-components'

interface SectionContainerProps {
	readonly $direction?: string
}

export const SectionContainerStyles = styled.section<SectionContainerProps>`
	display: flex;
	flex-direction: ${({ $direction }) => $direction || 'column'};
	margin-top: 3rem;

	.title {
		margin-right: 3rem;
		color: ${({ theme }) => theme.colors.headline};
		width: fit-content;
		position: relative;
		.accent {
			background-color: ${({ theme }) =>
				theme.colors.transparentColors.secondary};
			display: block;
			position: absolute;
			height: 60%;
			top: 0px;
			right: -75px;
			z-index: -1;
			width: 180px;
		}
	}
`
