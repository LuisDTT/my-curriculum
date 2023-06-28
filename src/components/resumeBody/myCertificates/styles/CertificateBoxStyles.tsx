import { styled } from 'styled-components'

export const CertificateBoxStyles = styled.div<{ $bgImage?: string }>`
	background-color: ${({ theme }) => theme.colors.transparentColors.white};
	display: grid;
	width: 100%;
	grid-template-columns: 1fr 2fr;
	border-radius: 15px 0px 0px 15px;
	box-shadow: 0px 4px 14px 0px ${({ theme }) => theme.colors.boxShadow.primary};
	overflow: hidden;

	.box {
	}
	.left-box {
		background-color: ${({ theme }) => theme.colors.primary};
		text-transform: uppercase;
		padding: 1.5rem 3rem;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		.text {
			text-decoration: none;
			position: relative;
			z-index: 20;
			color: ${({ theme }) => theme.colors.white};
			&:hover {
				cursor: pointer;
				text-decoration: underline;
			}
		}

		.bgImage {
			display: block;
			position: absolute;
			width: 100%;
			height: 100%;
			background: ${({ $bgImage }) => `no-repeat url(${$bgImage}) 50% 50%`};
			background-size: 45%;
			opacity: 0.2;
			z-index: 10;
		}
	}
	.right-box {
		margin: 15px;
		display: flex;
		flex-direction: column;
		gap: 20px;
		/* background-color: ${({ theme }) => theme.colors}; */
		.header-text {
			color: ${({ theme }) => theme.colors.headline};
			text-transform: capitalize;
		}
		.date-text {
			color: ${({ theme }) => theme.colors.paragraph};
			text-transform: capitalize;
			font-weight: 100;
		}
	}
`
