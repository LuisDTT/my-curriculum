import { styled } from 'styled-components'

interface Props {
	$positionFixed?: 'fixed' | null
}

export const ContainerStyles = styled.div<Props>`
	min-height: 700px;
	display: grid;
	grid-template-columns: minmax(300px, 380px) 1fr;

	main {
		position: relative;
		z-index: 1;
		.body {
			height: 100%;
			width: 100%;
			padding: 2rem 3rem;
			background-color: ${({ theme }) => theme.colors.transparentColors.bg};
			position: relative;
			z-index: 20;
			box-sizing: border-box;

			@media screen and (max-width: 920px) {
				padding: 1.5rem;
			}
			@media screen and (max-width: 720px) {
				padding: 2rem;
			}
			@media screen and (max-width: 420px) {
				padding: 1rem;
			}
		}
		.bg-circles {
			display: ${({ theme }) =>
				theme.colors.mode === 'dark' ? 'flex' : 'none'};
			padding: 20% 10%;
			z-index: -1;
			position: fixed;
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
			background-color: ${({ theme }) => theme.colors.bg};
			box-sizing: border-box;
			justify-content: center;
		}
		.circle {
			display: block;
			width: 1px;
			height: 1px;
			position: absolute;
		}

		.yellow-circle {
			background-color: yellow;
			box-shadow: 0px 0px 146px 60px ${({ theme }) => theme.colors.secondary};
			right: 20%;
			top: 30%;
		}

		.purple-circle {
			background-color: purple;
			align-self: flex-end;
			box-shadow: 0px 0px 146px 60px ${({ theme }) => theme.colors.tertiary};
			left: 45%;
			bottom: 30%;
		}
	}

	@media screen and (max-width: 1445px) {
		grid-template-columns: minmax(300px, 380px) minmax(400px, 1fr);
	}

	@media screen and (max-width: 720px) {
		grid-template-columns: 1fr;
		position: relative;
		z-index: 10;
		main {
			position: ${({ $positionFixed }) => $positionFixed || 'relative'};
		}
	}
`
