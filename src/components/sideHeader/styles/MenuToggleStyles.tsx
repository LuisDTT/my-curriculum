import { styled } from 'styled-components'

interface ContainerProps {
	position: string
}

export const Container = styled.div<ContainerProps>`
	display: none;
	@media screen and (max-width: 720px) {
		z-index: 40;
		position: ${({ position }) => position || 'absolute'};
		display: block;
		top: 1.9rem;
		right: 1.9rem;
	}
	@media screen and (max-width: 420px) {
		top: 10px;
		right: 10px;
	}
`
